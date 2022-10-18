import { defineConfig } from 'dumi';
import { join } from 'path';

let BaseUrl = '/jiang-design'; // 仓库的路径

export default defineConfig({
  title: 'jiang-design',
  mode: 'site',
  favicon: BaseUrl + '/logo.svg',
  logo: BaseUrl + '/logo.svg',
  dynamicImport: {}, // 是否启用按需加载
  navs: [null, { title: 'GitHub', path: 'https://github.com/18355166248' }],
  outputPath: 'docs-dist',
  alias: {
    '@': join(__dirname, 'src'),
  },
  links: [
    { rel: 'stylesheet', href: BaseUrl + '/common.css' },
    {
      rel: 'stylesheet',
      href: BaseUrl + '/tailwindCss.css',
    },
  ],

  // 打包路径配置
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  // more config: https://d.umijs.org/config
});
