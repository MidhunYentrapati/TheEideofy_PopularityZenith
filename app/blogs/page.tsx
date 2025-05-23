import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { getAllPosts } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import { formatDate } from "@/lib/utils"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function BlogsPage() {
  const posts = await getAllPosts()

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Eideofy Blog</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights, strategies, and trends in social media and digital growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <Link href={`/blogs/${post.slug.current}`} key={post._id} className="group">
                      <div className="flex flex-col space-y-3 border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
                        <div className="relative w-full aspect-video">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).url() || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="p-4 space-y-2">
                          <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
                          <h3 className="font-bold group-hover:underline">{post.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <p className="text-gray-500">No blog posts found. Check back soon!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
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
