/**
 * Copyright [2019-Present] [starBlues]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.zqzqq.bootkits.core.descriptor;


import com.zqzqq.bootkits.common.AbstractDependencyPlugin;
import com.zqzqq.bootkits.common.Constants;
import com.zqzqq.bootkits.common.DependencyPlugin;
import com.zqzqq.bootkits.core.descriptor.decrypt.PluginDescriptorDecrypt;
import com.zqzqq.bootkits.core.exception.PluginException;
import com.zqzqq.bootkits.utils.FilesUtils;
import com.zqzqq.bootkits.utils.ObjectUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

import static com.zqzqq.bootkits.common.PluginDescriptorKey.*;
import static com.zqzqq.bootkits.utils.PropertiesUtils.getValue;

/**
 * 抽象PluginDescriptorLoader
 * @author starBlues
 * @since 3.0.0
 * @version 3.1.0
 */
@Slf4j
public abstract class AbstractPluginDescriptorLoader implements PluginDescriptorLoader{

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected final PluginDescriptorDecrypt pluginDescriptorDecrypt;

    protected AbstractPluginDescriptorLoader(PluginDescriptorDecrypt pluginDescriptorDecrypt) {
        this.pluginDescriptorDecrypt = pluginDescriptorDecrypt;
    }

    @Override
    public InsidePluginDescriptor load(Path location) throws PluginException {
        PluginMeta pluginMeta = null;
        try {
            pluginMeta = getPluginMetaInfo(location);
            if(pluginMeta == null || pluginMeta.getProperties() == null){
                logger.debug("璺緞[{}]娌℃湁鍙戠幇插件配置淇℃伅", location);
                return null;
            }
            return create(pluginMeta, location);
        } catch (Throwable e) {
            if(e instanceof PluginException){
                throw (PluginException) e;
            } else {
                throw new PluginException(e.getMessage(), e);
            }
        }
    }

    @Override
    public void close() throws Exception {

    }

    /**
     * 子类获取插件淇℃伅
     * @param location 璺緞
     * @return Properties
     * @throws Exception 异常
     */
    protected abstract PluginMeta getPluginMetaInfo(Path location) throws Exception;

    protected DefaultInsidePluginDescriptor create(PluginMeta pluginMeta, Path path) throws Exception{
        Properties properties = pluginMeta.getProperties();
        DefaultInsidePluginDescriptor descriptor = new DefaultInsidePluginDescriptor(
                getValue(properties, PLUGIN_ID),
                getValue(properties, PLUGIN_VERSION),
                getValue(properties, PLUGIN_BOOTSTRAP_CLASS),
                path
        );
        descriptor.setType(PluginType.byName(pluginMeta.getPackageType()));

        PluginResourcesConfig resourcesConfig = getPluginResourcesConfig(path, properties);

        String pluginLibDir = getValue(properties, PLUGIN_LIB_DIR, false);
        descriptor.setPluginLibDir(pluginLibDir);
        descriptor.setPluginLibInfo(getPluginLibInfo(descriptor, resourcesConfig.getDependenciesIndex()));
        descriptor.setIncludeMainResourcePatterns(resourcesConfig.getLoadMainResourceIncludes());
        descriptor.setExcludeMainResourcePatterns(resourcesConfig.getLoadMainResourceExcludes());

        descriptor.setProperties(properties);
        descriptor.setPluginClassPath(getValue(properties, PLUGIN_PATH, false));
        descriptor.setDescription(getValue(properties, PLUGIN_DESCRIPTION, false));
        descriptor.setRequires(getValue(properties, PLUGIN_REQUIRES, false));
        descriptor.setProvider(getValue(properties, PLUGIN_PROVIDER, false));
        descriptor.setLicense(getValue(properties, PLUGIN_LICENSE, false));
        descriptor.setConfigFileName(getValue(properties, PLUGIN_CONFIG_FILE_NAME, false));
        descriptor.setConfigFileLocation(getValue(properties, PLUGIN_CONFIG_FILE_LOCATION, false));
        descriptor.setArgs(getValue(properties, PLUGIN_ARGS, false));

        descriptor.setDependencyPlugins(getPluginDependency(properties));
        return descriptor;
    }


    protected List<DependencyPlugin> getPluginDependency(Properties properties){
        return AbstractDependencyPlugin.toList(getValue(properties, PLUGIN_DEPENDENCIES, false),
                DefaultDependencyPlugin::new);
    }

