import Image from 'next/image'
import React from 'react'
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '@/dummy-news'

export default async function ImagePage({ params }) {
    const { slug } = await params
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)

  if(!newsItem) {
    notFound ()
  }

    return (
      <div className='fullscreen-image'>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
      </div>
    )
}
