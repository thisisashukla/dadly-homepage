import { MetadataRoute } from 'next'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllBlogSlugs()

  const blogUrls: MetadataRoute.Sitemap = slugs.map((slug) => {
    const blog = getBlogBySlug(slug)
    return {
      url: `https://dadlyapp.com/blog/${slug}`,
      lastModified: blog?.dateModified ?? '2026-05-06',
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  return [
    {
      url: 'https://dadlyapp.com',
      lastModified: '2026-05-11',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://dadlyapp.com/blog',
      lastModified: '2026-05-11',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: 'https://dadlyapp.com/privacy',
      lastModified: '2026-05-07',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://dadlyapp.com/support',
      lastModified: '2026-05-07',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
