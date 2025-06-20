"use client"

import React, { use } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { DUMMY_NEWS } from '@/dummy-news'

export default function InterceptedImagePage({ params }) {
  const router = useRouter()

  // Unwrap params using React.use()
  const { slug } = use(params);

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)

  if(!newsItem) {
    notFound ()
  }

  return (
    <>
      <div className='modal-backdrop' onClick={router.back} />
        <dialog className='modal' open>
          <div className='fullscreen-image'>
              <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      
    </>
  )
}
