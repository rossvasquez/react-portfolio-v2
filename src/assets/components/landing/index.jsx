import landingBack from '../../static/landingBack.png'
import me from '../../static/me.png'
import meBack from '../../static/meBack.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


function Landing() {

    const Divider = () =>
    <div className="h-full w-[.1rem] bg-shallow"></div>

    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave={true} className='relative h-screen w-screen'>
            <div className="relative p-4 h-screen w-screen bg-shallow">
                <div className='relative mt-6 ml-4'>
                    <div className='flex flex-row'>
                        <div className='rounded-full hover:shadow-md w-60 h-12 bg-deep bg-opacity-80 hover:bg-opacity-100 uppercase font-body text-2xl font-light text-accent flex justify-center items-center hover:cursor-pointer'>download cv</div>
                        <a href="mailto:thomasross.vasquez@gmail.com" className='rounded-full hover:shadow-md w-60 h-12 bg-transparent ml-4 hover:bg-white hover:bg-opacity-20 border-white border-opacity-40 border-2 uppercase font-body text-2xl font-light text-white flex justify-center items-center hover:cursor-pointer'>email me</a>
                    </div>
                    <h1 className='relative z-50 font-header w-screen text-6xl pl-1 sm:pl-0 md:text-8xl lg:text-9xl font-bold uppercase text-accent shadowTitleSmall md:shadowTitle'>Ross Vasquez</h1>
                    <h2 className="relative z-50 font-header font-sans text-2xl xs:text-3xl md:text-5xl mt-2 xs:mt-1 sm:mt-0 font-semibold text-white tracking-wider uppercase pl-1.5 xs:pl-1 shadowJobSmall md:shadowJob">Software Developer</h2>
                <div className='bg-deep bg-opacity-80 relative p-4 rounded-xl h-auto w-fit flex flex-col font-body ml-1 mt-6 uppercase text-4xl font-bold shadowSkills text-white z-50'>
                    <p className='font-light text-accent mb-4'>Skills</p>
                    <div className='flex flex-row h-auto w-auto'>
                        <ul>
                            <li className="pb-1 md:pb-4 overflowLanding">HTML/CSS</li>
                            <li className="overflowLanding">JavaScript</li>
                        </ul>
                        <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                        <ul>
                            <li className="pb-1 md:pb-4 overflowLanding">React/Vue</li>
                            <li className="overflowLanding">Tailwind</li>
                        </ul>
                        <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                        <ul>
                            <li className="pb-1 md:pb-4 overflowLanding">API/SDK</li>
                            <li className="overflowLanding">NoSQL</li>
                        </ul>
                        <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                        <ul>
                            <li className="pb-1 md:pb-4 overflowLanding">Photoshop</li>
                            <li className="overflowLanding">Salesforce</li>
                        </ul>
                    </div>
                </div>
                </div>
                <MouseParallaxChild factorX={-0.2} factorY={-0.2} className='absolute top-0 left-0'>
                    <img src={landingBack} className='w-screen scale-[550%] sm:scale-[300%] md:scale-[200%] lg:scale-150 z-10 opacity-10' />
                </MouseParallaxChild>
                <div className="absolute z-20 bg-white h-40 w-screen shadow-md -bottom-16 sm:-bottom-28 scale-[200%] rotate-[172deg] right-0"></div>
                <div className="absolute z-20 bg-accent h-20 w-screen shadow-md bottom-14 sm:bottom-2 scale-[200%] rotate-[178deg] right-0"></div>
                <div className="absolute z-40 bg-deep h-40 w-screen shadow-md -bottom-20 sm:-bottom-32 scale-[200%] rotate-[175deg] right-0"></div>
                <MouseParallaxChild factorX={0.5} factorY={0.3} className='absolute bottom-14 sm:bottom-4 right-0 md:right-4 lg:right-6 z-30'>
                    <img src={meBack} className='scale-[98%] w-[24rem] md:w-[28rem] 2xl:w-[32rem] z-30' />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={1} factorY={0.6} className='absolute bottom-14 sm:bottom-4 right-0 md:right-4 lg:right-6 z-50'>
                    <img src={me} className='w-[24rem] md:w-[28rem] 2xl:w-[32rem] z-50' />
                </MouseParallaxChild>
            </div>
        </MouseParallaxContainer>
    )
}

export default Landing