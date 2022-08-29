import React from "react";
import { NextSeo } from "next-seo";

const SEO = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Blogs Anh Minh"
        titleTemplate="Blogs Anh Minh"
        defaultTitle="Blogs Anh Minh"
        description="Build web to learn NextJS and TailwindCSS"
        canonical="https://anhminh.vercel.app/"
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        facebook={{
          appId: "100006973153393",
        }}
        mobileAlternate={{
          media: "only screen and (max-width: 767px)",
          href: "https://anhminh.vercel.app/",
        }}
        languageAlternates={[
          {
            hrefLang: "de-AT",
            href: "https://anhminh.vercel.app/",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://anhminh.vercel.app/",
          title: "Blogs Anh Minh",
          description: "Build web to learn NextJS and TailwindCSS",
          images: [
            {
              url: "https://iili.io/rMikP4.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://iili.io/rMikP4.png",
              width: 1920,
              height: 1080,
              alt: "Og Image Alt 2",
            },
          ],
          profile: {
            firstName: "Anh",
            lastName: "Minh",
            username: "annminn100",
            gender: "female",
          },
        }}
        twitter={{
          handle: "@annminn100",
          site: "@annminn100",
          cardType: "summary_large_image",
        }}
      />
    </React.Fragment>
  );
};

export { SEO };
