// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
  organizationName: 'lencx', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    ...contentDocs('web/js', 'web/ts', 'web/html', 'web/css', 'rust'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lencx/wiki/tree/main',
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
        logo: {
          alt: 'lencx',
          src: 'img/logo.png',
          style: { borderRadius: '50%' },
        },
        items: [
          { label: '🔮 Blog', to: '/blog', position: 'left' },
          {
            type: 'dropdown',
            label: '🌐 Web 开发',
            position: 'left',
            items: [
              { label: 'JavaScript', href: '/web/js' },
              { label: 'TypeScript', href: '/web/ts' },
              { label: 'HTML', href: '/web/html' },
              { label: 'CSS', href: '/web/css' },
            ],
          },
          { label: '🦀 Rust', to: '/rust', position: 'left' },
          { label: 'GitHub', to: '/github', position: 'left' },
          { label: '点 ⭐️ 不迷路', href: 'https://github.com/lencx/wiki', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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

function contentDocs(...args) {
  return args.map((i) => [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: i.replace(/\//g, '-'),
      path: i,
      routeBasePath: i,
      editUrl: 'https://github.com/lencx/wiki/tree/main',
      sidebarPath: require.resolve('./sidebars.js'),
      editCurrentVersion: true,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    }),
  ])
}