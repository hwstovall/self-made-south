import * as path from 'path';

import { CreatePagesArgs } from 'gatsby';

export const createPages = ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.tsx`);

    resolve(
      graphql(`
        {
          allGhostPost(sort: { order: ASC, fields: published_at }) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        if (!result.data.allGhostPost) {
          return resolve();
        }

        const items = result.data.allGhostPost.edges;

        items.forEach(({ node }) => {
          node.url = `/posts/${node.slug}/`;

          createPage({
            path: node.url,
            component: path.resolve(postTemplate),
            context: {
              slug: node.slug,
            },
          });
        });
        return resolve();
      }),
    );
  });

  return Promise.all([createPosts])
};
