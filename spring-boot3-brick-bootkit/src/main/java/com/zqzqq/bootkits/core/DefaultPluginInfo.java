package com.zqzqq.bootkits.core;

import com.zqzqq.bootkits.core.descriptor.InsidePluginDescriptor;

import java.util.Map;
import java.util.Objects;

/**
 * 默认插件信息实现
 */
public class DefaultPluginInfo implements PluginInfo {
    private final InsidePluginDescriptor descriptor;

    public DefaultPluginInfo(InsidePluginDescriptor descriptor) {
        this.descriptor = Objects.requireNonNull(descriptor);
    }

    @Override
    public String getPluginId() {
        return descriptor.getPluginId();
    }

    @Override
    public String getPluginPath() {
        return descriptor.getPluginPath();
    }

    @Override
    public PluginState getPluginState() {
        return null;
    }

    @Override
    public long getStartTime() {
        return 0;
    }

    @Override
    public long getStopTime() {
        return 0;
    }

    @Override
    public boolean isFollowSystem() {
        return false;
    }

    @Override
    public Map<String, Object> getExtensionInfo() {
        return Map.of();
    }

    @Override
    public ClassLoader getClassLoader() {
        return null;
    }

    @Override
    public InsidePluginDescriptor getPluginDescriptor() {
        return descriptor;
    }
}
