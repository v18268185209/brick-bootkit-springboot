package com.zqzqq.bootkits.scripts.executor;

import com.zqzqq.bootkits.scripts.core.*;

import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * PowerShell脚本执行器
 * 用于执行PowerShell脚本，支持Windows PowerShell和PowerShell Core
 *
 * @author starBlues
 * @since 4.0.1
 */
public class PowerShellExecutor extends AbstractScriptExecutor {
    
    private static final String[] POWERSHELL_COMMANDS = {
        "powershell", "powershell.exe", "pwsh", "pwsh.exe"
    };
    
    private String powerShellPath;
    private String powerShellVersion;
    private boolean isPowerShellCore;
    
    /**
     * PowerShell环境检查结果
     */
    public static class PowerShellEnvironmentCheck {
        private boolean available;
        private String errorMessage;
        private Exception exception;
        private List<String> diagnostics;
        private boolean isPowerShellCore;
        private String version;
        
        public PowerShellEnvironmentCheck(boolean available) {
            this.available = available;
            this.diagnostics = new ArrayList<>();
        }
        
        public PowerShellEnvironmentCheck(String errorMessage, Exception exception) {
            this.available = false;
            this.errorMessage = errorMessage;
            this.exception = exception;
            this.diagnostics = new ArrayList<>();
        }
        
        public boolean isAvailable() { return available; }
        public String getErrorMessage() { return errorMessage; }
        public Exception getException() { return exception; }
        public List<String> getDiagnostics() { return diagnostics; }
        public boolean isPowerShellCore() { return isPowerShellCore; }
        public String getVersion() { return version; }
        
        public void addDiagnostic(String diagnostic) {
            diagnostics.add(diagnostic);
        }
        
        public void setPowerShellCore(boolean isPowerShellCore) {
            this.isPowerShellCore = isPowerShellCore;
        }
        
        public void setVersion(String version) {
            this.version = version;
        }
        
        public String getFullErrorMessage() {
            if (diagnostics.isEmpty()) {
                return errorMessage;
            }
            return errorMessage + "\n诊断信息:\n" + String.join("\n", diagnostics);
        }
    }
    
    /**
     * 构造函数，使用默认PowerShell
     */
    public PowerShellExecutor() {
        this.powerShellPath = findDefaultPowerShell();
        if (this.powerShellPath != null) {
            PowerShellEnvironmentCheck check = checkPowerShellEnvironment();
            if (check.isAvailable()) {
                this.powerShellVersion = check.getVersion();
                this.isPowerShellCore = check.isPowerShellCore();
            }
        }
    }
    
    /**
     * 构造函数
     *
     * @param powerShellPath 指定PowerShell路径
     */
    public PowerShellExecutor(String powerShellPath) {
        this.powerShellPath = powerShellPath;
        this.powerShellVersion = detectPowerShellVersion();
        this.isPowerShellCore = isPowerShellCore();
        
        if (this.powerShellPath == null || this.powerShellPath.trim().isEmpty()) {
            throw new IllegalArgumentException("PowerShell路径不能为空");
        }
    }

    @Override
    public OperatingSystem[] getSupportedOperatingSystems() {
        return new OperatingSystem[] {
            OperatingSystem.WINDOWS,
            OperatingSystem.LINUX,
            OperatingSystem.MACOS,
            OperatingSystem.UNIX
        };
    }

    @Override
    public ScriptType[] getSupportedScriptTypes() {
        return new ScriptType[] {
            ScriptType.POWERSHELL,
            ScriptType.SHELL
        };
    }

