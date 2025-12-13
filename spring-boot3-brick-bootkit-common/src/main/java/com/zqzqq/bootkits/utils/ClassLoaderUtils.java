package com.zqzqq.bootkits.utils;

import java.io.Closeable;
import java.lang.reflect.Method;

/**
 * 绫诲姞杞藉櫒工具类
 * @since 3.5.5
 */
public class ClassLoaderUtils {
    
    private ClassLoaderUtils() {
        // 绉佹湁鏋勯€犲櫒
    }

    /**
     * 安全关闭类加载器
     * @param classLoader 瑕佸叧闂殑绫诲姞杞藉櫒
     */
    public static void closeQuietly(ClassLoader classLoader) {
        if (classLoader == null) {
            return;
        }
        
        try {
            if (classLoader instanceof Closeable) {
                ((Closeable) classLoader).close();
            } else if (classLoader instanceof AutoCloseable) {
                ((AutoCloseable) classLoader).close();
            } else {
                Method closeMethod = classLoader.getClass().getMethod("close");
                closeMethod.invoke(classLoader);
            }
        } catch (NoSuchMethodException e) {
            // 绫诲姞杞藉櫒娌℃湁close方法锛岄潤榛樺鐞?
        } catch (Exception e) {
            System.err.println("Failed to close ClassLoader: " + e.getMessage());
        }
    }
}