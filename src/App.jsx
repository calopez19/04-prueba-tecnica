import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

CAT_END_POINT_IMAGE = `https://cataas.com/cat/says/${'lorem'}?fontSize=50&fontColor=red&json=true`

function App() {
  const [fact, setFact] = useState('lorem ipso cat fat')
  const [image, setImage] = useState('')
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then((data) => {
      setFact(data.fact)
    })

    fetch(CAT_END_POINT_IMAGE)
    .then(res => res.json())
    .then((data) => {
      setImage(data.fact)
    })

  },[])

  return (
    <>
      <h1>App de gatitos </h1>
      <p>{fact}</p>
      <img src={image} alt="imagen gato naranja"/>
    </>
  )
}

export default App
