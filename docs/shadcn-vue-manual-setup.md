# Shadcn-Vue 手动安装指南

本项目采用手动方式集成 shadcn-vue 组件，无需使用 CLI 工具。

## 已完成的配置

### 1. 安装必要依赖

```bash
pnpm add radix-vue class-variance-authority clsx tailwind-merge lucide-vue-next
pnpm add -D tailwindcss-animate
```

### 2. Tailwind CSS 配置

文件：`apps/web/tailwind.config.js`

- ✅ 添加了 darkMode 支持
- ✅ 配置了 content 路径
- ✅ 扩展了主题颜色和动画
- ✅ 添加了 tailwindcss-animate 插件

### 3. CSS 变量配置

文件：`apps/web/assets/css/main.css`

- ✅ 定义了所有设计令牌（颜色、圆角等）
- ✅ 支持亮色和暗色模式

### 4. 工具函数

文件：`apps/web/lib/utils.ts`

- ✅ 创建了 `cn()` 函数用于条件性类名合并

### 5. Nuxt 配置

文件：`apps/web/nuxt.config.ts`

- ✅ 引入了 @nuxtjs/tailwindcss 模块
- ✅ 配置了别名路径

## 如何添加新组件

### 方法 1：从 shadcn-vue 网站复制（推荐）

1. 访问 [https://www.shadcn-vue.com/](https://www.shadcn-vue.com/)
2. 选择需要的组件
3. 点击组件页面的代码标签
4. 复制组件代码到 `apps/web/components/ui/` 目录
5. 根据需要调整导入路径

### 方法 2：手动创建

在 `apps/web/components/ui/` 目录下创建组件文件，遵循以下模式：

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const classes = computed(() => {
  return cn(
    // 基础样式
    'inline-flex items-center justify-center',
    // 变体样式
    props.variant === 'outline' && 'border border-input',
    // 尺寸样式
    props.size === 'sm' && 'h-9 px-3',
    // 自定义类名
    props.class
  )
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
```

## 已有组件

当前已添加的 UI 组件：

- Button.vue - 按钮组件
- Card.vue - 卡片容器
- CardContent.vue - 卡片内容
- CardDescription.vue - 卡片描述
- CardHeader.vue - 卡片头部
- CardTitle.vue - 卡片标题
- Input.vue - 输入框
- Label.vue - 标签

## 使用示例

```vue
<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>示例标题</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>点击我</Button>
    </CardContent>
  </Card>
</template>
```

## 常用组件推荐

根据 AI 低代码平台的需求，建议添加以下组件：

### 表单相关
- Select - 下拉选择
- Checkbox - 复选框
- RadioGroup - 单选按钮组
- Switch - 开关
- Textarea - 多行文本框
- Form - 表单容器

### 布局相关
- Tabs - 标签页
- Separator - 分隔线
- ScrollArea - 滚动区域
- Sheet - 侧边抽屉
- Dialog - 对话框

### 反馈相关
- Toast - 通知提示
- Alert - 警告提示
- Badge - 徽章
- Skeleton - 骨架屏

### 数据展示
- Table - 表格
- Avatar - 头像
- Tooltip - 提示框
- Popover - 弹出框

## 故障排查

### 样式不生效

1. 确认 `tailwind.config.js` 的 content 配置包含了组件路径
2. 确认 `main.css` 已在 `nuxt.config.ts` 中引入
3. 清除 `.nuxt` 缓存后重启开发服务器

### TypeScript 类型错误

1. 确认组件 props 类型定义正确
2. 在 `tsconfig.json` 中配置路径别名

### 暗色模式不工作

1. 检查 `tailwind.config.js` 中 `darkMode: ["class"]` 配置
2. 在根元素上添加 `dark` 类名来切换暗色模式

## 优势

手动安装的优势：

1. ✅ 完全控制组件代码，可自由定制
2. ✅ 避免 CLI 工具版本兼容问题
3. ✅ 只添加需要的组件，减少项目体积
4. ✅ 更容易理解组件实现原理
5. ✅ 便于团队维护和修改

## 参考资源

- [shadcn-vue 官方文档](https://www.shadcn-vue.com/)
- [Radix Vue 文档](https://www.radix-vue.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
