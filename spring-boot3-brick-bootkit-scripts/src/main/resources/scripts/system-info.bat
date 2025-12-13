@echo off
REM 示例批处理脚本 - 系统信息展示
REM 作者: starBlues
REM 日期: 2025-12-14

echo === Windows批处理脚本示例执行 ===
echo 当前时间: %date% %time%
echo 当前目录: %cd%
echo 用户名: %username%
echo 计算机名: %computername%

REM 检查参数
if "%~1"=="" (
    echo 没有传入参数
) else (
    echo 传入的参数:
    for %%i in (%*) do echo   - %%i
)

REM 环境变量
echo JAVA_HOME: %JAVA_HOME%
echo PATH: %PATH%

REM 系统信息
echo.
echo === 系统信息 ===
ver
systeminfo | findstr /C:"OS Name" /C:"OS Version" /C:"System Type"

REM 磁盘信息
echo.
echo === 磁盘使用情况 ===
dir C:\ /-c | findstr "可用字节"

echo.
echo === 批处理脚本执行完成 ===
pause