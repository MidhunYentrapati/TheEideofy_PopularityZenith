import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, ArrowLeft } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import { formatDate } from "@/lib/utils"
import { PortableText } from "@portabletext/react"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blogs" className="mt-4 text-blue-600 hover:underline">
          Back to blogs
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EIDEOFY</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-600 transition-colors">
              What we do
            </Link>
            <Link href="/#platforms" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Platforms
            </Link>
            <Link href="/#why-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Why us
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact us
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <article className="container max-w-4xl px-4 py-12 md:py-20">
          <Link href="/blogs" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 mb-8">
            {post.author.image && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={urlFor(post.author.image).url() || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
            </div>
          </div>

          {post.mainImage && (
            <div className="relative w-full aspect-video mb-10 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url() || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>

          {post.categories && post.categories.length > 0 && (
            <div className="mt-10 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span key={category._id} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <footer className="border-t bg-black text-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">EIDEOFY</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-300 transition-colors">
                What we do
              </Link>
              <Link href="/#platforms" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Platforms
              </Link>
              <Link href="/#why-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Why us
              </Link>
              <Link href="/about-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Eideofy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
