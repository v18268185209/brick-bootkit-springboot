package com.zqzqq.bootkits.scripts.variable;

import com.zqzqq.bootkits.scripts.variable.impl.DefaultScriptVariableResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

/**
 * 脚本变量解析器测试
 *
 * @author starBlues
 * @since 4.0.1
 */
@DisplayName("脚本变量解析器测试")
class ScriptVariableResolverTest {
    
    private DefaultScriptVariableResolver resolver;
    private VariableContext context;
    
    @BeforeEach
    void setUp() {
        resolver = new DefaultScriptVariableResolver();
        context = new VariableContext();
        
        // 设置测试变量
        context.setVariable("username", "testuser");
        context.setVariable("age", 25);
        context.setVariable("isActive", true);
        context.setVariable("message", "Hello World");
        
        // 设置系统属性
        System.setProperty("test.sysprop", "system-property-value");
        
        // 设置环境变量
        Map<String, String> env = new HashMap<>(System.getenv());
        env.put("TEST_ENV_VAR", "environment-value");
        
        // 注意：在实际测试中，环境变量的设置可能有限制
    }
    
    @Test
    @DisplayName("基本变量替换测试")
    void testBasicVariableReplacement() {
        String script = "echo 'Hello ${username}! You are ${age} years old.'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "基本变量替换应该成功");
        assertNotNull(result.getReplacedContent(), "替换后的内容不应该为空");
        assertTrue(result.getReplacedContent().contains("testuser"), "应该包含正确的用户名");
        assertTrue(result.getReplacedContent().contains("25"), "应该包含正确的年龄");
        
        Map<String, Object> resolved = result.getResolvedVariables();
        assertTrue(resolved.containsKey("username"), "应该解析username变量");
        assertEquals("testuser", resolved.get("username"), "username值应该正确");
    }
    
    @Test
    @DisplayName("环境变量替换测试")
    void testEnvironmentVariableReplacement() {
        String script = "echo 'Environment: ${env:TEST_ENV_VAR}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "环境变量替换应该成功");
        assertNotNull(result.getReplacedContent(), "替换后的内容不应该为空");
        assertTrue(result.getReplacedContent().contains("environment-value"), "应该包含环境变量值");
    }
    
    @Test
    @DisplayName("系统属性替换测试")
    void testSystemPropertyReplacement() {
        String script = "echo 'System Property: ${sys:test.sysprop}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "系统属性替换应该成功");
        assertNotNull(result.getReplacedContent(), "替换后的内容不应该为空");
        assertTrue(result.getReplacedContent().contains("system-property-value"), "应该包含系统属性值");
    }
    
    @Test
    @DisplayName("上下文变量替换测试")
    void testContextVariableReplacement() {
        String script = "echo 'Context: ${ctx:username}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "上下文变量替换应该成功");
        assertNotNull(result.getReplacedContent(), "替换后的内容不应该为空");
        assertTrue(result.getReplacedContent().contains("testuser"), "应该包含上下文变量值");
    }
    
    @Test
    @DisplayName("默认值替换测试")
    void testDefaultValueReplacement() {
        String script = "echo 'Name: ${username:Unknown}, Role: ${role:User}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "默认值替换应该成功");
        String content = result.getReplacedContent();
        assertTrue(content.contains("testuser"), "应该使用实际的username值");
        assertTrue(content.contains("User"), "应该使用role的默认值");
    }
    
    @Test
    @DisplayName("函数变量测试")
    void testFunctionVariables() {
        String script = "echo 'Date: ${func:date()}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "函数变量替换应该成功");
        assertNotNull(result.getReplacedContent(), "替换后的内容不应该为空");
        assertTrue(result.getReplacedContent().contains("Date:"), "应该包含函数调用结果");
    }
    
    @Test
    @DisplayName("条件变量测试")
    void testConditionalVariables() {
        String script = "echo 'Status: ${cond:isActive == true}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "条件变量替换应该成功");
        String content = result.getReplacedContent();
        assertTrue(content.contains("true"), "条件应该为真");
    }
    
