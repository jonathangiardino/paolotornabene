var slugify = require("slugify")

// NOTE: This function creates nodes for images coming from Graphcms in order to use Gatsby Image
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createResolvers = ({
  actions: { createNode },
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const resolvers = {
    GraphCMS_Asset: {
      node: {
        type: `File`,
        resolve: ({ url }, args, context, info) => {
          return createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { films },
    },
  } = await graphql(`
    {
      gcms {
        films {
          id
          title
        }
      }
    }
  `)

  films.forEach(({ title, id }) =>
    createPage({
      path: `/films/${slugify(title, { lower: true })}`,
      component: require.resolve(`./src/templates/film.js`),
      context: {
        title,
        id,
      },
    })
  )
}
