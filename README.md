# jiang-design 组件库

## 坑

1. 如果 eslint 出现报错"vite" is not published 和"@vitejs/plugin-react" is not published，则需要在 package.json 中把这两个依赖从 devDependencies 移到 dependencies 内。
2. 如果报错不能使用 jsx，则需要 tsconfig.compilerOptions 中配置"jsx": "react"
3. 如果使用 document 的地方报错找不到名称“document”，则需要配置"lib": ["esnext", "DOM"]

## father 4.X 打包问题

1. 4.x 版本的如何把 less 编译成 css #529

[作者回复](https://github.com/umijs/father/issues/529)

对于 Less 之类传统预处理器，我理解把样式文件交给实际项目去编译更合适，主要原因：

Bundless 不打包、没法处理样式文件的依赖，比如 a.less 和 b.less 都 @import 'pkg/es/style/index.less'，那产出的 a.css 和 b.css 如果包含依赖就有产物冗余、甚至样式冲突，如果不包含依赖就会样式丢失产出原始 Less 文件使用的项目更容易定制变量，代价是项目编译会稍增成本对于 Windi CSS 之类的原子化 CSS，我没有调研过，但它似乎更适用于 Bundle 模式而不是 Bundless
