#!/bin/bash

# 示例Shell脚本 - 系统信息展示
# 作者: starBlues
# 日期: 2025-12-14

echo "=== Shell脚本示例执行 ==="
echo "当前系统: $(uname -a)"
echo "当前时间: $(date)"
echo "当前用户: $(whoami)"
echo "当前目录: $(pwd)"
echo "脚本参数: $@"

# 检查参数
if [ $# -gt 0 ]; then
    echo "传入的参数:"
    for arg in "$@"; do
        echo "  - $arg"
    done
else
    echo "没有传入参数"
fi

# 环境变量
echo "JAVA_HOME: $JAVA_HOME"
echo "PATH: $PATH"

# 简单的计算示例
echo "简单计算示例: 2 + 3 = $((2 + 3))"

# 文件系统信息
echo "磁盘使用情况:"
df -h | head -2

echo "=== Shell脚本执行完成 ==="