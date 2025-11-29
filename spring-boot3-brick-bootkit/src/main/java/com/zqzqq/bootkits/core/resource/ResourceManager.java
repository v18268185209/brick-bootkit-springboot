package com.zqzqq.bootkits.core.resource;

import com.zqzqq.bootkits.core.PluginInsideInfo;

/**
 * 资源管理器接口
 */
public interface ResourceManager {
    /**
     * 注册资源
     */
    String register(PluginInsideInfo plugin, Object resource);
    
    /**
     * 增加资源引用计数
     */
    void retain(String resourceId);
    
    /**
     * 减少资源引用计数
     */
    void release(String resourceId);
    
    /**
     * 释放插件所有资源
     */
    void release(PluginInsideInfo plugin);
}
