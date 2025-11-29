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

package com.zqzqq.bootkits.loader.utils;

import com.zqzqq.bootkits.loader.LoaderConstant;

import java.io.File;
import java.io.IOException;

/**
 * 文件工具绫?
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.2
 */
public class FilesUtils {

    /**
     * 获取存在鐨勬枃浠?
     *
     * @param pathStr 文件璺緞
     * @return File
     */
    public static File getExistFile(String pathStr){
        File file = new File(pathStr);
        if(file.exists()){
            return file;
        }
        return null;
    }


    /**
     * 鎷兼帴file璺緞
     *
     * @param paths 鎷兼帴鐨勮矾寰?
     * @return 鎷兼帴鐨勮矾寰?
     */
    public static String joiningFilePath(String ...paths){
        if(paths == null || paths.length == 0){
            return "";
        }
        StringBuilder stringBuilder = new StringBuilder();
        int length = paths.length;
        for (int i = 0; i < length; i++) {
            String path = paths[i];
            if(ObjectUtils.isEmpty(path)) {
                continue;
            }
            if(i > 0){
                if(path.startsWith(File.separator) || path.startsWith("/") ||
                        path.startsWith("\\") || path.startsWith("//")){
                    stringBuilder.append(path);
                } else {
                    stringBuilder.append(File.separator).append(path);
                }
            } else {
                stringBuilder.append(path);
            }
        }

        return stringBuilder.toString();
    }

    public static File createFile(String path) throws IOException {
        try {
            File file = new File(path);
            File parentFile = file.getParentFile();
            if(!parentFile.exists()){
                if(!parentFile.mkdirs()){
                    throw new IOException("Create " + parentFile + " dir error");
                }
            }
            if(file.createNewFile()){
                return file;
            }
            throw new IOException("Create " + path + " file error");
        } catch (Exception e){
            throw new IOException("Create " + path + " file error");
        }
    }


    /**
     * 瑙ｅ喅鐩稿璺緞
     * @param rootPath 绝对路径
     * @param relativePath 浠 寮€澶寸殑鐩稿璺緞
     * @return 处理鍚庣殑璺緞
     */
    public static String resolveRelativePath(String rootPath, String relativePath){
        if(ObjectUtils.isEmpty(relativePath)){
            return relativePath;
        }
        if(isRelativePath(relativePath)){
            return joiningFilePath(rootPath, relativePath.replaceFirst(LoaderConstant.RELATIVE_SIGN, ""));
        } else {
            return relativePath;
        }
    }

    /**
     * 鏄惁鏄浉瀵硅矾寰?
     * @param path 璺緞
     * @return true 涓虹浉瀵硅矾寰?false 涓洪潪鐩稿璺緞
     */
    public static boolean isRelativePath(String path){
        if(ObjectUtils.isEmpty(path)){
            return false;
        }
        return path.startsWith(LoaderConstant.RELATIVE_SIGN);
    }

}