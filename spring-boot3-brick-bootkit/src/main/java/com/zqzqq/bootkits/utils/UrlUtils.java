/**
 * Copyright [2019-Present] [starBlues]
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

package com.zqzqq.bootkits.utils;

/**
 * URL工具类
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public class UrlUtils {

    public static final String PATH_SEPARATOR = "/";

    private UrlUtils() {}

    /**
     * 格式化URL路径，确保以/开头，不以/结尾
     * @param path 路径
     * @return 格式化后的路径
     */
    public static String format(String path) {
        if (ObjectUtils.isEmpty(path)) {
            return PATH_SEPARATOR;
        }
        
        // 移除开头和结尾的空格
        path = path.trim();
        
        // 确保以/开头
        if (!path.startsWith(PATH_SEPARATOR)) {
            path = PATH_SEPARATOR + path;
        }
        
        // 确保不以/结尾（除非是根路径）
        if (path.length() > 1 && path.endsWith(PATH_SEPARATOR)) {
            path = path.substring(0, path.length() - 1);
        }
        
        return path;
    }

    /**
     * 格式化匹配URL，用于路径匹配
     * @param url URL
     * @return 格式化后的URL
     */
    public static String formatMatchUrl(String url) {
        if (ObjectUtils.isEmpty(url)) {
            return "";
        }
        
        // 移除协议部分
        if (url.contains("://")) {
            int index = url.indexOf("://");
            url = url.substring(index + 3);
            // 移除主机部分
            if (url.contains("/")) {
                url = url.substring(url.indexOf("/"));
            } else {
                url = "/";
            }
        }
        
        return format(url);
    }

    /**
     * 连接REST路径
     * @param basePath 基础路径
     * @param subPath 子路径
     * @return 连接后的路径
     */
    public static String restJoiningPath(String basePath, String subPath) {
        if (ObjectUtils.isEmpty(basePath)) {
            return format(subPath);
        }
        
        if (ObjectUtils.isEmpty(subPath)) {
            return format(basePath);
        }
        
        // 格式化基础路径
        basePath = format(basePath);
        
        // 格式化子路径，移除开头的/
        subPath = subPath.trim();
        if (subPath.startsWith(PATH_SEPARATOR)) {
            subPath = subPath.substring(1);
        }
        
        // 连接路径
        if (basePath.equals(PATH_SEPARATOR)) {
            return PATH_SEPARATOR + subPath;
        } else {
            return basePath + PATH_SEPARATOR + subPath;
        }
    }

    /**
     * 连接URL路径
     * @param paths 路径数组
     * @return 连接后的路径
     */
    public static String joiningUrlPath(String... paths) {
        if (ObjectUtils.isEmpty(paths)) {
            return PATH_SEPARATOR;
        }
        
        StringBuilder result = new StringBuilder();
        
        for (String path : paths) {
            if (ObjectUtils.isEmpty(path)) {
                continue;
            }
            
            path = path.trim();
            
            // 移除开头的/（第一个路径除外）
            if (result.length() > 0 && path.startsWith(PATH_SEPARATOR)) {
                path = path.substring(1);
            }
            
            // 添加路径
            if (result.length() == 0) {
                // 第一个路径，确保以/开头
                if (!path.startsWith(PATH_SEPARATOR)) {
                    result.append(PATH_SEPARATOR);
                }
                result.append(path);
            } else {
                // 后续路径，添加分隔符
                if (!result.toString().endsWith(PATH_SEPARATOR) && !path.isEmpty()) {
                    result.append(PATH_SEPARATOR);
                }
                result.append(path);
            }
        }
        
        String finalPath = result.toString();
        
        // 确保不以/结尾（除非是根路径）
        if (finalPath.length() > 1 && finalPath.endsWith(PATH_SEPARATOR)) {
            finalPath = finalPath.substring(0, finalPath.length() - 1);
        }
        
        // 确保至少是根路径
        if (finalPath.isEmpty()) {
            finalPath = PATH_SEPARATOR;
        }
        
        return finalPath;
    }
}