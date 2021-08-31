import { getEntireTags } from '@GraphQL/tagRequest';
import { Tag, TagStatus } from '@Models/TagModel';
import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

const siteUrl = process.env.DOMAIN_APP || 'https://du-sainbolt.web.app';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const listSlugTags: Tag[] = await getEntireTags({ status: [TagStatus.ACTIVE] });
  const fields: ISitemapField[] = [];

  listSlugTags.forEach(item => {
    fields.push({
      loc: `${siteUrl}/tag/${item.slug}`,
      lastmod: new Date().toISOString(),
    });

    fields.push({
      loc: `${siteUrl}/en/tag/${item.slug}`,
      lastmod: new Date().toISOString(),
    });
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
