import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Catstructions',
  tagline: 'Trudy and Myrtle: What Do',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://killedgier.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config. OK.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KillEdgier', // Usually your GitHub org/user name.
  projectName: 'catstructions', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KillEdgier/catstructions/tree/main/',
          routeBasePath: '/',
          },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KillEdgier/catstructions/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/trudy.png',
    colorMode: { 
      defaultMode: 'dark',
      },
    navbar: {
      title: 'Catstructions',
      logo: {
        alt: 'My Site Logo',
        src: 'img/trudy.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Cat Care',
        },
        {to: '/blog', label: 'New Hotness', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Catstructions™ is brought to you by Clell® ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
