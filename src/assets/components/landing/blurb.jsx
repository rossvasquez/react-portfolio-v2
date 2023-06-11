import twitter from '../../static/twitter.png'
import github from '../../static/github.png'

export default function Blurb() {

    const CloudButtons = () =>
    <div className='flex flex-row'>
        <div className='rounded-full hover:shadow-md w-60 h-12 bg-deep bg-opacity-80 hover:bg-opacity-100 uppercase font-body text-2xl font-light text-accent flex justify-center items-center hover:cursor-pointer'>download cv</div>
        <a href="mailto:thomasross.vasquez@gmail.com" className='rounded-full hover:shadow-md w-60 h-12 bg-transparent ml-4 hover:bg-white hover:bg-opacity-20 border-white border-opacity-40 border-2 uppercase font-body text-2xl font-light text-white flex justify-center items-center hover:cursor-pointer'>email me</a>
        <a href='https://github.com/rossvasquez' target='_blank'>
            <img src={github} className='opacity-80 hover:opacity-100 hover:cursor-pointer ml-4 h-12 w-auto' />
        </a>
        <a href='https://twitter.com/quezdevelops' target='_blank'>
            <img src={twitter} className='opacity-80 hover:opacity-100 hover:cursor-pointer ml-4 h-12 w-auto' />
        </a>
    </div>

    const NameOcc = () =>
    <>
    <h1 className='relative z-50 font-header w-screen text-6xl pl-1 sm:pl-0 md:text-8xl lg:text-9xl font-bold uppercase text-accent shadowTitleSmall md:shadowTitle mt-0.5'>Ross Vasquez</h1>
    <h2 className="relative z-50 font-header font-sans text-2xl xs:text-3xl md:text-5xl mt-2 xs:mt-1 sm:mt-1 font-semibold text-white tracking-wider uppercase pl-1.5 xs:pl-1 shadowJobSmall md:shadowJob">Software Developer</h2>
    </>

    const Skills = () =>
    <div className='bg-deep bg-opacity-80 relative p-4 rounded-xl shadow-lg h-auto w-fit flex flex-col font-body ml-1 mt-6 uppercase text-4xl font-bold shadowSkills text-white z-50'>
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

    return(
        <div className='relative mt-6 ml-4'>
            <CloudButtons />
            <NameOcc />
            <Skills />
        </div>
    )
}