/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
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
      items: ['web/js/hello'],
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
      items: ['web/ts/hello'],
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
      items: ['web/css/hello'],
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
      items: ['web/html/hello'],
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
      items: ['rust/FAQ/china_mirror'],
    },
  ],
  cheatsheet: [
    {
      type: 'category',
      label: 'Cheatsheet',
      link: {
        type: 'generated-index',
        title: 'Cheatsheet',
        description: 'TODO',
        slug: '/cheatsheet',
        keywords: ['cheatsheet'],
      },
      items: ['cheatsheet/git'],
    },
  ],
  awesome: [
    {
      type: 'category',
      label: 'Awesome',
      link: {
        type: 'generated-index',
        title: 'Awesome',
        description: 'TODO',
        slug: '/awesome',
        keywords: ['awesome'],
      },
      items: ['awesome/tools'],
    },
  ],
};

module.exports = sidebars;
