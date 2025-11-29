package com.zqzqq.bootkits.core.lifecycle;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 默认生命周期监听器（审计日志）
 */
public class DefaultLifecycleListener implements PluginLifecycleListener {
    private static final Logger log = LoggerFactory.getLogger(DefaultLifecycleListener.class);

    @Override
    public void onEvent(PluginLifecycleEvent event) {
        log.info("插件状态变更：{}", event);
    }

    @Override
    public int getPriority() {
        return 0; // 默认优先级
    }
}