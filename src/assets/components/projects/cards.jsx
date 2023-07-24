import projectInfo from '../../info/projects'
import { useState, useRef } from 'react'
import qr from '../../static/qr.png'

function Cards() {

    const [ ShowProject, setShowProject ] = useState(5)
    const [ ShowQR, setShowQR ] = useState(false)

    const top = useRef(null);
    const top2 = useRef(null);

    async function scrollNGo(i) {
        setShowProject(i);
        const rect  = top.current.getBoundingClientRect()
        const newToppa = rect.top - 6
        window.scrollTo({ 
            top: window.scrollY + newToppa,
            behavior: 'instant' 
        });

    }

    async function scrollNGo2() {
        const rect  = top2.current.getBoundingClientRect()
        const newToppa = rect.top - 6
        window.scrollTo({ 
            top: window.scrollY + newToppa,
            behavior: 'instant' 
        });

        if (ShowQR) {
            setShowQR(false)
        } else {
            setShowQR(true)
        }

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
                <div onClick={() => scrollNGo(i)} className='absolute bottom-0 w-full h-16 rounded-md bg-accent flex justify-center items-center text-[1.8rem] text-deep font-body font-light uppercase hover:cursor-pointer hover:text-[1.82rem] hover:text-shallowb transition-all duration-200 hover:pb-[.1rem] hover:border-2 border-white'>learn more</div>
            </div>
        </div>

    )

    const AllProj = () =>
    <div ref={top} className='relative h-full w-full grid grid-cols-1 px-4 md:grid-cols-2 gap-4 md:gap-4'>
        <MappedProj />
    </div>

    const TwoHouses = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>SaaS Landing Page</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                After working in the restaurant industry for over five years I was able to identify some pain points
                that existed in various processes. One of these was employee managemnt. There are management services that exist but I believe they don't
                encompass as much as they should. My goal is to make a comprehensive web app that allows for a central employee portal, compatible with all
                restaurants, and scalable in a franchise environment. The first step is generating interest and gathering feedback to better
                understand customers.
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                I am utilizng React to write the Front-End. For styling, I am using Tailwind. The Noun Project and Midjourney are my source of assets.
                EmailJS allows me to write an HTML/CSS email that can be triggered from events on the Front-End. Supabase stores entered addresses to harbor
                a list for future communications. Mailchimp is where the survey and associated data is hosted
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                I believe the site does well to attract, inform, and convert. I am slowly bringing exposure to it's existence. I am planning a cold outreach
                via Mailchimp campaign and Twitter DMs/Ads.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <a href='https://2houses.netlify.app' target='_blank'><div className='w-full h-[4.5rem] bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div></a>
                <a href='https://github.com/rossvasquez/2Houses' target='_blank'><div className='w-full h-[4.5rem] bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
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
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                <span>
                    The site hits all of the requirements. I think
                    the coolest feature is the donation flow and the email/receipt generation from user info.
                    I am currently resolving some API issues with Printify relating to the abilities of their Web Front to publish products. They make it
                    so that if you GET product data and POST orders via API (using PayPal to capture payment), you revoke the ability to publish products
                    from Prinify's Web Front Catalog, they get stuck with status publishing, yet are still fetchable via API. Rather than re-build Printify in the Admin Area via endpoints, I believe
                    I have procurred a solution. I will create a Lambda that triggers when products are added, checks product status, pulls product info if status is publishing,
                    and finally uses the publish endpoint. Why, why can't their publish button just do this? Ah well, guess that's how it goes in this realm. 
                </span>
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <a href='https://www.michaelhenterfoundation.org' target='_blank'><div className='w-full h-[4.5rem] bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div></a>
                <a href='https://github.com/rossvasquez/mh-foundation-react' target='_blank'><div className='w-full h-[4.5rem] bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
            </div>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>

    const Wallet = () =>
    <div ref={top2} className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            {!ShowQR ?
            <>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Mobile Coupon Wallet</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                This project was a Technical Evaluation for a start up. The task was to create a mobile coupon wallet that had authentication, animation, allowed
                for the coupon to be used once, and was built using Nuxt3 and Tailwind/SASS. It was completed over four days.
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                It was my first time using Vue or Nuxt, I enjoyed the experience of using a framework outside of React. It was also my first time using SCSS which worked well with animation. I utilized Font Awesome to source
                icons per the project requirements. I used Midjourney to render stock photography on the coupons. I created tables in Supabase to store business/coupon data as well as access user info relationally. Supabase Auth allowed me to 
                create easy login/log out functionality as well as protection from unauthorized pages/data.
                
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                The result was a project that meets requirements and one that I am proud of. It works well on mobile and can be used on desktop if necessary. It provides account control in an intuitive interface. Coupons are straightforward
                and dummy QR codes represent real use cases. The animation features of the wallet work well, achieving my initial vision. It was definetly inspired by the Apple Wallet, which I regard as having one of the cleanest UX's
                in the mobile wallet space.
                <br></br><br></br>
                <p className='font-header text-white text-opacity-40 uppercase'>Account Info</p>
                <p className='font-header mb-3 mt-1 text-xl'>tiger@gmail.com<br></br>Gr33nJ@cket</p>
                <p className='font-header my-3 text-xl'>mj23@jumpman.air<br></br>Car0linaBlue!</p>
                <p className='font-header my-3 text-xl'>roger.waters@gmail.com<br></br>Pri$m123</p>
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <div onClick={() => scrollNGo2()} className='w-full h-[4.5rem] bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div>
                <a href='https://github.com/rossvasquez/coupon-wallet-eval' target='_blank'><div className='w-full h-[4.5rem] bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
            </div>

            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
            </>
            :
            <div className='flex items-center justify-center bg-shallow rounded-lg top-0 left-0 z-50 w-full h-full'>
                <div className='relative flex justify-center items-center flex-col w-screen max-w-md mx-auto h-auto'>
                    <p className='text-3xl w-full mt-4 text-white font-body text-center leading-relaxed'>Scan on mobile device for the best experience</p>
                    <div className='flex items-center justify-center w-full px-4 h-auto pt-4 pb-[.2rem] mt-8 rounded-md bg-deep shadow-inner'>
                        <img className='w-full' src={qr} />
                    </div>
                    <p className='text-2xl w-full mt-3 text-white font-body text-center'>or click <a href='https://nuxtwallet.netlify.app' target='_blank' className='text-accent hover:opacity-80 underline'>here</a>.</p>
                    <div onClick={() => scrollNGo2()} className='h-16 w-7/12 mt-12 mb-4 mx-auto bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>close</div>
                </div>
            </div>
            }
        </div>
    </div>

    const Catering = () =>
    <div className='w-auto h-auto px-2'>
        <div className='relative w-full mx-auto h-auto bg-shallow rounded-lg p-4 sm:p-6 shadow-xl'>
            <p className='text-3xl w-3/5 sm:text-5xl uppercase pl-1 text-white font-body'>Catering Order System</p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Mission</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
            Z'Mariks, a fast-casual restaurant located in the heart of Iowa City averages roughly two and a half catering orders per-day. Most of these orders come from University of Iowa Athletic, Academic, or Medical offices. The current system in place for receiving catering orders consists of:
            <br/><br/>
            1. Customer calls the restaurant after being instructed to do so on Z'Mariks website.<br/>
            2. Manager recieves call and instructs customer to send email with catering information.<br/>
            3. Customer sends email with order information.<br/>
            4. Manager hand-writes order information onto Catering Form.<br/>
            5. Manager enters catering information into Point of Sale System on the day of the order.<br/>
            <br/>
            The current methods often require several conversations by phone and e-mail between the customer and the store to achieve a single order. The various aspects of the current methods waste time and energy for both parties.
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Stack</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                To properly learn, I took on this project with only HTML, CSS, and Vanilla Javascript. It utilizes localStorage to track user information
                through the cart and checkout process. Firebase Realtime Database stores data on order completion where it is viewable from an admin dashboard. I wrote
                a boatload of CSS making this responsive as well as building out all of the components, having now used Tailwind, it is tough to look back on.        
            </p>
            <div className='mt-6 w-full h-[.05rem] bg-accent opacity-60' />
            <p className='mt-4 text-white text-opacity-40 text-4xl uppercase font-header pl-1'>Result</p>
            <p className='pl-1 font-body text-2xl text-white mt-1'>
                A full blown e-commerce solution was ultimately achieved. Wanting to take the project to the next level for production, I reached
                out to our Point-of-Sale company, Toast. Unfortunately, the tier our Restuarant is on only grants us read access via their API. This means
                I can't do things I had planned, such as cron-jobs to send orders to the terminals when orders are due. I can still use PDF-Lib to send emails of the order to
                management, but the vision of orders going directly to the POS was largely an aspect of the potential autonomy and ease of this application. When you
                consider things like payment processing and the fact you still have to punch the order in the POS. Regardless, it was a great learning opportunity and 
                good real world practice.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full'>
                <a href='https://catering-order-system-2ae86.web.app/' target='_blank'><div className='w-full h-[4.5rem] bg-accent hover:cursor-pointer hover:border-2 hover:border-white rounded-md flex justify-center items-center font-body text-shallow text-3xl uppercase'>Live Site</div></a>
                <a href='https://github.com/rossvasquez/ecommerce-restaurant-app' target='_blank'><div className='w-full h-[4.5rem] bg-shallow border-2 border-accent rounded-md flex justify-center items-center font-body text-white text-3xl uppercase hover:text-accent hover:cursor-pointer hover:border-none hover:bg-opacity-80 hover:bg-deep'>Repository</div></a>
            </div>
            <div onClick={() => setShowProject(5)} className='absolute right-5 sm:right-7 top-5 w-24 hover:opacity-80 h-14 rounded-md hover:cursor-pointer bg-accent uppercase font-light text-deep text-xl flex justify-center items-center font-body'>Back</div>
        </div>
    </div>


    return(
        <>
        {ShowProject === 5 ? <AllProj /> : null}
        {ShowProject === 0 ? <TwoHouses /> : null}
        {ShowProject === 1 ? <Hent /> : null}
        {ShowProject === 2 ? <Wallet /> : null}
        {ShowProject === 3 ? <Catering /> : null}
        </>
    )
}

export default Cards