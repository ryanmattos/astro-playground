import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export const GET = async (context) => rss({
    title: 'Astro Learner | Blog',
    description: 'Michael Scott',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`
})