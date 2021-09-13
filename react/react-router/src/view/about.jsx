
import { useParams } from 'react-router-dom'
function About(params) {
  const { id } = useParams()
  return (
    <div>
      About 我是路由上的ID值{id}
    </div>
  )
}

export default About