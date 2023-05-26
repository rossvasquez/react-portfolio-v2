import landingBack from '../../static/landingBack.png'
import me from '../../static/me.png'
import meBack from '../../static/meBack.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


function Landing() {

    const Divider = () =>
    <div className="h-full w-[.1rem] bg-shallow"></div>

    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave={true} className='relative h-screen w-screen'>
            <div className="relative p-4 h-screen w-screen bg-shallow overflow-hidden z-0">
                <MouseParallaxChild factorX={0.4} factorY={0.8} className='relative z-30'>
                    <h1 className='relative z-20 font-header w-screen text-6xl pl-1 sm:pl-0 md:text-8xl lg:text-9xl font-bold uppercase text-accent shadowTitleSmall md:shadowTitle'>Ross Vasquez</h1>
                    <h2 className="relative z-20 font-header font-sans text-2xl xs:text-3xl md:text-5xl mt-2 xs:mt-1 sm:mt-0 font-semibold text-white tracking-wider uppercase pl-1.5 xs:pl-1 shadowJobSmall md:shadowJob">Software Developer</h2>
                <div className='relative z-20 py-2 h-auto w-fit flex flex-row font-body mt-6 pl-1.5 sm:pl-3 uppercase text-2xl font-bold shadowSkills text-white z-30'>
                    <ul>
                        <li className="pb-1 md:pb-2 overflowLanding">HTML/CSS</li>
                        <li className="pb-1 md:pb-2 overflowLanding">JavaScript</li>
                        <li className="pb-1 md:pb-2 overflowLanding">React/Vue</li>
                        <li className="pb-1 md:pb-2 overflowLanding">Tailwind</li>
                    </ul>
                    <div className='h-auto w-[.1rem] bg-deep ml-5 mr-6'></div>
                    <ul>
                        <li className="pb-1 md:pb-2 overflowLanding">API/SDK</li>
                        <li className="pb-1 md:pb-2 overflowLanding">NoSQL</li>
                        <li className="pb-1 md:pb-2 overflowLanding">Photoshop</li>
                        <li className="pb-1 md:pb-2 overflowLanding">Salesforce</li>
                    </ul>
                </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.2} factorY={0.2} className='absolute top-0 left-0'>
                    <img src={landingBack} className='w-screen scale-[550%] sm:scale-[300%] md:scale-[200%] lg:scale-150 z-10 opacity-10' />
                </MouseParallaxChild>
                <div className="absolute z-20 bg-white h-40 w-screen shadow-md -bottom-16 sm:-bottom-28 scale-[200%] rotate-[172deg] right-0"></div>
                <div className="absolute z-20 bg-accent h-20 w-screen shadow-md bottom-14 sm:bottom-2 scale-[200%] rotate-[178deg] right-0"></div>
                <div className="absolute z-20 bg-deep h-40 w-screen shadow-md -bottom-20 sm:-bottom-32 scale-[200%] rotate-[175deg] right-0 z-30"></div>
                <MouseParallaxChild factorX={0.5} factorY={0.3} className='absolute bottom-14 sm:bottom-1 right-0 md:right-6 lg:right-24 xl:right-32 z-20'>
                    <img src={meBack} className='scale-[98%] w-[24rem] md:w-[28rem] 2xl:w-[32rem]' />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={1} factorY={0.6} className='absolute bottom-14 sm:bottom-1 right-0 md:right-6 lg:right-24 xl:right-32 z-40'>
                    <img src={me} className='w-[24rem] md:w-[28rem] 2xl:w-[32rem]' />
                </MouseParallaxChild>
            </div>
        </MouseParallaxContainer>
    )
}

export default Landing