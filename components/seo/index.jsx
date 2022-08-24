import React from "react";
import { NextSeo } from "next-seo";

const SEO = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="News"
        description="Build web to learn NextJS and TailwindCSS"
        canonical="https://www.canonical.ie/"
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
          href: "https://m.canonical.ie",
        }}
        languageAlternates={[
          {
            hrefLang: "de-AT",
            href: "https://www.canonical.ie/de",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://news-of-minh.vercel.app/",
          title: "News",
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
      />
    </React.Fragment>
  );
};

export { SEO };
