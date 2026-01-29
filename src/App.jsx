import './App.css'
import * as TubelineService from './services/TubelineService'
import { useState, useEffect } from 'react'

const App = () => {
  const [lines, setLines] = useState([])
  
useEffect(() => {
  const fetchData = async () => {
    const data = await TubelineService.show()
    //console.log(data)
    setLines(data)
  }
  
  fetchData()

}, [])

  return (
    <>
    <ul>
      {lines.map(line=> (
        <li key={line.id}>
          <p>{line.name} - {line.lineStatuses[0].statusSeverityDescription}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App