import { sanityClient } from "./sanity"
import type { Post } from "@/types/blog"

export async function getAllPosts(): Promise<Post[]> {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        _id,
        name,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        title,
        description
      },
      publishedAt,
      excerpt,
      body
    }
  `)

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{
        _id,
        name,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        title,
        description
      },
      publishedAt,
      excerpt,
      body
    }
  `,
    { slug },
  )

  return post
}
