module.exports = {
  siteMetadata: {
    title: 'Self Made South',
    description: 'Stories of the hard-working people of the South and how they\'re making a name for themselves every day.',
    author: '@selfmadesouth',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'http://self-made-south:2368',
        contentApiKey: 'a305b954e0843bb501a0a60b1e',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
};
