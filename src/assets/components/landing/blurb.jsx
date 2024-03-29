import twitter from '../../static/twitter.png'
import github from '../../static/github.png'
import CV from '../../static/CV.pdf'

export default function Blurb() {

    const CloudButtons = () =>
    <div className='flex top-4 md:relative md:flex flex-col-reverse lg:ml-3 md:max-w-none max-w-lg w-full md:flex-row mb-2 md:mb-0'>
        <div className='flex flex-row'>
            <a href={CV} target="_blank" className='rounded-full hover:shadow-md w-full md:w-60 h-12 bg-deep bg-opacity-80 hover:bg-opacity-100 uppercase font-body text-lg md:text-2xl font-light text-accent flex justify-center items-center hover:cursor-pointer'>resume</a>
            <a href="mailto:thomasross.vasquez@gmail.com" className='rounded-full hover:shadow-md w-full md:w-60 h-12 bg-transparent ml-2 md:ml-4 hover:bg-white hover:bg-opacity-20 border-white border-opacity-40 border-2 uppercase font-body text-lg md:text-2xl font-light text-white flex justify-center items-center hover:cursor-pointer'>email me</a>
        </div>
        <div className='flex flex-row w-full mb-4 mt-2 md:mt-0 md:mb-0'>

            <a href='https://github.com/rossvasquez' target='_blank' className='md:block hidden'>
                <img src={github} className='opacity-80 hover:opacity-100 hover:cursor-pointer ml-4 h-16 md:h-12 w-auto' />
            </a>
            <a href='https://twitter.com/quezdevelops' target='_blank' className='md:block hidden'>
                <img src={twitter} className='opacity-80 hover:opacity-100 hover:cursor-pointer ml-4 h-16 md:h-12 w-auto' />
            </a>

            <a href='https://github.com/rossvasquez' target="_blank" className='block md:hidden rounded-full hover:shadow-md w-full h-12 bg-white hover:bg-opacity-100 uppercase font-body text-lg md:text-2xl font-light text-[#000000] flex justify-center items-center hover:cursor-pointer'>Github</a>
            <a href='https://twitter.com/quezdevelops' target="_blank" className='block md:hidden rounded-full ml-2 md:ml-4 hover:shadow-md w-full h-12 bg-[#1DA1F2] hover:bg-opacity-100 uppercase font-body text-lg md:text-2xl font-light text-white flex justify-center items-center hover:cursor-pointer'>twitter</a>
        </div> 
    </div>

    const NameOcc = () =>
    <div className='mt-[5%] md:mt-4'>
    <h1 className='relative z-50 font-header w-full md:text-left text-center text-6xl md:text-7xl lg:text-9xl font-bold uppercase text-accent shadowTitleSmall md:shadowTitle -mt-2 md:mt-6 lg:mt-0.5'>Ross Vasquez</h1>
    <h2 className="relative w-full md:text-left text-center z-50 font-header font-sans text-2xl xs:text-3xl md:text-5xl mt-2 sm:mt-1 font-semibold text-white tracking-wider uppercase shadowJobSmall md:shadowJob">Software Developer</h2>
    </div>

    const Skills = () =>
    <div className='bg-deep relative py-4 rounded-xl shadow-md h-auto w-min px-6 flex flex-col font-body mt-3 md:mt-6 uppercase text-xl md:text-3xl shadowSkills text-white z-50'>
            <p className='font-header text-accent mb-3 hidden md:block'>Skills</p>
            <div className='hidden xl:flex flex-row h-auto w-auto'>
                <ul>
                    <li className="pt-1 pb-2 overflowLanding">HTML/CSS</li>
                    <li className="pb-1 overflowLanding">JavaScript</li>
                </ul>
                <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                <ul>
                    <li className="pt-1 pb-2 overflowLanding">React/Vue</li>
                    <li className="pb-1 overflowLanding">Tailwind</li>
                </ul>
                <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                <ul>
                    <li className="pt-1 pb-2 overflowLanding">API/SDK</li>
                    <li className="pb-1 overflowLanding">PostgreSQL</li>
                </ul>
                <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                <ul>
                    <li className="pt-1 pb-2 overflowLanding">Photoshop</li>
                    <li className="pb-1 overflowLanding">Salesforce</li>
                </ul>
            </div>
            <div className='flex xl:hidden w-auto justify-center flex-row h-auto'>
                <ul>
                    <li className="pb-2 overflowLanding">HTML/CSS</li>
                    <li className="pb-2 overflowLanding">JavaScript</li>
                    <li className="pb-2 overflowLanding">React/Vue</li>
                    <li className="overflowLanding">Tailwind</li>
                </ul>
                <div className='h-auto w-[.05rem] opacity-60 bg-accent ml-5 mr-6'></div>
                <ul>
                    <li className="pb-2 overflowLanding">API/SDK</li>
                    <li className="pb-2 overflowLanding">PostgreSQL</li>
                    <li className="pb-2 overflowLanding">Photoshop</li>
                    <li className="overflowLanding">Salesforce</li>
                </ul>
            </div>
    </div>

    return(
        <div className='flex justify-center items-center md:items-none md:justify-none flex-col relative w-auto md:block lg:mt-6 md:ml-4 z-0'>
            <CloudButtons />
            <NameOcc />
            <Skills />
        </div>
    )
}