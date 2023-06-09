import '../../global-style.css'
import './Pagination.css'
export interface TextFieldProps {
  pageLimit: number
  url: string
  lastPageNumber: number
  paramKey: string
}

const TextField = (props: TextFieldProps) => {
  return (
    <>
      <ul>
        {(function () {
          const list = []
          for (let i = 1; i <= props.pageLimit; i++) {
            list.push(
              <li>
                <a href={props.url + '?' + props.paramKey + '=' + i}>{i}</a>
              </li>
            )
          }
          if (props.lastPageNumber - props.pageLimit > 1) {
            list.push(<li>...</li>)
          }

          if (props.lastPageNumber > props.pageLimit) {
            list.push(
              <li>
                <a
                  href={
                    props.url +
                    '?' +
                    props.paramKey +
                    '=' +
                    props.lastPageNumber
                  }
                >
                  Last
                </a>
              </li>
            )
          }

          return <ul>{list}</ul>
        })()}
      </ul>
    </>
  )
}

export default TextField
