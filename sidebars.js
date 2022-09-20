/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const fg = require('fast-glob');

// @ts-check
const sidebarsItems = (type, deep = 1) =>
  fg.sync(
    [`docs/${type}/**/*.{mdx,md}`],
    { ignore: ['**/_*.{mdx,md}'], deep }
  ).map(i => i.match(/docs\/(.*)\.md/)[1]);

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  /** web */
  js: [
    {
      type: 'category',
      label: 'JavaScript',
      link: {
        type: 'generated-index',
        title: 'JavaScript',
        description: 'Web JavaScript',
        slug: '/js',
        keywords: ['js'],
        // image: '/img/docusaurus.png',
      },
      items: sidebarsItems('web/js'),
    },
  ],
  ts: [
    {
      type: 'category',
      label: 'TypeScript',
      link: {
        type: 'generated-index',
        title: 'TypeScript',
        description: 'Web TypeScript',
        slug: '/ts',
        keywords: ['ts'],
      },
      items: sidebarsItems('web/ts'),
    },
  ],
  css: [
    {
      type: 'category',
      label: 'CSS',
      link: {
        type: 'generated-index',
        title: 'CSS',
        description: 'Web CSS',
        slug: '/css',
        keywords: ['css'],
      },
      items: sidebarsItems('web/css'),
    },
  ],
  html: [
    {
      type: 'category',
      label: 'HTML',
      link: {
        type: 'generated-index',
        title: 'HTML',
        description: 'Web HTML',
        slug: '/html',
        keywords: ['html'],
      },
      items: sidebarsItems('web/html'),
    },
  ],
  base: [
    {
      type: 'category',
      label: 'Base CS',
      link: {
        type: 'generated-index',
        title: '计算机基础',
        description: 'TODO',
        slug: '/base',
        keywords: ['base', 'cs'],
      },
      items: sidebarsItems('base'),
    },
  ],
  rust: [
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'generated-index',
        title: 'Rust',
        description: '一门赋予每个人构建可靠且高效软件能力的语言。',
        slug: '/rust',
        keywords: ['rust'],
      },
      items: sidebarsItems('rust/FAQ'),
    },
  ],
  cheatsheet: [
    {
      type: 'category',
      label: 'Cheatsheet',
      link: {
        type: 'generated-index',
        title: 'Cheatsheet',
        slug: '/cheatsheet',
        description: '随着网络编程技术的飞速发展，我们需要学习的知识量也在不断增加。有时将无法记住编程语言或框架的所有语法、方法...。 为了解决上述问题，Cheat Sheet 应运而生。它将以系统和直观的方式综合所有语法、概念...，使你可以轻松找到在开发过程中应用的内容。',
        keywords: ['cheatsheet'],
      },
      items: sidebarsItems('cheatsheet'),
    },
  ],
  awesome: [
    {
      type: 'category',
      label: 'Awesome',
      link: {
        type: 'generated-index',
        title: 'Awesome',
        slug: '/awesome',
        description: 'TODO',
        keywords: ['awesome'],
      },
      items: sidebarsItems('awesome'),
    },
  ],
  algorithms: [
    {
      type: 'category',
      label: 'Algorithms',
      link: {
        type: 'generated-index',
        title: 'Algorithms',
        slug: '/algorithms',
        description: 'TODO',
        keywords: ['algorithms'],
      },
      items: sidebarsItems('algorithms'),
    },
    {
      type: 'category',
      label: '排序算法',
      link: {
        type: 'generated-index',
        title: '排序算法',
        slug: '/algorithms/sort',
        description: 'TODO',
        keywords: ['algorithms', 'sort'],
      },
      items: sidebarsItems('algorithms/sort'),
    },
  ],
  interview: [
    {
      type: 'category',
      label: 'Web',
      link: {
        type: 'generated-index',
        title: 'Web',
        slug: '/interview/web',
        description: 'Interview / Web',
        keywords: ['interview', 'fe', 'web', 'js', 'css', 'html'],
      },
      items: sidebarsItems('interview/web'),
    },
  ],
};

module.exports = sidebars;
