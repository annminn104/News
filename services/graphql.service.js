import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getLastestNews = async () => {
  const query = gql`
    query getLastestNew {
      posts(orderBy: publishedAt_DESC, last: 10) {
        id
        title
        slug
        excerpt
        createdAt
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } }, document: { output: { format: webp } } })
        }
        author {
          name
          id
          photo {
            url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } }, document: { output: { format: webp } } })
          }
        }
        categories {
          name
          id
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

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
              url(transformation: { image: { resize: { width: 32, height: 32, fit: clip } }, document: { output: { format: webp } } })
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

export const getPopularPost = async () => {
  const query = gql`
    query getPopularPost() {
      posts(where: {popularPost: true}, orderBy: createdAt_DESC, first: 5) {
        id
        createdAt
        slug
        title
        author {
          name
        }
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } }, document: { output: { format: webp } } })
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
      posts(orderBy: createdAt_ASC, last: 3) {
        id
        createdAt
        slug
        title
        excerpt
        author {
          name
        }
        featuredImage {
          url(transformation: { image: { resize: { width: 1536, height: 673, fit: clip } }, document: { output: { format: webp } } })         
        }     
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getFeaturedNews = async () => {
  const query = gql`
    query getFeaturedNews() {
      posts(where: {featuredPost: true}, orderBy: createdAt_DESC, first: 5) {
        id
        createdAt
        slug
        title
        excerpt
        author {
          name
        }
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } }, document: { output: { format: webp } } })
        }     
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getDontMiss = async () => {
  const query = gql`
    query getDontMiss() {
      posts(where: {dontMiss: true}, orderBy: createdAt_DESC, first: 8) {
        id
        createdAt
        slug
        title
        excerpt
        author {
          name
        }
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } },  document: { output: { format: webp } } })     
        }     
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getLastestUpdate = async () => {
  const query = gql`
    query getLastestUpdate() {
      posts(orderBy: updatedAt_DESC, first: 3) {
        id
        createdAt
        slug
        title
        excerpt
        author {
          name
        }
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } }, document: { output: { format: webp } } })
        } 
        categories {
          id
          name
        }    
      }
    }   
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getMusics = async () => {
  const query = gql`
    query getMusics() {
      musics {       
        id
        title
        artist
        link
        image {
          url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } }, document: { output: { format: webp } } })
        }
        author {
          name
          photo {
            url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } }, document: { output: { format: webp } } })
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.musics;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url(transformation: { image: { resize: { width: 1200, height: 900, fit: clip } }, document: { output: { format: webp } } })
        }
        author {
          name
          bio
          photo {
            url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } }, document: { output: { format: webp } } })
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
