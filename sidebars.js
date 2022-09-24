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
  notes: [
    {
      type: 'category',
      label: 'Notes',
      link: {
        type: 'generated-index',
        title: 'Notes',
        slug: '/notes',
        description: '站在巨人的肩膀上思考。',
        keywords: ['notes'],
      },
      items: sidebarsItems('notes'),
    },
  ],
  /** web */
  js: [
    {
      type: 'category',
      label: 'JavaScript',
      link: {
        type: 'generated-index',
        title: 'JavaScript',
        description: 'JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。',
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
        description: 'TypeScript 是 JavaScript 的超集，它可以编译成纯 JavaScript。',
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
        description: '层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。',
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
        description: 'HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。',
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
        description: '水之积也不厚，则其负大舟也无力。',
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
        description: '精选列表',
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
        description: '在数学（算学）和计算机科学之中，指一个被定义好的、计算机可施行其指示的有限步骤或次序，常用于计算、数据处理和自动推理。算法是有效方法，包含一系列定义清晰的指令，并可于有限的时间及空间内清楚的表述出来。',
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
        description: '在计算机科学中，排序算法是一种将列表元素按顺序排列的算法。',
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
        description: 'Web 技术相关的面试，包含但不限于 JavaScript、CSS、HTML 等。',
        keywords: ['interview', 'fe', 'web', 'js', 'css', 'html'],
      },
      items: sidebarsItems('interview/web'),
    },
  ],
};

module.exports = sidebars;
