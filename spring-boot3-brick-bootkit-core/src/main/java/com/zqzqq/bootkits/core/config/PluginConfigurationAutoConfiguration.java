package com.zqzqq.bootkits.core.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 插件配置管理自动配置
 * 
 * @author zqzqq
 * @since 4.1.0
 */
@Slf4j
@Configuration
@EnableConfigurationProperties(PluginConfigurationProperties.class)
@ConditionalOnProperty(prefix = "plugin.configuration", name = "enabled", havingValue = "true", matchIfMissing = true)
public class PluginConfigurationAutoConfiguration {
    
    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(PluginConfigurationAutoConfiguration.class);
    
    @Bean
    public PluginConfigurationManager pluginConfigurationManager(
            ApplicationEventPublisher eventPublisher,
            PluginConfigurationProperties properties) {
        
        log.info("Initializing Plugin Configuration Manager with properties: {}", properties);
        return new PluginConfigurationManager(eventPublisher, properties);
    }
}