import Image from 'next/image'
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function NewsDetails({ params }) {
  const { slug } = await params
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)

  if(!newsItem) {
    notFound ()
  }
  
  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={300} height={120} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  )
}
