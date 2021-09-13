import { useContext } from 'react'
import { ThemeContext } from './App'
function Son() {
  const theme = useContext(ThemeContext)
  return (
    <div>
      {theme}
    </div>
  )
}

export default Son