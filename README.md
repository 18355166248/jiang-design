# jiang-design 组件库

## 坑

1. 如果 eslint 出现报错"vite" is not published 和"@vitejs/plugin-react" is not published，则需要在 package.json 中把这两个依赖从 devDependencies 移到 dependencies 内。
2. 如果报错不能使用 jsx，则需要 tsconfig.compilerOptions 中配置"jsx": "react"
3. 如果使用 document 的地方报错找不到名称“document”，则需要配置"lib": ["esnext", "DOM"]

```js
// bin/build.js
// node包，commonjs规范
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 打包的入口文件
const entryDir = path.resolve(__dirname, '../packages')
// 出口文件夹
const outDir = path.resolve(__dirname, '../lib')
// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// rollup配置
const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: [
    'vue'
  ],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    global: [
      vue: 'Vue'
    ]
  }
}
// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: '', // umd的变量名
        fileName: (format) => `index.${format}.js`, // 输出文件名
        formats: ['es', 'umd'],
      },
      outDir
    }
  })
}
const build = async () => {
  await buildAll()
}
build()

```
