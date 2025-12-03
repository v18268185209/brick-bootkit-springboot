#!/bin/bash

# Brick BootKit SpringBoot 版本号查询脚本
# 显示项目中所有相关文件的版本信息

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 动态检测项目根目录
detect_project_root() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    
    # 优先使用git仓库根目录
    if git rev-parse --show-toplevel > /dev/null 2>&1; then
        git rev-parse --show-toplevel
    # 其次使用脚本所在目录
    elif [ -f "$script_dir/pom.xml" ]; then
        echo "$script_dir"
    # 最后使用当前目录
    else
        pwd
    fi
}

PROJECT_ROOT="$(detect_project_root)"

# 进入项目根目录
cd "$PROJECT_ROOT"

echo -e "${BLUE}=== Brick BootKit SpringBoot 版本信息查询 ===${NC}"
echo

# 显示根目录pom.xml的版本
if [ -f "pom.xml" ]; then
    ROOT_VERSION=$(grep -o '<version>[^<]*</version>' pom.xml | sed 's/<version>\([^<]*\)<\/version>/\1/' | head -1)
    echo -e "${GREEN}根目录版本:${NC} $ROOT_VERSION"
else
    echo -e "${YELLOW}警告: 根目录pom.xml不存在${NC}"
fi

echo -e "${YELLOW}子模块版本:${NC}"

# 显示所有子模块的版本
for module_dir in spring-boot3-brick-bootkit-*/; do
    if [ -d "$module_dir" ] && [ -f "$module_dir/pom.xml" ]; then
        module_version=$(grep -o '<version>[^<]*</version>' "$module_dir/pom.xml" | sed 's/<version>\([^<]*\)<\/version>/\1/' | head -1)
        module_name=$(basename "$module_dir")
        echo -e "  ${GREEN}$module_name:${NC} $module_version"
    fi
done

# 显示特殊模块的版本
if [ -f "spring-boot3-brick-bootkit/pom.xml" ]; then
    spring_boot_kit_version=$(grep -o '<version>[^<]*</version>' spring-boot3-brick-bootkit/pom.xml | sed 's/<version>\([^<]*\)<\/version>/\1/' | head -1)
    echo -e "  ${GREEN}spring-boot3-brick-bootkit:${NC} $spring_boot_kit_version"
fi

echo

# 检查版本一致性
echo -e "${BLUE}=== 版本一致性检查 ===${NC}"

# 获取所有版本号
versions=()
for module_dir in spring-boot3-brick-bootkit-*/; do
    if [ -d "$module_dir" ] && [ -f "$module_dir/pom.xml" ]; then
        module_version=$(grep -o '<version>[^<]*</version>' "$module_dir/pom.xml" | sed 's/<version>\([^<]*\)<\/version>/\1/' | head -1)
        versions+=("$module_version")
    fi
done

# 添加特殊模块版本
if [ -f "spring-boot3-brick-bootkit/pom.xml" ]; then
    spring_boot_kit_version=$(grep -o '<version>[^<]*</version>' spring-boot3-brick-bootkit/pom.xml | sed 's/<version>\([^<]*\)<\/version>/\1/' | head -1)
    versions+=("$spring_boot_kit_version")
fi

# 检查是否所有版本一致
all_same=true
if [ ${#versions[@]} -gt 0 ]; then
    first_version="${versions[0]}"
    for version in "${versions[@]}"; do
        if [ "$version" != "$first_version" ]; then
            all_same=false
            break
        fi
    done
fi

if [ "$all_same" = true ]; then
    echo -e "${GREEN}✓ 所有模块版本号一致${NC}"
else
    echo -e "${YELLOW}⚠ 版本号不一致${NC}"
fi

# 显示版本号分布
if [ ${#versions[@]} -gt 0 ]; then
    echo -e "${YELLOW}版本号分布:${NC}"
    printf '%s\n' "${versions[@]}" | sort | uniq -c | while read count version; do
        echo -e "  $version: $count 个模块"
    done
fi

echo
echo -e "${BLUE}=== 使用说明 ===${NC}"
echo -e "${YELLOW}更新版本号:${NC}"
echo -e "  ./update-version.sh <new-version>"
echo -e "  例如: ./update-version.sh 4.1.0"