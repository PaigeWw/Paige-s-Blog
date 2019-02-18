const path = require('path')

const createTagPages = (createPage, edges) => {
    const categoryTemplate = path.resolve(`src/templates/category.js`)
    const posts = {}

    edges.forEach(({ node }) => {
        if (node.frontmatter.category) {
            const category = node.frontmatter.category
            if (!posts[category]) {
                posts[category] = []
            }
            posts[category].push(node)
        }
    })

    createPage({
        path: '/categories',
        component: categoryTemplate,
        context: {
            posts,
        },
    })

    Object.keys(posts).forEach(category => {
        const post = posts[category]
        createPage({
            path: `/categories/${category}`,
            component: categoryTemplate,
            context: {
                posts,
                post,
                category: category,
            },
        })
    })
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 250)
                        html
                        id
                        timeToRead
                        frontmatter {
                            date
                            path
                            category
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        createTagPages(createPage, posts)

        posts.forEach(({ node }, index) => {
            const prev = index === 0 ? null : posts[index - 1].node
            const next =
                index === posts.length - 1 ? null : posts[index + 1].node

            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    prev,
                    next,
                },
            })
        })

        return posts
    })
}
