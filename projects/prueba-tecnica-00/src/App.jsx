import { useEffect, useState } from 'react'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact`

export function App() {
  const [fact, setFact] = useState('')
  const [imgSrc, setImgSrc] = useState()
  
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const fact = data.fact
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        
        const url = 'https://cataas.com/cat/says/' + firstWord + '?fontSize=50&fontColor=red&json=true'
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            const imgSource = 'https://cataas.com/cat/' + data._id + '/says/' + firstWord + '?fontSize=50&fontColor=red'
            setImgSrc(imgSource)
          })
      })
  }, [])

  return (
    <>
      <div className='main-content'>
        { imgSrc && <img className='cat-image' src={imgSrc}></img> }
        { fact && 
          <span className='fact-span'>
            {fact}
          </span>
        }
      </div>
    </>
  )
}