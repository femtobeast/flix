import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LoadMore = ({ page }) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    setCurrentPage(page)
    return () => {
      setCurrentPage(1)
    }
  }, [page])

  const loadMoreContents = () => {
    const { pathname, query } = router
    query.page = currentPage + 1
    setCurrentPage(prev => prev + 1)
    router.push({ pathname, query }, { shallow: true }) // {shallow:true} Updates the path of the current page without rerunning
  }

  return (
    <div className='flex justify-center'>
      <button
        className='outline-none focus:outline-none border-2 border-secondary rounded-sm flex text-light py-1 px-3 items-center my-6 transform duration-500 hover:scale-105 hover:bg-secondary'
        onClick={loadMoreContents}
      >
        <span className='mr-2'>Load More</span>
        <i className='fas fa-sync-alt'></i>
      </button>
    </div>
  )
}

export default LoadMore
