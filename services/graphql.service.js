import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getSocialMedia = async () => {
  const query = gql`
    query getSocialMedia {
      socialMediasConnection {
        edges {
          node {
            id
            link
            name
            title
            icon {
              url
            }
            color {
              hex
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.socialMediasConnection.edges;
};

export const getPopularPosts = async () => {
  const query = gql`
    query getPopularPost() {
      posts(where: {popularPost: true}, orderBy: createdAt_DESC, last: 5) {
        id
        createdAt
        slug
        title
        author {
          name
        }
        featuredImage {
          url
        }     
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getBanner = async () => {
  const query = gql`
    query getPopularPost() {
      posts(orderBy: createdAt_DESC, last: 3) {
        id
        createdAt
        slug
        title
        excerpt
        author {
          name
        }
        featuredImage {
          url
        }     
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