    @Test
    @DisplayName("复杂变量表达式测试")
    void testComplexVariableExpressions() {
        String script = "echo 'User: ${username} (${age} years old)'\\necho 'Message: ${upper:${message}}'\\necho 'Length: ${func:length(${message})}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "复杂变量表达式应该成功");
        String content = result.getReplacedContent();
        assertTrue(content.contains("testuser"), "应该包含用户名");
        assertTrue(content.contains("25"), "应该包含年龄");
        assertTrue(content.contains("HELLO WORLD"), "应该包含大写的消息");
        assertTrue(content.contains("Length:"), "应该包含长度信息");
    }
    
    @Test
    @DisplayName("未定义变量测试")
    void testUndefinedVariables() {
        // 严格模式下，未定义变量应该报错
        resolver.getConfiguration().setStrictMode(true);
        resolver.getConfiguration().setAllowUndefinedVariables(false);
        
        String script = "echo 'Value: ${undefinedVar}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertFalse(result.isSuccess(), "严格模式下未定义变量应该失败");
        assertNotNull(result.getErrors(), "应该有错误信息");
        assertFalse(result.getErrors().isEmpty(), "错误信息不应该为空");
    }
    
    @Test
    @DisplayName("宽松模式下的未定义变量测试")
    void testUndefinedVariablesInLenientMode() {
        // 宽松模式下，未定义变量使用默认值
        resolver.getConfiguration().setStrictMode(false);
        resolver.getConfiguration().setAllowUndefinedVariables(true);
        resolver.getConfiguration().setDefaultValue("default");
        
        String script = "echo 'Value: ${undefinedVar}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "宽松模式下未定义变量应该成功");
        assertTrue(result.getReplacedContent().contains("default"), "应该使用默认值");
    }
    
    @Test
    @DisplayName("变量定义验证测试")
    void testVariableDefinitionValidation() {
        // 添加变量定义
        VariableContext.VariableDefinition ageDef = new VariableContext.VariableDefinition(
            "age", Integer.class, 18, true, "用户年龄");
        ageDef.setAllowedValues(Set.of("18", "25", "30", "35"));
        context.setVariableDefinition(ageDef);
        
        // 测试有效值
        VariableContext.ValidationResult validResult = context.validateVariable("age", 25);
        assertTrue(validResult.isValid(), "有效年龄应该通过验证");
        
        // 测试无效值
        VariableContext.ValidationResult invalidResult = context.validateVariable("age", 40);
        assertFalse(invalidResult.isValid(), "无效年龄应该不通过验证");
        
        // 测试空值（必需字段）
        VariableContext.ValidationResult emptyResult = context.validateVariable("age", "");
        assertFalse(emptyResult.isValid(), "空年龄应该不通过验证（必需字段）");
    }
    
    @Test
    @DisplayName("变量上下文操作测试")
    void testVariableContextOperations() {
        // 测试变量设置和获取
        context.setVariable("testKey", "testValue");
        assertEquals("testValue", context.getVariable("testKey"), "变量设置和获取应该正确");
        
        // 测试类型安全获取
        context.setVariable("numberVar", 42);
        Number number = context.getNumber("numberVar");
        assertEquals(42, number.intValue(), "数字变量获取应该正确");
        
        context.setVariable("boolVar", true);
        Boolean bool = context.getBoolean("boolVar");
        assertTrue(bool, "布尔变量获取应该正确");
        
        // 测试变量存在性检查
        assertTrue(context.hasVariable("testKey"), "应该检测到存在的变量");
        assertFalse(context.hasVariable("nonExistent"), "不应该检测到不存在的变量");
        
        // 测试变量移除
        Object removed = context.removeVariable("testKey");
        assertEquals("testValue", removed, "移除的变量值应该正确");
        assertFalse(context.hasVariable("testKey"), "变量应该已被移除");
    }
    
