import { getLatestNews } from '@/lib/news'
import NewsList from '@/components/news-list'

export default function LatestNews() {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
      <h3>Default Latest News</h3>
    </>
  )
}
