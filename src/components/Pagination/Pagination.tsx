import '../../global-style.css'
import './Pagination.css'

export type PaginationProps = {
  pageLimit: number
  url: string
  lastPageNumber: number
  paramKey: string
}

const Pagination = ({
  pageLimit,
  url,
  lastPageNumber,
  paramKey,
}: PaginationProps) => {
  // generatePageLinks
  const generatePageLinks = () => {
    const links = []

    // page link
    for (let i = 1; i <= pageLimit; i++) {
      links.push(
        <li key={i} className="pagination-item">
          <a href={`${url}?${paramKey}=${i}`} aria-label={`Page ${i}`}>
            {i}
          </a>
        </li>
      )
    }

    // ...
    if (lastPageNumber - pageLimit > 1) {
      links.push(
        <li key="ellipsis" className="pagination-ellipsis" aria-hidden="true">
          ...
        </li>
      )
    }

    // last page link
    if (lastPageNumber > pageLimit) {
      links.push(
        <li key="last" className="pagination-item">
          <a
            href={`${url}?${paramKey}=${lastPageNumber}`}
            aria-label={`Page ${lastPageNumber}`}
          >
            Last
          </a>
        </li>
      )
    }

    return links
  }

  return (
    <nav aria-label="Pagination Navigation">
      <ul className="pagination-list">{generatePageLinks()}</ul>
    </nav>
  )
}

export default Pagination
