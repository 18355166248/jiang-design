import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'jiang-design',
  mode: 'site',
  favicon: '/logo.svg',
  logo: '/logo.svg',
  dynamicImport: {}, // 是否启用按需加载
  navs: [null, { title: 'GitHub', path: 'https://github.com/18355166248' }],
  outputPath: 'docs-dist',
  alias: {
    '@': join(__dirname, 'src'),
  },
  links: [
    { rel: 'stylesheet', href: '/common.css' },
    {
      rel: 'stylesheet',
      href: '/tailwindCss.css',
    },
  ],
  // more config: https://d.umijs.org/config
});
