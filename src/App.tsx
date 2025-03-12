import React from 'react'
import {DarkModeProvider} from './Components/DarkModeContext'
import Header from './Components/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import PopularAreas from './Sections/PopularAreas'
import Properties from './Sections/Properties'


const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Header/>
      <Hero/>
      <About />
      <PopularAreas />
      <Properties />
    </DarkModeProvider>
    </>
  )
}

export default App
