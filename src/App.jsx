import Landing from './assets/components/landing/index'
import Projects from './assets/components/projects/index'
import About from './assets/components/about/about'
import Assets from './assets/components/assets/index'

import './App.css'

import { useRef, useState, useEffect } from 'react'

function App() {


  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Assets />
    </>
  )
}

export default App
