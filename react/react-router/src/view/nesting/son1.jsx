import { useParams } from 'react-router-dom'
function Son1(params) {
  let { id } = useParams()

  return (
    <div>
      son1  url参数{id}
    </div>
  )
}

export default Son1