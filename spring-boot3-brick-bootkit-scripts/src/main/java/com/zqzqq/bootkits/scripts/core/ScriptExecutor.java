package com.zqzqq.bootkits.scripts.core;

/**
 * 脚本执行器接口
 * 定义了所有脚本执行器必须实现的基本方法
 *
 * @author starBlues
 * @since 4.0.1
 */
public interface ScriptExecutor {
    
    /**
     * 获取执行器支持的操作系统
     *
     * @return 支持的操作系统列表
     */
    OperatingSystem[] getSupportedOperatingSystems();
    
    /**
     * 获取执行器支持的脚本类型
     *
     * @return 支持的脚本类型列表
     */
    ScriptType[] getSupportedScriptTypes();
    
    /**
     * 检查执行器是否支持指定的操作系统和脚本类型
     *
     * @param os 操作系统
     * @param scriptType 脚本类型
     * @return 是否支持
     */
    boolean supports(OperatingSystem os, ScriptType scriptType);
    
    /**
     * 执行脚本
     *
     * @param scriptPath 脚本文件路径
     * @param arguments 执行参数
     * @param configuration 执行配置
     * @return 执行结果
     * @throws Exception 执行异常
     */
    ScriptExecutionResult execute(String scriptPath, String[] arguments, ScriptConfiguration configuration) throws Exception;
}