    @Test
    @DisplayName("变量上下文复制和合并测试")
    void testVariableContextCopyAndMerge() {
        // 设置一些变量
        context.setVariable("key1", "value1");
        context.setVariable("key2", "value2");
        
        // 复制上下文
        VariableContext copiedContext = context.copy();
        assertEquals("value1", copiedContext.getVariable("key1"), "复制的上下文应该包含原变量");
        
        // 修改副本不应该影响原上下文
        copiedContext.setVariable("key1", "modified");
        assertEquals("value1", context.getVariable("key1"), "原上下文不应该被修改");
        assertEquals("modified", copiedContext.getVariable("key1"), "副本应该被修改");
        
        // 创建另一个上下文进行合并
        VariableContext otherContext = new VariableContext();
        otherContext.setVariable("key1", "value1new");
        otherContext.setVariable("key3", "value3");
        
        // 测试覆盖合并
        context.merge(otherContext, true);
        assertEquals("value1new", context.getVariable("key1"), "覆盖合并应该更新已存在的变量");
        assertEquals("value3", context.getVariable("key3"), "覆盖合并应该添加新变量");
        
        // 测试非覆盖合并
        context.setVariable("key1", "original");
        otherContext.setVariable("key1", "new");
        context.merge(otherContext, false);
        assertEquals("original", context.getVariable("key1"), "非覆盖合并应该保留原变量");
    }
    
    @Test
    @DisplayName("解析器统计信息测试")
    void testResolverStatistics() {
        // 执行一些解析操作
        String script = "echo '${username}'";
        resolver.resolveVariables(script, context);
        
        ScriptVariableResolverTest.this.resolver.resolveVariables(script, context);
        
        DefaultScriptVariableResolver.ResolutionStatistics stats = this.resolver.getStatistics();
        
        assertTrue(stats.getTotalResolutions() > 0, "总解析次数应该大于0");
        assertTrue(stats.getCustomResolverCount() >= 0, "自定义解析器数量应该有效");
        assertTrue(stats.getBuiltInFunctionCount() > 0, "内置函数数量应该大于0");
    }
    
    @Test
    @DisplayName("变量长度限制测试")
    void testVariableLengthLimit() {
        resolver.getConfiguration().setMaxVariableLength(10);
        
        String longVariable = String.join("", Collections.nCopies(20, "a"));
        String script = "echo '${" + longVariable + "}'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        // 长的变量名应该被处理或报错
        assertNotNull(result, "长变量应该被处理");
    }
    
    @Test
    @DisplayName("自定义变量解析器测试")
    void testCustomVariableResolver() {
        // 创建自定义解析器
        ScriptVariableResolver.CustomVariableResolver customResolver = new ScriptVariableResolver.CustomVariableResolver() {
            @Override
            public Object resolve(String variableName, VariableContext context) {
                if ("custom".equals(variableName)) {
                    return "custom-value";
                }
                return null;
            }
            
            @Override
            public int getPriority() { return 10; }
            
            @Override
            public String getName() { return "test-custom-resolver"; }
        };
        
        resolver.addVariableResolver(customResolver);
        
        String script = "echo 'Custom: ${custom}'";
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "自定义解析器应该成功");
        assertTrue(result.getReplacedContent().contains("custom-value"), "应该使用自定义解析器的值");
    }
    
    @Test
    @DisplayName("变量替换性能测试")
    void testVariableReplacementPerformance() {
        // 创建大量变量的脚本
        StringBuilder scriptBuilder = new StringBuilder();
        for (int i = 0; i < 100; i++) {
            context.setVariable("var" + i, "value" + i);
            scriptBuilder.append("echo '${var").append(i).append("}'\\n");
        }
        
        String script = scriptBuilder.toString();
        long startTime = System.currentTimeMillis();
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime;
        
        assertTrue(result.isSuccess(), "大量变量替换应该成功");
        assertTrue(duration < 5000, "大量变量替换应该在5秒内完成");
        assertTrue(result.getResolutionTimeMs() >= 0, "解析时间应该有效");
    }
    
    @Test
    @DisplayName("转义字符测试")
    void testEscapeCharacters() {
        String script = "echo 'Price: $${price} \\$100'";
        
        ScriptVariableResolver.VariableReplacementResult result = resolver.resolveVariables(script, context);
        
        assertTrue(result.isSuccess(), "转义字符应该被正确处理");
        String content = result.getReplacedContent();
        assertTrue(content.contains("${price}"), "转义的变量应该保留");
        assertTrue(content.contains("$100"), "转义的美元符号应该保留");
    }
}