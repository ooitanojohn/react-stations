// DO NOT DELETE

// import * as React from 'react'
import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dhole/n02115913_4117.jpg',
  )
  return (
    <body>
      <header>
        <p>らっこのめいちゃん</p>
      </header>
      <main>
        <p>らっこの可愛さをわからせる</p>
        <img src={dogUrl} alt="らっこの画像" width="300" height="300" />
      </main>
    </body>
  )
}
