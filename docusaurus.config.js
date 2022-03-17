// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TOP软件工程师之路',
  tagline: '我的路径, 笔记, 心得',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TOP软件工程师之路',
        logo: {
          alt: 'TOP软件工程师之路',
          src: 'img/library.svg',
        },
        items: [
          {to: '/docs/get-started', label: '开始', position: 'left'},
          {
            label: "课程",
            position: "left",
            items: [
              {
                label: "MIT 6.006 Introduction to Algorithms",
                to: "/docs/introduction-to-algorithms/",
              },
              {
                label: "MIT 6.824 Distributed Systems",
                to: "/docs/distributed-systems/",
              },
              {
                label: "PingCAP 302 TiDB 高级系统管理",
                to: "https://feitian124.github.io/tidb-course-302",
              },
            ],
          },
          {
            label: "书籍",
            position: "left",
            items: [
              {
                label: "Designing Data-Intensive Application",
                to: "/docs/designing-data-intensive-application/",
              },
            ],
          },
          {to: '/docs/leetcode/', label: 'leetcode', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/feitian124/become-top-software-engineer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '开始',
                to: '/docs/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/topcoder_club',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/feitian124',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://p2y.top/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/feitian124/become-top-software-engineer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} feitian124, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
