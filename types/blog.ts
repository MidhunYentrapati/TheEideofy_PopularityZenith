export interface Author {
  _id: string
  name: string
  image: any
  bio: string
}

export interface Category {
  _id: string
  title: string
  description: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: Author
  mainImage: any
  categories: Category[]
  publishedAt: string
  excerpt: string
  body: any
}
