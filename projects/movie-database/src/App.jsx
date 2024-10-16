import { useEffect, useState } from 'react'
import './index.css'
import { Movie } from './Movie';

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/movie',
      {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'})
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
  }, [])

  return (
    <div>
      {Object.keys(movie).length !== 0 &&
        <Movie movie={movie}/>
      }
    </div>
  )
}

export default App