    @Override
    protected ScriptExecutionResult doExecute(File scriptFile, String[] arguments, 
                                             ScriptConfiguration configuration, LocalDateTime startTime) throws Exception {
        // 检查PowerShell环境
        PowerShellEnvironmentCheck envCheck = checkPowerShellEnvironment();
        if (!envCheck.isAvailable()) {
            return ScriptExecutionResult.failed(
                ScriptExecutionResult.ExecutionStatus.ENVIRONMENT_ERROR,
                "PowerShell环境检查失败: " + envCheck.getErrorMessage(),
                envCheck.getException());
        }
        
        // 检查脚本文件
        if (!scriptFile.exists()) {
            return ScriptExecutionResult.failed(
                ScriptExecutionResult.ExecutionStatus.ENVIRONMENT_ERROR,
                "PowerShell脚本文件不存在: " + scriptFile.getAbsolutePath(), null);
        }
        
        if (!scriptFile.canRead()) {
            return ScriptExecutionResult.failed(
                ScriptExecutionResult.ExecutionStatus.ENVIRONMENT_ERROR,
                "PowerShell脚本文件不可读: " + scriptFile.getAbsolutePath(), null);
        }
        
        try {
            ProcessBuilder processBuilder = createProcessBuilder(scriptFile, arguments, configuration);
            
            // 设置PowerShell特定的环境变量
            processBuilder.environment().put("POWERSHELL_SCRIPT", scriptFile.getAbsolutePath());
            processBuilder.environment().put("SCRIPT_PATH", scriptFile.getAbsolutePath());
            processBuilder.environment().put("POWERSHELL_VERSION", powerShellVersion);
            
            // 如果是PowerShell Core，设置相应的变量
            if (isPowerShellCore) {
                processBuilder.environment().put("POWERSHELL_CORE", "true");
            }
            
            return executeProcess(processBuilder, configuration, startTime, scriptFile);
            
        } catch (Exception e) {
            String errorMessage = String.format(
                "PowerShell脚本执行失败 (PowerShell: %s, 版本: %s, 脚本: %s): %s",
                powerShellPath, powerShellVersion, scriptFile.getName(), e.getMessage()
            );
            
            return ScriptExecutionResult.failed(
                ScriptExecutionResult.ExecutionStatus.FAILED,
                errorMessage, e);
        }
    }

    @Override
    protected void buildCommand(List<String> command, File scriptFile, String[] arguments) {
        // 构建PowerShell执行命令
        List<String> psCommand = new ArrayList<>();
        psCommand.add("-ExecutionPolicy");
        psCommand.add("Bypass"); // 允许执行脚本
        psCommand.add("-File");
        psCommand.add(scriptFile.getAbsolutePath());
        
        // 添加参数
        if (arguments != null && arguments.length > 0) {
            psCommand.add("-Arguments");
            psCommand.add(String.join(" ", arguments));
        }
        
        command.add(powerShellPath);
        command.addAll(psCommand);
    }

    /**
     * 查找默认PowerShell
     *
     * @return 默认PowerShell路径
     */
    private String findDefaultPowerShell() {
        for (String psCommand : POWERSHELL_COMMANDS) {
            if (isPowerShellAvailable(psCommand)) {
                return psCommand;
            }
        }
        return null;
    }

