package com.zqzqq.bootkits.loader.utils;

/**
 * 閸欘垶鍣撮弨鎹愮カ濠ф劖甯撮崣?
 *
 * @author starBlues
 * @since 3.1.1
 * @version 4.0.0
 */
public interface Release {

    /**
     * 释放资源
     * @throws Exception 释放异常
     */
    default void release() throws Exception{}

}