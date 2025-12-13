package com.zqzqq.bootkits.core.lifecycle;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * 插件鐢熷懡鍛ㄦ湡绠＄悊鍣?
 */
public class PluginLifecycleManager {
    private final Map<String, PluginLifecycleState> pluginStates = new HashMap<>();
    private final List<PluginLifecycleListener> listeners = new CopyOnWriteArrayList<>();

    /**
     * 注册监听鍣?
     */
    public void addListener(PluginLifecycleListener listener) {
        listeners.add(listener);
        listeners.sort(Comparator.comparingInt(PluginLifecycleListener::getPriority));
    }

    /**
     * 鏇存柊插件状态
     */
    public void updateState(String pluginId, PluginLifecycleState newState) {
        PluginLifecycleState oldState = pluginStates.getOrDefault(
            pluginId, PluginLifecycleState.UNINSTALLED);
        
        pluginStates.put(pluginId, newState);
        
        PluginLifecycleEvent event = new PluginLifecycleEvent(
            pluginId, oldState, newState);
        
        // 閫氱煡所有夌洃鍚櫒
        listeners.forEach(listener -> {
            try {
                listener.onEvent(event);
            } catch (Exception e) {
                System.err.println("Lifecycle listener error: " + e.getMessage());
            }
        });
    }

    /**
     * 获取当前状态
     */
    public PluginLifecycleState getCurrentState(String pluginId) {
        return pluginStates.getOrDefault(pluginId, PluginLifecycleState.UNINSTALLED);
    }
    
    /**
     * 关闭生命周期管理器，清理所有资源
     * 
     * 注意：这是一个破坏性操作，将清理所有插件状态和监听器
     */
    public void shutdown() {
        pluginStates.clear();
        listeners.clear();
        System.out.println("Plugin lifecycle manager shutdown completed");
    }
}