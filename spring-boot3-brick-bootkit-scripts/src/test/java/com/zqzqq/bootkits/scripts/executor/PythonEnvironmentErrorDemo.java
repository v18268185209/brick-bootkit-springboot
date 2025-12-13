package com.zqzqq.bootkits.scripts.executor;

import com.zqzqq.bootkits.scripts.core.OperatingSystem;
import com.zqzqq.bootkits.scripts.core.ScriptExecutionResult;
import com.zqzqq.bootkits.scripts.core.ScriptManager;

/**
 * Python环境错误处理演示
 * 展示当系统中不存在Python时的处理机制
 *
 * @author starBlues
 * @since 4.0.1
 */
public class PythonEnvironmentErrorDemo {
    
    public static void main(String[] args) {
        System.out.println("=== Python环境错误处理演示 ===");
        
        // 演示1: 创建默认Python执行器
        demonstrateDefaultPythonExecutor();
        
        // 演示2: 手动指定无效Python路径
        demonstrateInvalidPythonPath();
        
        // 演示3: Python环境诊断
        demonstrateEnvironmentDiagnostics();
        
        // 演示4: 自动修复尝试
        demonstrateAutoFix();
        
        // 演示5: 安装建议
        demonstrateInstallationSuggestions();
        
        // 演示6: 脚本执行中的错误处理
        demonstrateScriptExecutionErrorHandling();
    }
    
    /**
     * 演示默认Python执行器的行为
     */
    private static void demonstrateDefaultPythonExecutor() {
        System.out.println("=== 1. 默认Python执行器演示 ===");
        
        PythonExecutor executor = new PythonExecutor();
        
        System.out.println("Python可用性: " + executor.isPythonAvailable());
        System.out.println("Python路径: " + executor.getPythonPath());
        System.out.println("Python版本: " + executor.getPythonVersion());
        
        if (!executor.isPythonAvailable()) {
            System.out.println("⚠️  未找到Python解释器");
        } else {
            System.out.println("✅ 找到Python解释器");
        }
        System.out.println();
    }
    
    /**
     * 演示无效Python路径的处理
     */
    private static void demonstrateInvalidPythonPath() {
        System.out.println("=== 2. 无效Python路径演示 ===");
        
        try {
            // 尝试创建指向不存在Python的执行器
            PythonExecutor executor = new PythonExecutor("/nonexistent/python");
            System.out.println("创建成功: " + executor.getPythonPath());
            
            // 检查环境
            PythonExecutor.PythonEnvironmentCheck check = executor.checkPythonEnvironment();
            System.out.println("环境检查结果: " + check.isAvailable());
            
            if (!check.isAvailable()) {
                System.out.println("错误信息: " + check.getErrorMessage());
                System.out.println("详细诊断: " + check.getFullErrorMessage());
            }
            
        } catch (Exception e) {
            System.out.println("创建失败: " + e.getMessage());
        }
        System.out.println();
    }
    
    /**
     * 演示Python环境诊断
     */
    private static void demonstrateEnvironmentDiagnostics() {
        System.out.println("=== 3. Python环境诊断演示 ===");
        
        PythonExecutor executor = new PythonExecutor();
        
        // 获取诊断信息
        System.out.println("环境诊断:");
        executor.getPythonEnvironmentDiagnostics().forEach(System.out::println);
        
        // 执行详细环境检查
        System.out.println("\n详细环境检查:");
        PythonExecutor.PythonEnvironmentCheck check = executor.checkPythonEnvironment();
        
        if (check.isAvailable()) {
            System.out.println("✅ Python环境正常");
            check.getDiagnostics().forEach(diag -> System.out.println("  - " + diag));
        } else {
            System.out.println("❌ Python环境有问题");
            System.out.println("错误: " + check.getErrorMessage());
            
            if (check.getException() != null) {
                System.out.println("异常: " + check.getException().getMessage());
            }
        }
        System.out.println();
    }
    
    /**
     * 演示自动修复功能
     */
    private static void demonstrateAutoFix() {
        System.out.println("=== 4. 自动修复演示 ===");
        
        PythonExecutor executor = new PythonExecutor();
        
        System.out.println("修复前状态:");
        PythonExecutor.PythonEnvironmentCheck beforeFix = executor.checkPythonEnvironment();
        System.out.println("  可用: " + beforeFix.isAvailable());
        
        if (!beforeFix.isAvailable()) {
            System.out.println("  尝试自动修复...");
            
            // 尝试自动修复
            PythonExecutor.PythonEnvironmentCheck afterFix = executor.attemptAutoFix();
            
            System.out.println("修复后状态:");
            System.out.println("  可用: " + afterFix.isAvailable());
            
            if (afterFix.isAvailable()) {
                System.out.println("  ✅ 自动修复成功");
                System.out.println("  新路径: " + executor.getPythonPath());
                System.out.println("  新版本: " + executor.getPythonVersion());
            } else {
                System.out.println("  ❌ 自动修复失败");
                System.out.println("  诊断: " + afterFix.getFullErrorMessage());
            }
        } else {
            System.out.println("  ✅ Python环境正常，无需修复");
        }
        System.out.println();
    }
    
    /**
     * 演示安装建议
     */
    private static void demonstrateInstallationSuggestions() {
        System.out.println("=== 5. Python安装建议演示 ===");
        
        OperatingSystem currentOS = OperatingSystem.detectCurrentOS();
        System.out.println("当前操作系统: " + currentOS.getDisplayName());
        
        System.out.println("\nPython安装建议:");
        PythonExecutor.getPythonInstallationSuggestions(currentOS).forEach(System.out::println);
        System.out.println();
    }
    
    /**
     * 演示脚本执行中的错误处理
     */
    private static void demonstrateScriptExecutionErrorHandling() {
        System.out.println("=== 6. 脚本执行错误处理演示 ===");
        
        try {
            // 创建脚本管理器
            ScriptManager scriptManager = new com.zqzqq.bootkits.scripts.core.impl.DefaultScriptManager();
            scriptManager.initialize();
            
            // 尝试执行一个不存在的Python脚本
            System.out.println("尝试执行不存在的Python脚本...");
            ScriptExecutionResult result = scriptManager.executeScript("nonexistent.py");
            
            System.out.println("执行结果:");
            System.out.println("  状态: " + result.getStatus());
            System.out.println("  成功: " + result.isSuccess());
            System.out.println("  失败: " + result.isFailed());
            
            if (result.getErrorMessage() != null) {
                System.out.println("  错误信息: " + result.getErrorMessage());
            }
            
            if (result.getThrowable() != null) {
                System.out.println("  异常信息: " + result.getThrowable().getMessage());
            }
            
            // 清理
            scriptManager.destroy();
            
        } catch (Exception e) {
            System.out.println("脚本管理器错误: " + e.getMessage());
            e.printStackTrace();
        }
        System.out.println();
    }
}