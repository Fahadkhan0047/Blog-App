import './App.css'
import {useDispatch} from 'react-redux'
import { useState , useEffect} from 'react'
import authService from './appwrite/auth'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [])
  
  return (
    <>
     <h1>Blog App using Appwrite</h1>
    </>
  )
}

export default App