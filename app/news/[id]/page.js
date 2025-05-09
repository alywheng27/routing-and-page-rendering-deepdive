import React from 'react'

export default async function NewsDetails({ params }) {
  const { id } = await params

  return (
    <>
      <h1>News Details</h1>
      <p>{id}</p>
    </>
  )
}
