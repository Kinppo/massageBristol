const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        massageTypes: allContentfulMassageType {
            edges {
              node {
                id
                name
                slug
              }
            }
          } 
      } 
     `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const categoryPageTemplate = path.resolve(`src/templates/categoryPage/index.js`)
  //   const additionalPageTemplate = path.resolve(`src/templates/additionalPage/index.js`)

  //   // FOR SPEED PURPOSES, LETS ONLY ALLOW 10 PAGES TO BE BUILD IN DEVELOPMENT
  //   console.log('ENV: ', process.env.NODE_ENV)
  //   if (process.env.NODE_ENV === 'development') {
  //     result.data.massageTypes.edges.length = 10
  //   }

  result.data.massageTypes.edges.forEach(({ node }) => {
    const slug = node.slug
      createPage({
        path: slug,
        component: categoryPageTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          slug
        }
      })
  })

  // PRIVACY POLICY, T&CS ETC GET BUILT HERE.
//   result.data.additionalPages.additionalPagesConnection.edges.forEach(({ node }) => {
//     const slug = node.slug
//     if (node.status !== 'DRAFT') {
//       createPage({
//         path: slug,
//         component: additionalPageTemplate,
//         // In your blog post template's graphql query, you can use path
//         // as a GraphQL variable to query for data from the markdown file.
//         context: {
//           slug
//         }
//       })
//     }
//   })
}
