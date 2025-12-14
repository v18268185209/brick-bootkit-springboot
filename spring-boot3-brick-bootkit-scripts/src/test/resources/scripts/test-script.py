#!/usr/bin/env python3
# 测试用Python脚本
import sys

def main():
    print("Hello from test Python script")
    print(f"Arguments: {sys.argv[1:]}")
    return 0

if __name__ == "__main__":
    sys.exit(main())