    /**
     * 检查指定PowerShell命令是否可用
     *
     * @param powerShellCommand PowerShell命令
     * @return 是否可用
     */
    private boolean isPowerShellAvailable(String powerShellCommand) {
        try {
            Process process = new ProcessBuilder(powerShellCommand, "-Version").start();
            boolean completed = process.waitFor(5, java.util.concurrent.TimeUnit.SECONDS);
            return completed && process.exitValue() == 0;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 检测PowerShell版本
     *
     * @return PowerShell版本字符串
     */
    private String detectPowerShellVersion() {
        if (powerShellPath == null) {
            return null;
        }
        
        try {
            Process process = new ProcessBuilder(powerShellPath, "-Version").start();
            java.io.BufferedReader reader = new java.io.BufferedReader(
                new java.io.InputStreamReader(process.getInputStream()));
            String version = reader.readLine();
            process.waitFor();
            return version != null ? version.trim() : "Unknown";
        } catch (Exception e) {
            return "Unknown";
        }
    }

    /**
     * 检查是否为PowerShell Core
     *
     * @return 是否为PowerShell Core
     */
    private boolean isPowerShellCore() {
        if (powerShellPath == null) {
            return false;
        }
        
        try {
            Process process = new ProcessBuilder(powerShellPath, "-Command", "Write-Host $PSVersionTable.PSVersion").start();
            java.io.BufferedReader reader = new java.io.BufferedReader(
                new java.io.InputStreamReader(process.getInputStream()));
            String output = reader.readLine();
            process.waitFor();
            
            if (output != null && output.contains(".")) {
                // PowerShell Core通常有更复杂的版本号
                return !output.matches("^\\d+\\.\\d+$");
            }
        } catch (Exception e) {
            // 忽略错误
        }
        return false;
    }

    /**
     * 执行详细的PowerShell环境检查
     *
     * @return PowerShell环境检查结果
     */
    public PowerShellEnvironmentCheck checkPowerShellEnvironment() {
        PowerShellEnvironmentCheck check = new PowerShellEnvironmentCheck(true);
        
        // 检查PowerShell路径
        if (powerShellPath == null || powerShellPath.trim().isEmpty()) {
            return new PowerShellEnvironmentCheck(
                "未找到PowerShell解释器。请安装PowerShell或配置PowerShell路径。",
                new RuntimeException("PowerShell not found"));
        }
        
        // 检查文件存在性和可执行性
        File psFile = new File(powerShellPath);
        if (!psFile.exists()) {
            return new PowerShellEnvironmentCheck(
                String.format("PowerShell解释器文件不存在: %s", powerShellPath),
                new RuntimeException("PowerShell file not found"));
        }
        
        if (!psFile.canExecute()) {
            return new PowerShellEnvironmentCheck(
                String.format("PowerShell解释器不可执行: %s", powerShellPath),
                new RuntimeException("PowerShell not executable"));
        }
        
        // 检查PowerShell版本
        try {
            Process process = new ProcessBuilder(powerShellPath, "-Version").start();
            java.io.BufferedReader reader = new java.io.BufferedReader(
                new java.io.InputStreamReader(process.getInputStream()));
            String version = reader.readLine();
            boolean completed = process.waitFor(5, java.util.concurrent.TimeUnit.SECONDS);
            
            if (!completed) {
                process.destroyForcibly();
                return new PowerShellEnvironmentCheck(
                    "PowerShell版本检查超时: " + powerShellPath,
                    new RuntimeException("PowerShell version check timeout"));
            }
            
            int exitCode = process.exitValue();
            if (exitCode != 0) {
                return new PowerShellEnvironmentCheck(
                    String.format("PowerShell版本检查失败 (退出码: %d): %s", exitCode, powerShellPath),
                    new RuntimeException("PowerShell version check failed"));
            }
            
            if (version != null) {
                powerShellVersion = version.trim();
                check.setVersion(powerShellVersion);
                check.addDiagnostic("PowerShell版本: " + powerShellVersion);
            }
            
        } catch (Exception e) {
            return new PowerShellEnvironmentCheck(
                "PowerShell版本检测失败: " + e.getMessage(),
                e);
        }
        
        // 检查是否为PowerShell Core
        boolean isCore = isPowerShellCore();
        check.setPowerShellCore(isCore);
        check.addDiagnostic("类型: " + (isCore ? "PowerShell Core" : "Windows PowerShell"));
        
        // 检查PowerShell执行策略
        check.addDiagnostic(checkExecutionPolicy(check));
        
        return check;
    }
    
    /**
     * 检查PowerShell执行策略
     *
     * @param check PowerShell环境检查结果对象
     * @return 执行策略检查结果
     */
    private String checkExecutionPolicy(PowerShellEnvironmentCheck check) {
        try {
            Process process = new ProcessBuilder(powerShellPath, "-Command", "Get-ExecutionPolicy").start();
            java.io.BufferedReader reader = new java.io.BufferedReader(
                new java.io.InputStreamReader(process.getInputStream()));
            String policy = reader.readLine();
            boolean completed = process.waitFor(3, java.util.concurrent.TimeUnit.SECONDS);
            
            if (completed && process.exitValue() == 0 && policy != null) {
                policy = policy.trim();
                check.addDiagnostic("执行策略: " + policy);
                
                if ("Bypass".equalsIgnoreCase(policy) || "RemoteSigned".equalsIgnoreCase(policy)) {
                    return "执行策略检查: 允许";
                } else {
                    return "执行策略检查: 可能需要调整 (当前: " + policy + ")";
                }
            } else {
                if (!completed) {
                    process.destroyForcibly();
                }
                return "执行策略检查: 无法确定";
            }
        } catch (Exception e) {
            return "执行策略检查: 失败 (" + e.getMessage() + ")";
        }
    }

    /**
     * 获取PowerShell路径
     *
     * @return PowerShell路径
     */
    public String getPowerShellPath() {
        return powerShellPath;
    }

    /**
     * 设置PowerShell路径
     *
     * @param powerShellPath PowerShell路径
     */
    public void setPowerShellPath(String powerShellPath) {
        this.powerShellPath = powerShellPath;
        this.powerShellVersion = detectPowerShellVersion();
        this.isPowerShellCore = isPowerShellCore();
    }

    /**
     * 获取PowerShell版本
     *
     * @return PowerShell版本
     */
    public String getPowerShellVersion() {
        return powerShellVersion;
    }



    /**
     * 检查PowerShell是否可用
     *
     * @return 是否可用
     */
    public boolean isPowerShellAvailable() {
        return powerShellPath != null && isPowerShellAvailable(powerShellPath);
    }

    /**
     * 列出所有可用的PowerShell解释器
     *
     * @return 可用的PowerShell解释器列表
     */
    public static List<String> listAvailablePowerShellInterpreters() {
        List<String> available = new ArrayList<>();
        for (String psCommand : POWERSHELL_COMMANDS) {
            try {
                Process process = new ProcessBuilder(psCommand, "-Version").start();
                boolean completed = process.waitFor(2, java.util.concurrent.TimeUnit.SECONDS);
                if (completed && process.exitValue() == 0) {
                    java.io.BufferedReader reader = new java.io.BufferedReader(
                        new java.io.InputStreamReader(process.getInputStream()));
                    String version = reader.readLine();
                    available.add(psCommand + " - " + (version != null ? version.trim() : "Unknown"));
                }
                if (!completed) {
                    process.destroyForcibly();
                }
            } catch (Exception e) {
                // 忽略错误
            }
        }
        return available;
    }
    
    /**
     * 获取PowerShell安装建议
     *
     * @param operatingSystem 当前操作系统
     * @return 安装建议列表
     */
    public static List<String> getPowerShellInstallationSuggestions(OperatingSystem operatingSystem) {
        List<String> suggestions = new ArrayList<>();
        
        suggestions.add("=== PowerShell安装建议 ===");
        
        if (operatingSystem == OperatingSystem.WINDOWS) {
            suggestions.add("1. Windows PowerShell 5.1通常已预装");
            suggestions.add("2. 安装PowerShell Core: https://github.com/PowerShell/PowerShell/releases");
            suggestions.add("3. 使用 Chocolatey: choco install powershell-core");
            suggestions.add("4. 使用 winget: winget install Microsoft.PowerShell");
        } else if (operatingSystem == OperatingSystem.LINUX) {
            suggestions.add("1. Ubuntu/Debian: sudo apt update && sudo apt install powershell");
            suggestions.add("2. CentOS/RHEL: sudo yum install powershell");
            suggestions.add("3. Fedora: sudo dnf install powershell");
            suggestions.add("4. 使用Snap: sudo snap install powershell --classic");
        } else if (operatingSystem == OperatingSystem.MACOS) {
            suggestions.add("1. 使用 Homebrew: brew install --cask powershell");
            suggestions.add("2. 使用 MacPorts: sudo port install powershell");
            suggestions.add("3. 从 GitHub下载: https://github.com/PowerShell/PowerShell/releases");
        } else {
            suggestions.add("1. 从 https://github.com/PowerShell/PowerShell/releases 下载并安装");
            suggestions.add("2. 确保PowerShell已添加到系统PATH环境变量中");
        }
        
        suggestions.add("\n=== 验证安装 ===");
        suggestions.add("安装完成后，在命令行中运行以下命令验证:");
        suggestions.add("  powershell -Version");
        suggestions.add("  pwsh -Version");
        suggestions.add("  which powershell (Linux/Mac)");
        
        return suggestions;
    }
    
    /**
     * 尝试自动修复PowerShell环境
     *
     * @return 修复结果
     */
    public PowerShellEnvironmentCheck attemptAutoFix() {
        PowerShellEnvironmentCheck check = checkPowerShellEnvironment();
        if (check.isAvailable()) {
            return check; // 环境正常，无需修复
        }
        
        // 尝试查找其他PowerShell解释器
        String originalPath = powerShellPath;
        for (String psCommand : POWERSHELL_COMMANDS) {
            if (!psCommand.equals(originalPath)) {
                try {
                    if (isPowerShellAvailable(psCommand)) {
                        powerShellPath = psCommand;
                        powerShellVersion = detectPowerShellVersion();
                        isPowerShellCore = isPowerShellCore();
                        
                        // 验证修复后的环境
                        PowerShellEnvironmentCheck newCheck = checkPowerShellEnvironment();
                        if (newCheck.isAvailable()) {
                            newCheck.addDiagnostic("已自动切换到备用PowerShell解释器: " + psCommand);
                            return newCheck;
                        }
                    }
                } catch (Exception e) {
                    // 忽略其他PowerShell解释器的错误
                }
            }
        }
        
        // 恢复原始路径
        powerShellPath = originalPath;
        powerShellVersion = detectPowerShellVersion();
        isPowerShellCore = isPowerShellCore();
        
        return check;
    }

    @Override
    public String toString() {
        return String.format("PowerShellExecutor{powerShellPath='%s', powerShellVersion='%s', isPowerShellCore=%s, supportedOS=%s, supportedTypes=%s}",
                powerShellPath, powerShellVersion, isPowerShellCore,
                java.util.Arrays.toString(getSupportedOperatingSystems()),
                java.util.Arrays.toString(getSupportedScriptTypes()));
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        PowerShellExecutor that = (PowerShellExecutor) obj;
        return java.util.Objects.equals(powerShellPath, that.powerShellPath);
    }
    
    @Override
    public int hashCode() {
        return java.util.Objects.hash(powerShellPath);
    }
}
