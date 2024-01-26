type Title = {
  rendered: string
}

type Author = {
  name: string
  link: string
}

type Term = {
  name: string
}

type Embedded = {
  author: Author[]
  "wp:term": Term[][]
}

export type Post = {
  title: Title
  featured_media: string
  link: string
  date: Date
  _embedded: Embedded
}
