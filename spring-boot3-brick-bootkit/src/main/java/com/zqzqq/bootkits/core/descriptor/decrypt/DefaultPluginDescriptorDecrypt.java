package com.zqzqq.bootkits.core.descriptor.decrypt;

import com.zqzqq.bootkits.common.PluginDescriptorKey;
import com.zqzqq.bootkits.common.cipher.AbstractPluginCipher;
import com.zqzqq.bootkits.common.cipher.PluginCipher;
import com.zqzqq.bootkits.core.exception.PluginDecryptException;
import com.zqzqq.bootkits.integration.IntegrationConfiguration;
import com.zqzqq.bootkits.integration.decrypt.DecryptConfiguration;
import com.zqzqq.bootkits.integration.decrypt.DecryptPluginConfiguration;
import com.zqzqq.bootkits.utils.ObjectUtils;
import com.zqzqq.bootkits.utils.PropertiesUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.util.ClassUtils;

import java.util.*;

/**
 * 默认PluginDescriptorDecrypt
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.1
 */
public class DefaultPluginDescriptorDecrypt implements PluginDescriptorDecrypt{

    private final ApplicationContext applicationContext;

    private final DecryptConfiguration decryptConfig;
    private final Map<String, DecryptPluginConfiguration> pluginDecryptConfig;

    public DefaultPluginDescriptorDecrypt(ApplicationContext applicationContext,
                                          IntegrationConfiguration configuration) {
        this.applicationContext = applicationContext;

        this.decryptConfig = configuration.decrypt();
        List<DecryptPluginConfiguration> plugins = decryptConfig.getPlugins();
        if(ObjectUtils.isEmpty(plugins)){
            this.pluginDecryptConfig = Collections.emptyMap();
        } else {
            this.pluginDecryptConfig = new HashMap<>(plugins.size());
            for (DecryptPluginConfiguration plugin : plugins) {
                pluginDecryptConfig.put(plugin.getPluginId(), plugin);
            }
        }
    }

    @Override
    public Properties decrypt(String pluginId, Properties properties) {
        PluginCipher pluginCipher = getPluginCipher(pluginId);
        if(pluginCipher == null){
            return properties;
        }
        try {
            String bootstrapClass = PropertiesUtils.getValue(properties, PluginDescriptorKey.PLUGIN_BOOTSTRAP_CLASS);
            String decrypt = pluginCipher.decrypt(bootstrapClass);
            properties.setProperty(PluginDescriptorKey.PLUGIN_BOOTSTRAP_CLASS, decrypt);
            return properties;
        } catch (Exception e) {
            throw new PluginDecryptException("插件[" + pluginId + "]瑙ｅ瘑失败. " + e.getMessage());
        }
    }

    protected PluginCipher getPluginCipher(String pluginId){
        if(decryptConfig == null){
            return null;
        }
        Boolean enable = decryptConfig.getEnable();
        if(enable == null || !enable){
            // 娌℃湁鍚敤
            return null;
        }
        Map<String, Object> props = decryptConfig.getProps();
        if(props == null){
            props = new HashMap<>();
            decryptConfig.setProps(props);
        }
        String className = decryptConfig.getClassName();
        if(ObjectUtils.isEmpty(pluginDecryptConfig)){
            // 娌℃湁配置鍏蜂綋插件鐨勮В瀵嗛厤锟?
            return getPluginCipherBean(className, props);
        }
        DecryptPluginConfiguration decryptPluginConfiguration = pluginDecryptConfig.get(pluginId);
        if(decryptPluginConfiguration == null){
            // 褰撳墠插件娌℃湁配置瑙ｅ瘑配置, 璇存槑涓嶅惎鐢ㄨВ锟?
            return null;
        }
        Map<String, Object> pluginParam = decryptPluginConfiguration.getProps();
        if(!ObjectUtils.isEmpty(pluginParam)){
            props.putAll(pluginParam);
        }
        return getPluginCipherBean(className, props);
    }


    protected PluginCipher getPluginCipherBean(String className, Map<String, Object> params){
        ClassLoader defaultClassLoader = ClassUtils.getDefaultClassLoader();
        try {
            if(defaultClassLoader == null){
                defaultClassLoader = this.getClass().getClassLoader();
            }
            Class<?> aClass = defaultClassLoader.loadClass(className);

            String error = "瑙ｅ瘑实现鑰匸" + className + "]娌℃湁缁ф壙 [" + AbstractPluginCipher.class.getName() + "]";

            if(aClass.isAssignableFrom(AbstractPluginCipher.class)){
                throw new PluginDecryptException(error);
            }
            Object bean = getBean(aClass);
            if(bean instanceof AbstractPluginCipher){
                AbstractPluginCipher pluginCipher = (AbstractPluginCipher) bean;
                pluginCipher.initParams(params);
                return pluginCipher;
            } else {
                throw new PluginDecryptException(error);
            }
        } catch (ClassNotFoundException e) {
            throw new PluginDecryptException("娌℃湁鍙戠幇瑙ｅ瘑实现锟? " + className);
        }
    }

    protected Object getBean(Class<?> aClass){
        try {
            return applicationContext.getBean(aClass);
        } catch (Exception e1){
            try {
                return aClass.getConstructor().newInstance();
            } catch (Exception e2){
                throw new PluginDecryptException(e2);
            }
        }
    }

}

