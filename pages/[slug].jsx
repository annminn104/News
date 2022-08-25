import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { ContactMe } from "../components/contact-me";
import { PopularPost } from "../components/popular-post";
import { PostDetail } from "../components/post-detail";
import { Author } from "../components/author";
import { FacebookAction } from "../components/facebook-action";

import { getSocialMedia, getPopularPost, getPostDetails } from "../services/graphql.service";
import { initFacebookSDK } from "../services/facebookSDK.service";

const PostPage = ({ socials, popularPost, post }) => {
  const router = useRouter();

  useEffect(() => {
    initFacebookSDK();
  });

  return (
    <React.Fragment>
      {post && (
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
        </Head>
      )}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 z-20">
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8 border-r border-zinc-300  lg:order-1 order-2">
            <div className="relative lg:sticky lg:top-20">
              <ContactMe socials={socials} />
              <PopularPost popularPost={popularPost} />
            </div>
          </div>
          <div className="lg:col-span-8 col-span-1 px-4 lg:px-8 lg:order-2 order-1">
            {post && (
              <>
                <PostDetail post={post} />
                <Author author={post?.author} />
                <FacebookAction href={process.env.NEXT_PUBLIC_VERCEL_URI} numPosts={5} width="100%" />
              </>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostPage;

export async function getServerSideProps({ params }) {
  const [socials, popularPost, post] = await Promise.all([getSocialMedia(), getPopularPost(), getPostDetails(params.slug)]);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      socials,
      popularPost,
      post,
    },
  };
}
