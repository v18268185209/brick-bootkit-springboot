package com.zqzqq.bootkits.loader.utils;

/**
 * 鍙噴鏀捐祫婧愭帴鍙?
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