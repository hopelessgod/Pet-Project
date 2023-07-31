import React from 'react'
import styles from './style'

import { Navbar, Hero, FirstPart, SecondPart, ThirdPart, FourthPart, FifthPart } from './components'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}></div>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
        
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}></div>
        <div className={`${styles.boxWidth}`}>
          <FirstPart />
          <SecondPart />
          <ThirdPart />
          <FourthPart />
          <FifthPart />
        </div>
    </div>
  

    
  )
}

export default App