// DO NOT DELETE

// import * as React from 'react'
import * as React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  // fetch state
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // state
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dhole/n02115913_4117.jpg',
  )
  // ajax
  const randImg = () => {
    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(
          result => {
            setIsLoaded(true)
            setDogUrl(result)
          },
          error => {
            setIsLoaded(true)
            setError(error)
          },
        )
    }, [])
  }
  randImg()
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <header>
          <p>らっこのめいちゃん</p>
        </header>
        <main>
          <p>らっこの可愛さをわからせる</p>
          <img
            src={dogUrl.message}
            alt="らっこの画像"
            width="300"
            height="300"
          />
          <button
            onClick={() => {
              fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
                .then(
                  result => {
                    setIsLoaded(true)
                    setDogUrl(result)
                  },
                  error => {
                    setIsLoaded(true)
                    setError(error)
                  },
                )
            }}
          >
            更新
          </button>
        </main>
      </div>
    )
  }
}
