#!/usr/bin/env node
/**
 * 示例JavaScript脚本 - 系统信息展示
 * 作者: starBlues
 * 日期: 2025-12-14
 */

const os = require('os');
const fs = require('fs');
const path = require('path');

function main() {
    console.log('=== JavaScript脚本示例执行 ===');
    
    // Node.js信息
    console.log(`Node.js版本: ${process.version}`);
    console.log(`Node.js路径: ${process.execPath}`);
    console.log(`平台: ${process.platform}`);
    console.log(`架构: ${process.arch}`);
    
    // 系统信息
    console.log(`操作系统: ${os.type()} ${os.release()}`);
    console.log(`CPU: ${os.cpus()[0].model}`);
    console.log(`内存: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)}GB`);
    console.log(`可用内存: ${Math.round(os.freemem() / 1024 / 1024 / 1024)}GB`);
    
    // 时间信息
    const now = new Date();
    console.log(`当前时间: ${now.toLocaleString('zh-CN')}`);
    
    // 目录信息
    console.log(`当前工作目录: ${process.cwd()}`);
    console.log(`脚本目录: ${__dirname}`);
    
    // 参数处理
    if (process.argv.length > 2) {
        console.log('传入的参数:');
        for (let i = 2; i < process.argv.length; i++) {
            console.log(`  ${i-1}. ${process.argv[i]}`);
        }
    } else {
        console.log('没有传入参数');
    }
    
    // 环境变量
    console.log(`JAVA_HOME: ${process.env.JAVA_HOME || '未设置'}`);
    console.log(`HOME: ${process.env.HOME || '未设置'}`);
    
    // 简单计算示例
    const a = 5, b = 15;
    console.log(`简单计算示例: ${a} + ${b} = ${a + b}`);
    
    // 文件系统信息
    try {
        const stats = fs.statSync('.');
        console.log(`当前目录修改时间: ${stats.mtime}`);
    } catch (error) {
        console.log('无法获取目录信息');
    }
    
    // 列出当前目录文件
    console.log('\n当前目录文件:');
    try {
        const files = fs.readdirSync('.');
        files.forEach(file => {
            try {
                const stats = fs.statSync(file);
                if (stats.isFile()) {
                    console.log(`  📄 ${file} (${stats.size} 字节)`);
                } else if (stats.isDirectory()) {
                    console.log(`  📁 ${file}/`);
                }
            } catch (error) {
                console.log(`  ❓ ${file} (无法获取信息)`);
            }
        });
    } catch (error) {
        console.log(`  无法列出目录内容: ${error.message}`);
    }
    
    console.log('\n=== JavaScript脚本执行完成 ===');
}

// 执行主函数
if (require.main === module) {
    main();
}

module.exports = { main };