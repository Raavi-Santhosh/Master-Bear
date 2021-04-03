/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Master Bear',
  tagline: 'I\'m Your Master Now!!',
  url: 'https://Raavi-Santhosh.github.io',
  baseUrl: '/Master-Bear/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/favicon.ico',
  organizationName: 'Raavi-Santhosh', // Usually your GitHub org/user name.
  projectName: 'Master-Bear', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Master Bear',
      logo: {
        alt: 'Master Bear Logo',
        src: 'static/img/logo-Bear.png',
        // srcDark: "img/logo-pretty.svg",
      },
      items: [
        {
          label: 'MATLAB',
          position: 'left',
          items: [
            {
              label: 'MATLAB Fundass!',
              to: 'docs/matlab/1-Matlab-Environment',
            },
        ],
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        }, 
        
          matlab: {
            sidebarPath: require.resolve('./sidebarsMatlab.js'),
            // Please change this to your repo.
            editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },       
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
