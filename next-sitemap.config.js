/* eslint-disable no-undef */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://busco.at',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const pages = await fetch(
      `${process.env.NEXT_APOLLO_CLIENT_URL}/api/pdps`,
      {
        next: { revalidate: 10 },
      }
    );

    const urls = await pages.json();
    const slugs = urls.data.map((url) => url.attributes.slug);

    const paths = await Promise.all(
      slugs.map((slug) => {
        return config.transform(config, `/service/${slug}`);
      })
    );

    return paths;
  },
};
