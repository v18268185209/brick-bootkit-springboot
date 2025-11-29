package com.zqzqq.bootkits.core.launcher.plugin;

import com.zqzqq.bootkits.core.classloader.PluginGeneralUrlClassLoader;
import com.zqzqq.bootkits.core.launcher.plugin.involved.PluginLaunchInvolved;
import com.zqzqq.bootkits.loader.classloader.GeneralUrlClassLoader;
import com.zqzqq.bootkits.loader.launcher.LauncherContext;
import lombok.extern.slf4j.Slf4j;

/**
 * 插件共存模式启动器
 *
 * @author starBlues
 * @since 3.0.4
 * @version 3.1.0
 */
@Slf4j
public class PluginCoexistLauncher extends AbstractPluginLauncher {


    public PluginCoexistLauncher(PluginInteractive pluginInteractive,
                                 PluginLaunchInvolved pluginLaunchInvolved) {
        super(pluginInteractive, pluginLaunchInvolved);
    }

    @Override
    protected ClassLoader createPluginClassLoader(String... args) throws Exception {
        PluginGeneralUrlClassLoader classLoader = new PluginGeneralUrlClassLoader(
                pluginInteractive.getPluginDescriptor().getPluginId(),
                getParentClassLoader());
        classLoader.addResource(pluginInteractive.getPluginDescriptor());
        return classLoader;
    }

    protected GeneralUrlClassLoader getParentClassLoader() throws Exception {
        ClassLoader contextClassLoader = LauncherContext.getMainClassLoader();
        if(contextClassLoader instanceof GeneralUrlClassLoader){
            return (GeneralUrlClassLoader) contextClassLoader;
        } else {
            throw new Exception("无法父类加载器: " + contextClassLoader.getClass().getName());
        }
    }

}

