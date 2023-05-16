import React from 'react'
import {Banner,
Bring,
DeeperDive,
Large,
Overview,
Sol,
Footer} from './components/index'

const App = () => {
  return (
      <div>
        <Banner/>
        <Overview/>
        <DeeperDive/>
        <Sol/>
        <Large/>
        <Bring/>
        <Footer/>
      </div>
    
  )
}

export default App
