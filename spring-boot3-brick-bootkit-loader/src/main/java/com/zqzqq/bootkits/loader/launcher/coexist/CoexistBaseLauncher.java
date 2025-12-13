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

package com.zqzqq.bootkits.loader.launcher.coexist;

import com.zqzqq.bootkits.loader.classloader.GeneralUrlClassLoader;
import com.zqzqq.bootkits.loader.launcher.AbstractMainLauncher;
import com.zqzqq.bootkits.loader.launcher.runner.MethodRunner;

import java.net.URL;
import java.net.URLClassLoader;


/**
 * coexist 妯″紡 launcher
 *
 * @author starBlues
 * @since 3.0.4
 * @version 3.1.0
 */
public class CoexistBaseLauncher extends AbstractMainLauncher {

    private final MethodRunner methodRunner;

    public CoexistBaseLauncher(MethodRunner methodRunner) {
        this.methodRunner = methodRunner;
    }

    @Override
    protected ClassLoader createClassLoader(String... args) throws Exception {
        // 浣跨敤褰撳墠线程鐨勪笂涓嬫枃绫诲姞杞藉櫒浣滀负鐖剁被加载鍣紝增强涓嶴pring Boot 3.5.x鐨勫吋瀹癸拷?
        ClassLoader parentClassLoader = Thread.currentThread().getContextClassLoader();
        if (parentClassLoader == null) {
            parentClassLoader = this.getClass().getClassLoader();
        }
        
        GeneralUrlClassLoader urlClassLoader = new GeneralUrlClassLoader(MAIN_CLASS_LOADER_NAME,
                parentClassLoader);
        addResource(urlClassLoader);
        return urlClassLoader;
    }

    @Override
    protected ClassLoader launch(ClassLoader classLoader, String... args) throws Exception {
        methodRunner.run(classLoader);
        return classLoader;
    }

    protected void addResource(GeneralUrlClassLoader classLoader) throws Exception {
        try {
            URL url = getClass().getProtectionDomain().getCodeSource().getLocation();
            if (url != null) {
                // 方法1锛氫娇鐢ㄦ爣鍑哢RLClassLoader鏋勯€犳柊实例
                URLClassLoader tempLoader = new URLClassLoader(new URL[]{url}, classLoader.getParent());
                
                // 方法2锛氳皟鐢℅eneralUrlClassLoader鐨刴ergeResources方法
                classLoader.mergeResources(tempLoader);
                
                System.out.println("Added resource to shared mode classloader: " + url);
            }
        } catch (Exception e) {
            System.err.println("Failed to add resources to shared mode classloader: " + e.getMessage());
            // 方法3锛氱粓鏋佸洖閫€鏂规
            System.setProperty("java.system.class.loader", 
                "com.zqzqq.bootkits.loader.classloader.GeneralUrlClassLoader");
            throw e;
        }
    }

}

