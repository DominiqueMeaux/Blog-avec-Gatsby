/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//créer de pages
const path = require(`path`)
//createPages vient de gatsby
exports.createPages = ({ graphql, actions }) => {
    //on appele la fonction createPages
    const { createPage } = actions
    //on importe les différents fichiers Markdown
    //avec allMarkdownRemark
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(JSON.stringify(result, null, 2))
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const prev = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.frontmatter.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: post.node.frontmatter.slug,
          next,
          prev,
        },
      })
    })
  })
}
