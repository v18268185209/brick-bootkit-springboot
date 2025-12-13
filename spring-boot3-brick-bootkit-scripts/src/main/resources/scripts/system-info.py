#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
示例Python脚本 - 系统信息展示
作者: starBlues
日期: 2025-12-14
"""

import os
import sys
import platform
import datetime
import subprocess
from pathlib import Path

def main():
    """主函数"""
    print("=== Python脚本示例执行 ===")
    
    # 系统信息
    print(f"Python版本: {sys.version}")
    print(f"Python路径: {sys.executable}")
    print(f"操作系统: {platform.system()} {platform.release()}")
    print(f"架构: {platform.machine()}")
    print(f"处理器: {platform.processor()}")
    
    # 当前时间
    now = datetime.datetime.now()
    print(f"当前时间: {now.strftime('%Y-%m-%d %H:%M:%S')}")
    
    # 目录信息
    print(f"当前工作目录: {os.getcwd()}")
    print(f"脚本目录: {Path(__file__).parent}")
    
    # 参数处理
    if len(sys.argv) > 1:
        print("传入的参数:")
        for i, arg in enumerate(sys.argv[1:], 1):
            print(f"  {i}. {arg}")
    else:
        print("没有传入参数")
    
    # 环境变量
    java_home = os.environ.get('JAVA_HOME', '未设置')
    path = os.environ.get('PATH', '未设置')
    print(f"JAVA_HOME: {java_home}")
    
    # 简单的计算示例
    a, b = 10, 20
    result = a + b
    print(f"简单计算示例: {a} + {b} = {result}")
    
    # 文件系统信息
    try:
        total, used, free = subprocess.check_output(['df', '-h', '.']).decode().split()[-5:]
        print(f"磁盘使用情况: 总计 {total}, 已用 {used}, 可用 {free}")
    except:
        print("无法获取磁盘使用信息")
    
    # 列出当前目录文件
    print("\n当前目录文件:")
    try:
        for item in os.listdir('.'):
            if os.path.isfile(item):
                size = os.path.getsize(item)
                print(f"  📄 {item} ({size} 字节)")
            elif os.path.isdir(item):
                print(f"  📁 {item}/")
    except Exception as e:
        print(f"  无法列出目录内容: {e}")
    
    print("\n=== Python脚本执行完成 ===")

if __name__ == "__main__":
    main()