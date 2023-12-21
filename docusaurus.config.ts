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
  baseUrl: '/catstructions/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KillEdgier', // Usually your GitHub org/user name.
  projectName: 'catstructions', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        {
          href: 'https://github.com/KillEdgier/catstructions',
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
              label: 'Cat Care',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mr. Meowgi',
              href: 'https://www.instagram.com/its_mr_meowgi_to_you',
            },
            {
              label: 'Roman Wonder Twins',
              href: 'https://www.instagram.com/romanwondertwins',
            },
            {
              label: 'Brooklyn',
              href: 'https://flatbushcats.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'New Hotness',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle Trudy Myrtle `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
