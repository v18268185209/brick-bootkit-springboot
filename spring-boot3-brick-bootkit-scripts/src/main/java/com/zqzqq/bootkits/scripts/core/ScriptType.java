package com.zqzqq.bootkits.scripts.core;

/**
 * 脚本类型枚举
 * 定义了支持的脚本类型
 *
 * @author starBlues
 * @since 4.0.1
 */
public enum ScriptType {
    
    /**
     * Shell脚本（Linux/Mac）
     */
    SHELL(".sh", "shell"),
    
    /**
     * Windows批处理脚本
     */
    BATCH(".bat", "batch"),
    
    /**
     * PowerShell脚本
     */
    POWERSHELL(".ps1", "powershell"),
    
    /**
     * Lua脚本
     */
    LUA(".lua", "lua"),
    
    /**
     * Python脚本
     */
    PYTHON(".py", "python"),
    
    /**
     * Ruby脚本
     */
    RUBY(".rb", "ruby"),
    
    /**
     * Perl脚本
     */
    PERL(".pl", "perl"),
    
    /**
     * Node.js脚本
     */
    NODEJS(".js", "nodejs"),
    
    /**
     * Groovy脚本
     */
    GROOVY(".groovy", "groovy"),
    
    /**
     * JavaScript脚本
     */
    JAVASCRIPT(".js", "javascript"),
    
    /**
     * 可执行文件
     */
    EXECUTABLE("", "executable");
    
    private final String extension;
    private final String type;
    
    ScriptType(String extension, String type) {
        this.extension = extension;
        this.type = type;
    }
    
    public String getExtension() {
        return extension;
    }
    
    public String getType() {
        return type;
    }
    
    /**
     * 根据文件扩展名获取脚本类型
     *
     * @param fileName 文件名
     * @return 脚本类型，如果未找到则返回null
     */
    public static ScriptType fromFileName(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            return null;
        }
        
        String lowerFileName = fileName.toLowerCase();
        for (ScriptType type : values()) {
            if (type.extension != null && !type.extension.isEmpty() && 
                lowerFileName.endsWith(type.extension.toLowerCase())) {
                return type;
            }
        }
        
        return null;
    }
    
    /**
     * 根据脚本类型名称获取脚本类型
     *
     * @param typeName 类型名称
     * @return 脚本类型，如果未找到则返回null
     */
    public static ScriptType fromTypeName(String typeName) {
        if (typeName == null || typeName.isEmpty()) {
            return null;
        }
        
        String lowerTypeName = typeName.toLowerCase();
        for (ScriptType type : values()) {
            if (type.type.toLowerCase().equals(lowerTypeName)) {
                return type;
            }
        }
        
        return null;
    }
}