    protected PluginResourcesConfig getPluginResourcesConfig(Path path, Properties properties) throws Exception{
        String libIndex = getValue(properties, PLUGIN_RESOURCES_CONFIG);
        if(ObjectUtils.isEmpty(libIndex)){
            return new PluginResourcesConfig();
        }
        File file = new File(libIndex);
        if(!file.exists()){
            // 如果缁濆璺緞不存在锟? 鍒欏垽鏂浉瀵硅矾锟?
            String pluginPath = getValue(properties, PLUGIN_PATH);
            file = new File(FilesUtils.joiningFilePath(pluginPath, libIndex));
        }
        if(!file.exists()){
            // 閮戒笉存在, 鍒欒繑鍥炰负锟?
            return new PluginResourcesConfig();
        }
        try {
            List<String> lines = Files.readAllLines(file.toPath());
            return PluginResourcesConfig.parse(lines);
        } catch (IOException e) {
            throw new Exception("Load plugin lib index path failure. " + libIndex, e);
        }
    }

    protected Set<PluginLibInfo> getPluginLibInfo(DefaultInsidePluginDescriptor descriptor, Set<String> dependenciesIndex){
        String configPluginLibDir = descriptor.getPluginLibDir();
        boolean isConfigPluginLibDir = false;
        if(!ObjectUtils.isEmpty(configPluginLibDir)){
            String libDir = getLibDir(descriptor, configPluginLibDir);
            if(!ObjectUtils.isEmpty(libDir)){
                descriptor.setPluginLibDir(libDir);
                isConfigPluginLibDir = true;
            }
        }
        if(ObjectUtils.isEmpty(dependenciesIndex)){
            return Collections.emptySet();
        }
        Set<PluginLibInfo> pluginLibInfos = new HashSet<>(dependenciesIndex.size());
        for (String index : dependenciesIndex) {
            boolean loadToMain;
            if(index.endsWith(Constants.LOAD_TO_MAIN_SIGN)){
                index = index.substring(0, index.lastIndexOf(Constants.LOAD_TO_MAIN_SIGN));
                loadToMain = true;
            } else {
                loadToMain = false;
            }
            String libPath = index;
            if(isConfigPluginLibDir){
                libPath = getLibPath(descriptor, configPluginLibDir, index);
            }
            pluginLibInfos.add(new PluginLibInfo(libPath, loadToMain));
        }
        return pluginLibInfos;
    }

    protected String getLibDir(DefaultInsidePluginDescriptor descriptor, String configPluginLibDir){
        if(FilesUtils.existFile(configPluginLibDir)){
            return configPluginLibDir;
        }
        // 鍏堟鏌ユ彃浠剁浉瀵圭洰锟?
        File libDirFile = FilesUtils.resolveExistRelativePathFile(descriptor.getPluginPath(), configPluginLibDir);
        if(libDirFile != null){
            return libDirFile.getPath();
        }
        // 鍐嶇浉瀵规彃浠跺瓨鏀剧洰锟?
        libDirFile = FilesUtils.resolveExistRelativePathFile(
                new File(descriptor.getPluginPath()).getParent(), configPluginLibDir);
        if(libDirFile != null){
            return libDirFile.getPath();
        }
        // 链鍚庣浉瀵逛富程序鐩綍
        libDirFile = FilesUtils.resolveExistRelativePathFile(new File("").getAbsolutePath(),
                configPluginLibDir);
        if(libDirFile != null){
            return libDirFile.getPath();
        }
        return null;
    }

    protected String getLibPath(DefaultInsidePluginDescriptor descriptor, String configPluginLibDir, String index){
        String pluginLibDir = descriptor.getPluginLibDir();
        if(ObjectUtils.isEmpty(pluginLibDir)){
            return index;
        }
        String joiningFilePath = FilesUtils.joiningFilePath(descriptor.getPluginLibDir(), index);
        if(index.startsWith(configPluginLibDir)){
            // 如果 index 涓墠缂€配置锟?PLUGIN.META 涓殑 plugin.libDir  鍒欏皾璇曞垽鏂畬鏁存嫾鎺ョ殑渚濊禆璺緞文件鏄惁存在
            // 如果存在, 鍒欒繑锟? 如果不存在锟? 鍒欏幓鎺夐噸澶嶅墠缂€, 杩斿洖銆傝澶勬槸涓轰簡鍏煎瑙ｅ帇鍚庣殑jar涓璱ndex存在 libDir 鍓嶇紑
            if(FilesUtils.existFile(joiningFilePath)){
                return joiningFilePath;
            }
            return FilesUtils.joiningFilePath(descriptor.getPluginLibDir(),
                    index.replace(configPluginLibDir, ""));
        }
        return joiningFilePath;
    }

    protected Properties getDecryptProperties(InputStream inputStream) throws Exception{
        Properties properties = new Properties();
        try (InputStreamReader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);){
            properties.load(reader);
        }
        String pluginId = getValue(properties, PLUGIN_ID);
        return pluginDescriptorDecrypt.decrypt(pluginId, properties);
    }

    @AllArgsConstructor
    @Getter
    public static class PluginMeta{
        private final String packageType;
        private final Properties properties;
    }

}

