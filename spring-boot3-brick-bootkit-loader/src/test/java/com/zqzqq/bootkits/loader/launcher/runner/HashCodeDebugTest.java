package com.zqzqq.bootkits.loader.launcher.runner;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * 哈希码调试测试
 */
class HashCodeDebugTest {
    
    @Test
    void testHashCodeConsistency() {
        String[] args1 = {"arg1", "arg2", "arg3"};
        String[] args2 = {"arg1", "arg2", "arg3"};
        
        MainMethodRunner runner1 = new MainMethodRunner("com.example.MainClass", "main", args1);
        MainMethodRunner runner2 = new MainMethodRunner("com.example.MainClass", "main", args2);
        
        System.out.println("Runner1 args hashCode: " + System.identityHashCode(args1));
        System.out.println("Runner2 args hashCode: " + System.identityHashCode(args2));
        System.out.println("Runner1 hashCode: " + runner1.hashCode());
        System.out.println("Runner2 hashCode: " + runner2.hashCode());
        System.out.println("runner1.equals(runner2): " + runner1.equals(runner2));
        System.out.println("Arrays.equals(args1, args2): " + java.util.Arrays.equals(args1, args2));
        
        assertTrue(runner1.equals(runner2));
        assertEquals(runner1.hashCode(), runner2.hashCode());
    }
    
    @Test
    void testSameReference() {
        String[] args = {"arg1", "arg2", "arg3"};
        
        MainMethodRunner runner1 = new MainMethodRunner("com.example.MainClass", "main", args);
        MainMethodRunner runner2 = new MainMethodRunner("com.example.MainClass", "main", args);
        
        System.out.println("Same reference test:");
        System.out.println("Runner1 hashCode: " + runner1.hashCode());
        System.out.println("Runner2 hashCode: " + runner2.hashCode());
        
        assertTrue(runner1.equals(runner2));
        assertEquals(runner1.hashCode(), runner2.hashCode());
    }
}
