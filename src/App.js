// DO NOT DELETE

// import * as React from 'react'
import * as React from 'react'
import { useState } from 'react'
import './App.css'
import './destyle.min.css'

/**
 * @type {React.FC}
 */
export const App = () => {
  // fetch state
  // const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)
  // state
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dhole/n02115913_4117.jpg',
  )
  // ajax
  // const randImg = () => {
  //   useEffect(() => {
  //     fetch('https://dog.ceo/api/breeds/image/random')
  //       .then(res => res.json())
  //       .then(
  //         result => {
  //           setIsLoaded(true)
  //           setDogUrl(result)
  //         },
  //         error => {
  //           setIsLoaded(true)
  //           setError(error)
  //         },
  //       )
  //   }, [])
  // }
  // randImg()
  // if (error) {
  //   return <div>Error: {error.message}</div>
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>
  // } else {
  return (
    <div className="contents">
      <header>
        <p>らっこのめいちゃん</p>
      </header>
      <main>
        <p>らっこの可愛さをわからせる</p>
        <p>
          <img src={dogUrl} alt="らっこの画像" width="300" height="300" />
        </p>
        <button
          className="btn"
          onClick={() => {
            fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
              .then(result => {
                setDogUrl(result.message)
              })
          }}
        >
          更新
        </button>
      </main>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fill-opacity="1"
            d="M0,160L30,133.3C60,107,120,53,180,74.7C240,96,300,192,360,224C420,256,480,224,540,192C600,160,660,128,720,128C780,128,840,160,900,154.7C960,149,1020,107,1080,101.3C1140,96,1200,128,1260,144C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <p>rako</p>
      </footer>
    </div>
  )
  // }
}
