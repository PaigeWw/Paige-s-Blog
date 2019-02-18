const { name } = require('./package.json')

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        author: 'bobjiang',
        title: `博客模板`,
    },
    plugins: [
        'gatsby-plugin-catch-links',
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/blog`,
                name: 'blog',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-prismjs`,
                ],
            },
        },
    ],
}
