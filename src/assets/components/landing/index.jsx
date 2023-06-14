import landingBack from '../../static/landingBack.png'
import me from '../../static/me.png'
import meBack from '../../static/meBack.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Blurb from './blurb';


function Landing() {

    const Background = () =>
    <MouseParallaxChild factorX={-0.2} factorY={-0.2} className='absolute top-40 left-0'>
        <img src={landingBack} className='w-screen scale-[500%] sm:scale-[300%] md:scale-[200%] lg:scale-150 z-10 opacity-10' />
    </MouseParallaxChild>

    const BottomDivs = () =>
    <>
        <div className="absolute z-20 bg-white h-40 w-screen shadow-md -bottom-16 sm:-bottom-28 scale-[200%] rotate-[172deg] right-0"></div>
        <div className="absolute z-20 bg-accent h-20 w-screen shadow-md bottom-14 sm:bottom-2 scale-[200%] rotate-[178deg] right-0"></div>
        <div className="absolute z-40 bg-deep h-40 w-screen shadow-md -bottom-20 sm:-bottom-32 scale-[200%] rotate-[175deg] right-0"></div>
    </>

    const MyImage = () =>
    <>
    <MouseParallaxChild factorX={0.5} factorY={0.3} className='absolute bottom-4 right-1 md:right-4 lg:right-6 z-30'>
        <img src={meBack} className='scale-[98%] w-[24rem] md:w-[28rem] 2xl:w-[32rem] z-30' />
    </MouseParallaxChild>
    <MouseParallaxChild factorX={1} factorY={0.6} className='absolute bottom-4 right-1 md:right-4 lg:right-6 z-40'>
        <img src={me} className='w-[24rem] md:w-[28rem] 2xl:w-[32rem] z-50' />
    </MouseParallaxChild>
    </>

    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave={true} className='relative h-screen w-screen'>
            <div className="relative p-2 md:p-4 h-auto min-h-[100vh] w-screen bg-gradient-to-bl from-deep via-shallow to-shallow">
                <Background />
                <Blurb />
                <BottomDivs />
                <MyImage />
            </div>
        </MouseParallaxContainer>
    )
}

export default Landing