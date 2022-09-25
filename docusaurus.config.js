// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '浮之静',
  tagline: '{折腾 ⇌ 迷茫 ⇌ 思考]ing，在路上...',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lencx',
  projectName: 'wiki',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lencx/wiki/tree/main',
          routeBasePath: '/',
          path: 'docs/',
          exclude: ['docs/**', '**/_*.{md,mdx}'],
          editCurrentVersion: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args}) {
          //   const sidebarItems = await defaultSidebarItemsGenerator(args);
          //   return sidebarItems;
          // },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lencx/wiki/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no' },
        { name: 'keyword', content: 'web,js,css,ts,rust,wiki' },
      ],
      navbar: {
        title: '浮之静',
        // style: 'primary',
        logo: {
          alt: 'lencx',
          src: 'img/logo.png',
          style: { borderRadius: '50%' },
        },
        items: [
          { label: '🔮 Blog', to: '/blog', position: 'left' },
          { label: '📝 笔记', to: '/notes', position: 'left' },
          {
            type: 'dropdown',
            label: '👨🏻‍💻 编程',
            position: 'left',
            // activeBaseRegex: '',
            items: [
              { label: '计算机基础', to: '/base' },
              { label: 'Algorithms', to: '/algorithms' },
              { label: 'Rust', to: '/rust' },
              { label: 'JavaScript', href: '/js' },
              { label: 'TypeScript', href: '/ts' },
              { label: 'CSS', href: '/css' },
              { label: 'HTML', href: '/html' },
            ],
          },
          // { label: '🧮 Algorithms', to: '/algorithms', position: 'left' },
          {
            type: 'dropdown',
            label: '📝 Initerview',
            position: 'left',
            items: [
              { label: 'Web', href: '/interview/web' },
              // { label: 'Rust', to: '/interview/rust' },
            ],
          },
          { label: '🗺 Cheatsheet', to: '/cheatsheet', position: 'left' },
          { label: '😎 Awesome', to: '/awesome', position: 'left' },
          { label: 'GitHub', to: '/github', position: 'left' },
          { label: '💖 赞助', to: '/sponsor', position: 'right' },
          { label: '点 ⭐️ 不迷路', href: 'https://github.com/lencx/wiki', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '浮之静',
            items: [
              {
                label: '关于网站',
                href: '/blog/about',
              },
              {
                label: '赞助作者',
                href: '/sponsor',
              },
            ],
          },
          {
            title: '我的社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lencx',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/lencx_',
              },
              {
                label: '公众号',
                href: 'https://mp.weixin.qq.com/s/K9UtoDSL2mMh_hWm-xPPtg',
              },
            ],
          },
          {
            title: '我的开源',
            items: [
              {
                label: 'rwasm',
                href: 'https://github.com/rwasm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} lencx`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/oceanicNext'),
        additionalLanguages: ['rust', 'powershell', 'bash', 'toml'],
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'saveData',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/meta/lencx.png',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/meta/lencx.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/meta/lencx.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/meta/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#0F0F0F',
          },
        ],
      },
    ],
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
};

module.exports = config;
