import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {

  
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList)

  return (
    <>
      <div className='App'>
  
        { 
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
       }
       
      </div>
      <h1></h1>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
