import React, { useState } from 'react'
import { DogImage } from './DogImage'
// DO NOT DELETE
export const Description = () => {
    const [dogUrl, setDogUrl] = useState(
        'https://images.dog.ceo/breeds/dhole/n02115913_4117.jpg',
      )
  return (
    <main>
      <DogImage url={dogUrl}/>
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
  )
}
