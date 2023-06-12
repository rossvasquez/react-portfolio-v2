import projectInfo from '../../info/projects'
import { useState, useRef } from 'react'

function Cards() {

    const [ ShowProject, setShowProject ] = useState(5)

    const top = useRef(null);

    async function scrollNGo(i) {
        const rect  = top.current.getBoundingClientRect()
        const newToppa = rect.top - 6
        window.scrollTo({ 
            top: window.scrollY + newToppa,
            behavior: 'smooth' 
        });
        setShowProject(i);

    }

    const MappedProj = () =>
    projectInfo.map((item, i) => 
        <div key={i} className='flex flex-col p-3 md:p-4 justify-center items-center h-auto w-auto rounded-md shadow-md bg-shallow hover:shadow-xl'>
            <div className='relative h-full w-full pb-14'>
                <img className='h-auto w-full rounded-md mb-3 md:mb-4' src={item.image} />
                <div className='h-auto w-auto bg-deep rounded-lg shadow-inner'>
                    <p className='px-4 w-full text-center pt-4 text-4xl text-white uppercase font-body font-semibold tracking-wide'>{item.name}</p>
                    <div className='h-[.05rem] bg-accent mt-4 opacity-80'></div>
                    <p className='px-4 w-full text-center text-2xl text-white font-body mt-4 pb-4'>{item.description}</p>
                <div className='flex flex-row flex-wrap justify-center items-center w-11/12 mx-auto h-auto mb-5 md:mb-6 pb-4'>
                    {item.tech.map((item, i) =>
                        <div key={i} className='flex flex-row items-center rounded-full py-1 px-2 bg-shallow w-auto my-2 mx-1 shadow-md'>
                            <div className='w-9 h-9 overflow-hidden flex justify-center items-center rounded-full bg-transparent'>
                                <img src={item.logo} className='h-3/5 w-auto'/>
                            </div>
                            <p className='pl-1 pr-2 text-white font-body text-sm'>{item.name}</p>
                        </div>
                    )}
                </div>
                </div>
                <div onClick={() => scrollNGo(i)} className='absolute bottom-0 w-full h-16 rounded-md bg-accent flex justify-center items-center text-2xl text-deep font-body font-light uppercase hover:cursor-pointer hover:border border-white'>learn more</div>
            </div>
        </div>

    )

    const AllProj = () =>
    <div ref={top} className='relative h-full w-full grid grid-cols-1 px-4 md:grid-cols-2 gap-4 md:gap-4'>
        <MappedProj />
    </div>

    const Zmariks = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Restaurant Site Remodel</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                Upon bringing my catering order application to the attention of my employer, it was well recieved.
                However, while the application would be a great addition to business processes, ownership felt a better initial step
                would be first re-designing their website as a whole. Their current website uses a CMS that hasn't recieved support 
                since 2011. They don't have an SSL certificate on the domain, which after recently upgrading their email
                server, doesn't integrate. My mission is to create a modern site that makes customers think less and do more. Once
                the site is completed, I plan to re-write the catering order system into the more modern design.
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                I am utilizng React to write the Front-End. I use React Router with Netlify redirects to
                make the SPA feel natural for users. Common hooks implented in this project are useState, useContext, and useEffect.
                For styling, I am using Tailwind. I am currently using Netlify forms to capture all of the necessary data from the contact page. 
                At the advent of the catering portion, I will have to implent a Supabase DB. Third-party applications that are redirected to
                via user-flows handle most of the data necessary for the Restaurant (Delivery Services, ToastPOS, embedded Google Maps) 
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                <span>
                    The site gives a much more modern feel that is better optimized for mobile as well as general use. Previously, ordering pickup or catering
                    brought users to genralized web locations where users still had to refine pages to their preffered location and service. With the new order
                    functionality, users can follow an easy flow that sends them directly to what they desire.
                </span>
                <br></br><br></br>
                <span>
                    The rewards section of the site is much more personal, it now provides clear information regarding the rewards system as well
                    as clear action buttons that allow users to focus on their goal rather than focusing on where they need to go to do that.
                </span>
                <br></br><br></br>
                <span>
                    The locations section of the site provides intuitive direction, whether being able to click the phone numbers from mobile
                    to immediately call the store. Or the intuitive maps feature that opens a Google Map embed that immediately provides the user
                    both the address and the ability to see what it is near. On mobile users can immediately open directions in the Google Maps
                    app.
                </span>
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <a href='https://cute-faloodeh-6ba98e.netlify.app' target='_blank'><div className='w-full h-16 bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div></a>
                <a href='https://github.com/rossvasquez/zmariks-site-redesign' target='_blank'><div className='w-full h-16 bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
            </div>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>

    const Hent = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Foundation Site</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                After losing a longtime friend and teammate to Marfan Syndrome I saw an opportunity
                to both relieve some of the stress of those grieveing and put my passion/skills into something real. The family
                wanted a foundation site that serves as a place to stay up to date on foundation news, shop for foundation products,
                view foundation events, and have donation capabilties.
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                The foundation site utilizes React and Tailwind on the frontend. I am using React Router with Netlify redirects to
                simulate traditional multi-page functionality. Utilizing Supabase, I have created various PostgreSQL tables for data storage
                as well as buckets for image storage. Employing the API offerings of Printify, PayPal, EmailJS, and Eventbrite I have been able meet
                project requirements. Since Supabase offers RLS, I call on it directly from the client with useEffect. To safely use the other API integrations,
                I have created Netlify Functions (AWS Lambda) with NodeJS to gather data and then hit the endpoints from the client. Utilzing supabase I have captured
                information at the transaction of most features to store data and make it viewable from the Admin Area. I also implemented the ability to create
                blog posts that include images as well as hot links via LinkifyJS. EmailJS has provided the capability to send templated Email's to users, highlighted
                in the donation section, where in conjuction with PDF-Lib; emails are sent with Reciepts of Charitable Donation in comliance with Federal Regulations.
                <br></br><br></br>
                
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                <span>
                    The site hits all of the requirements. Currently it is password protected (mhf2023$) and without PayPal so features can be tested. I think
                    the coolest feature is the donation flow and the email/recepit generation from user info.
                    I am currently resolving some API issues with Printify relating to the abilities of their Web Front to publish products. They make it
                    so that if you GET product data and POST orders via API (using PayPal to capture payment), you revoke the ability to publish products
                    from Prinify's Web Front Catalog, they get stuck with status publishing, yet are still readable via API. Rather than re-build Printify in the Admin Area via endpoints, I believe
                    I have procurred a solution. I will create a Lambda that triggers when products are added, checks product status, pulls product info if status is publishing,
                    and finally uses the publish endpoint. Why, why can't their publish button just do this? Ah well, guess that's how it goes in this realm. 
                </span>
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <a href='https://www.michaelhenterfoundation.org' target='_blank'><div className='w-full h-16 bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div></a>
                <a href='https://github.com/rossvasquez/mh-foundation-react' target='_blank'><div className='w-full h-16 bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
            </div>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>

    const Wallet = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Mobile Coupon Wallet</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>Create a kick ass website</p>
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>Utilized React and Tailwind to build the application. Hosted it on Netlify. Purchased Google Domain.</p>
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Solution</p>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>

    const Catering = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Catering Order System</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>Create a kick ass website</p>
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>Utilized React and Tailwind to build the application. Hosted it on Netlify. Purchased Google Domain.</p>
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Solution</p>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>


    return(
        <>
        {ShowProject === 5 ? <AllProj /> : null}
        {ShowProject === 0 ? <Zmariks /> : null}
        {ShowProject === 1 ? <Hent /> : null}
        {ShowProject === 2 ? <Wallet /> : null}
        {ShowProject === 3 ? <Catering /> : null}
        </>
    )
}

export default Cards