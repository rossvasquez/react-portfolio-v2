import Landing from './assets/components/landing/index'
import Projects from './assets/components/projects/index'
import About from './assets/components/about/about'
import Assets from './assets/components/assets/index'

import './App.css'

import { useRef, useState, useEffect } from 'react'

function App() {

  const [PopUpClosed, setPopUpClosed] = useState(false)

  const BackgroundRef = useRef();

  useEffect(() => {
      BackgroundRef.current.style.height = `${document.body.scrollHeight}px`;
  }, []);

  const EmailPopUp = () =>
    <div className={`fixed z-[70] left-[1vw] top-[1vw] w-[98vw] h-auto bg-white rounded-md overflow-hidden ${PopUpClosed ? 'fadeOut' : 'slideIn'}`}>
        <div className='flex items-center font-header text-deep text-3xl py-3 w-full bg-accent shadow-sm'>
          <p className='w-full px-4 md:text-center'>Important Notice</p>
          <div onClick={() => setPopUpClosed(true)} className='absolute right-4 h-10 w-10 bg-deep text-lg text-white bg-opacity-100 hover:cursor-pointer hover:bg-opacity-90 rounded-full flex justify-center items-center'>X</div>
        </div>
        <p className='px-3 md:px-6 text-xl my-3 leading-loose font-body text-deep'>My main email address used for contact through most mediums: <span className='font-header mr-1 md:text-2xl text-shallow'>thomasross.vasquez@gmail.com </span> 
        was flagged for bot activity by GMail on July 29, 2023. A resolution with Google is currently underway, 
        but may take a few business days. I would please ask that all communications be directed to my back-up email <span className='font-header md:text-2xl text-shallow'>ross.vasquez.17@gmail.com</span>.
        I apologize for any inconveniences this may cause and I look forward to our communications.</p>
        <div className='h-2 w-full bg-accent' />
    </div>

  const BackgroundBlur = () =>
  <div ref={BackgroundRef} className={`opacity-80 absolute top-0 left-0 w-screen bg-deep z-[60] ${PopUpClosed ? 'fadeOut' : 'fadeIn'}`} />

  return (
    <>
      <EmailPopUp />
      <BackgroundBlur />
      <Landing />
      <About />
      <Projects />
      <Assets />
    </>
  )
}

export default App
