// DO NOT DELETE

// import * as React from 'react'
import * as React from 'react'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { Description } from './Description.js'
import { DogListContainer } from './DogListContainer.js'
import './css/layout/App.css'
import './css/init/destyle.min.css'

/**
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className="contents">
      <Header />
      <Description />
      <DogListContainer />
      <Footer />
    </div>
  )
}

