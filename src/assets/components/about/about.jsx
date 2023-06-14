import { useState, useRef } from "react"

export default function About() {

    const [AboutIndex, setAboutIndex] = useState(0)
    const [LongIndex, setLongIndex] = useState(1)
    const [IsShort, setIsShort] = useState(true)
    const [Fade, setFade] = useState(false)

    const topOfCard = useRef(null)
    const short = useRef(null)

    const aboutLength = () => {
        if (IsShort) {
            const deez = short.current;
            setIsShort(false);
            setAboutIndex(LongIndex);
            deez.className += ' transform translate-x-[6.45rem]';
        } else {
            const deez = short.current;
            setIsShort(true);
            setAboutIndex(0);
            deez.className += 'transform -translate-x-0';
        }
    }

    const incrementAbout = () => {
        if (AboutIndex < 12) {
            let count = AboutIndex
            count++
            topOfCard.current.scrollIntoView({ behavior: 'smooth' })
            setAboutIndex(count)
            setLongIndex(count)
        }

        if (AboutIndex === 11) {
            setTimeout(function() {
                setFade(true);
            }, 7000)
        }
    }

    const decrementAbout = () => {
        if (AboutIndex > 1) {
            let count = AboutIndex
            count--
            topOfCard.current.scrollIntoView({ behavior: 'smooth' })
            setAboutIndex(count)
            setLongIndex(count)
        }

        if (AboutIndex === 12) {
            setFade(false)
        }
    }


    return(
        <div className="relative w-screen h-auto bg-deep">
            <div className="w-screen max-w-7xl h-auto mx-auto pb-10 px-2">
                <div className="relative justify-center items-center flex flex-col md:flex-row w-full h-auto pb-24 md:pb-0">
                    <p className="pt-5 pb-8 text-accent w-full pl-0 md:pl-8 text-center md:text-left text-5xl md:text-7xl font-bold font-header shadowSection uppercase">About Me</p>
                    <div className="flex flex-row absolute shadow-inner md:right-6 w-auto p-1 h-16 rounded-full bg-shallow bottom-8">
                        <div ref={short} className="transistion ease-in-out duration-300 absolute h-[3.5rem] rounded-full w-[7.5rem] bg-deep left-1"></div>
                        {IsShort ?
                            <>
                                <div className="z-50 pl-2 w-28 flex justify-center items-center rounded-full h-full uppercase font-body text-xl text-accent"><span>short</span></div>
                                <div onClick={() => aboutLength()} className="pr-2 hover:cursor-pointer transistion ease-in-out duration-300 hover:scale-110 w-28 flex justify-center items-center rounded-full h-full bg-transparent uppercase font-body text-xl text-accent">long</div>
                            </>
                        :
                            <>
                                <div onClick={() => aboutLength()} className="pl-2 transistion ease-in-out hover:cursor-pointer duration-300 hover:scale-110 w-28 flex justify-center items-center rounded-full h-full bg-transparent uppercase font-body text-xl text-accent">short</div>
                                <div className="z-50 pr-2 w-28 flex justify-center items-center rounded-full h-full uppercase font-body text-xl text-accent"><span>long</span></div>
                            </>
                        }
                    </div>
                    
                </div>
                <div ref={topOfCard} className="relative h-auto w-full bg-shallow shadow-lg rounded-lg pb-[7.8rem] pt-2 md:pt-6 px-2 md:px-6">
                    {AboutIndex === 0 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 -mb-[7.2rem] md:-mb-[6.2rem] rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            Software Developer currently residing in Iowa City, IA. I am a <span className="font-header -mx-1 text-accent">passionate problem solver</span> who enjoys leveraging web
                            technology to create user experiences that make life easier. I am a Certified Salesforce Administrator whose interest in
                            Salesforce-to-Web led to me finding my purpose in <span className="font-header -mx-1 text-accent">Web Development</span>. I previously attended The Tippie College of Business, studying Marketing
                            Analytics before deciding to instead pursue a career in tech. When I'm not working as a manager at the local restaurant I've
                            been with for almost five years, I'm either coding or spending time with <span className="font-header -mx-1 text-accent">my girlfriend</span>. I've enjoyed <span className="font-header -mx-1 text-accent">Golf</span> my whole life and love
                            to play pick-up basektball.
                        </p> : 
                        null
                    }

                    {AboutIndex === 1 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            Born in Des Moines, Iowa in 1999. I've grown up with an <span className="font-header -mx-1 text-accent">adoration for technology</span>. Having only known a life with computers, I cherish the unique experience to have grown up alongside the tech boom. From
                            Kindergarten; playing pixelated games on my Mom's 1st Gen iPod Mini, to Sixth Grade; unboxing the iPod Touch. Being able to experience and learn
                            in a <span className="font-header -mx-1 text-accent">significant period of hardware evolution</span> is no doubt, the basis for my relationship with one's and zero's.
                        </p> : 
                        null
                    }

                    {AboutIndex === 2 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            There was always a voice in my head that told me <span className="font-header -mx-1 text-accent">software development is my passion</span>. From an introduction to command line control setting up Minecraft Servers
                            in midddle school to building out Shopify stores later in High School. I decided, however, to pursue a business degree. It was what succesful people in
                            my life had. I figured, as a direct admit to the Henry B. Tippie College of Business, declaring Marketing Analytics as my major would expose
                            me to coding. 
                            <br></br><br></br>
                            I quickly found confliction in my initial experience with college. <span className="font-header -mx-1 text-accent">I miscalculated the college experience</span>, I didn't understand what a Gen Ed was until I was sitting in it. In my head all along, I assumed
                            I was coming to participate in grandiose experiential learning and was going to learn how to build fantastic businesses,
                            learning some code along the way so I could bootstrap something. I ended up leaving Iowa City after a year and a half.
                        </p> : 
                        null
                    }

                    {AboutIndex === 3 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            Coming back to Des Moines, I was fortunate to recieve a managerial position at a popular local restaurant. Taking on a <span className="font-header -mx-1 text-accent">leadership role</span> would lay a seed 
                            that grew my work ethic. I was able to learn a lot about myself, and others through this opportunity. Managing a kitchen staff composed of
                            primarily immigrants who would work two jobs, 8:00AM-8:00PM, six days a week, <span className="font-header -mx-1 text-accent">permanently changed my outlook on the world</span>. It's humbling
                            to hear someone remincise on fishing with yarn and a wooden spindle to eat, as they happily work a 72 hour work week for the wellbeing and future of their children.
                        </p> : 
                        null
                    }

                    {AboutIndex === 4 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            In Des Moines, work primarily took up my time. I took a few classes at DMACC that revolved around <span className="font-header -mx-1 text-accent">technology</span>. An Intro to Photoshop class refined
                            my passion for its capabilities I had exercised since High School. An Intro to HTML/CSS class taught barebones frontend design (some really
                            gross looking websites). And an Intro to Wordpress class that exposed me to the capabilities of a CMS beyond Shopify.
                        </p> : 
                        null
                    }

                    {AboutIndex === 5 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            I <span className="font-header -mx-1 text-accent">regretably</span> didn't maximize my pursuit of software development during this time. I was still beating myself up over not suceeding at University. The world was quickly
                            thrown a curveball in COVID-19. This time away from work, stuck inside, made me <span className="font-header -mx-1 text-accent">reflect</span>. I decided I wanted to go back to Iowa City that Fall,
                            I didn't see many other ways forwards outside of college. Coincidentally, the restaurant I work at had another one of it's three locations positioned 400 yards
                            from University property.
                        </p> : 
                        null
                    }

                    {AboutIndex === 6 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            I ended up going to Kirkwood Community College for a year to take transferable business credits and earn my re-entry to the business school. I was re-admitted
                            in the Fall of 2021. This is the same time I met <span className="font-header -mx-1 text-accent">my girlfriend</span>, Brynn, my love and support system who cheers me on unconditionally. During the Spring semester, 
                            while I was taking a Tippie class on the essentials of Microsoft Office, I used my time outside of class to learn how to create basic applications in Python via the Kivy framework. 
                            It <span className="font-header -mx-1 text-accent">re-sparked my interest in Tech</span> and resulted in me applying to some SE apprenticeship cohorts with Google, to no avail.
                        </p> : 
                        null
                    }

                    {AboutIndex === 7 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            That summer I weighed my options in college and <span className="font-header -mx-1 text-accent">pursuing a career in my passion of Tech</span>. Option one was change my major to computer science, effectively
                            restarting my college career as if the groundhog didn't see it's shadow. Option two was attend a coding bootcamp. Previously, I had weighed
                            this option. However, I drew the same conclusions as before, it was a diluted market, how could I trust the investment when I'm not sure if companies will?
                            Option three was obtaining a certification in my newly discoverd niche that seemed like a fast track to tech, <span className="font-header -mx-1 text-accent">Salesforce</span>.
                        </p> : 
                        null
                    }

                    {AboutIndex === 8 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            I decided I was going to study for and complete my <span className="font-header -mx-1 text-accent">Salesforce Administrator Certification</span> instead of attending classes in the Fall. From there, per the certification
                            roadmap that Salesforce provides, I could follow up the certification with Application Builder, APEX Developer, and Javascript Developer certifications. My long term
                            fantasy in my mind was that I would get into tech by being a Salesforce Administrator, pivot to Salesforce Development, and then pivot out of Salesforce sometime in my
                            early 30s to finally become an agnostic Software Developer. I <span className="font-header -mx-1 text-accent">studied for and obtained</span> my Administrator Certification in December of that year.
                        </p> : 
                        null
                    }

                    {AboutIndex === 9 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            On Thanksgiving of that same year, I had the honor of meeting my girlfriend's uncle whom is a principle engineer at a company in Washington D.C. We ended up talking all
                            night, no one else was mildly interested in our tech jargon. I told him about my <span className="font-header -mx-1 text-accent">Salesforce plan</span> and let my endless curiosity flow as he patiently
                            answered all of my questions about web development. In the end, he challenged me: "You want to create, you get excited talking about development,
                            why does Salesforce have to lead you there? <span className="font-header -mx-1 text-accent">Why not just jump right into web development?</span>". Whilst deep down that's exactly what I wanted, I couldn't
                            give up on Salesforce yet. I continued to familiarize myself with the Salesforce eocsystem via Trailhead, and passed the exam on my first attempt. Never
                            forgetting the conversation along the way.
                        </p> : 
                        null
                    }

                    {AboutIndex === 10 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            After perusing job boards for positions related to my Salesforce certification, I found that <span className="font-header -mx-1 text-accent">some positions entailed web development</span>, preffering
                            a skillset of HTML/CSS/JavaScript. After being told I should learn these exact technologies, and combined with seeing their value, I decided
                            I was going to add these skills to my repotoire to land a job. <span className="font-header -mx-1 text-accent">I went BIG</span>. I identified a problem present at the restaurant
                            I currently worked at. I decided a Catering Order System, something that was being done virtually analogously, would give me an end goal wherein
                            I could learn along the way in pursuit of building out my vision. 
                        </p> : 
                        null
                    }

                    {AboutIndex === 11 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            Immediately diving in, the initial stack was going to be comprised of HTML/CSS/JavaScript with Salesforce API as a backend. I quickly
                            found myself <span className="font-header -mx-1 text-accent">working harder for something than I ever had in my life</span>. I completely fell in love with the development process. Along the way,
                            I realized how creating a back-end beyond Salesforce was going to result in a much better product. I switched over to Firebase, building out a fully responsive,
                            multi-page, e-commerce style order system that accounts for custom specifications. Seeing I was capable of building something complex, that solves business
                            problems and leverages web tech <span className="font-header -mx-1 text-accent">filled me with more purpose than I have ever felt in my life</span>. From that point
                            on, I've been on a runaway train through the world of web development, enjoying every step of the journey.
                        </p> : 
                        null
                    }

                    {AboutIndex === 12 ? 
                        <p className="shadow-md py-2 px-4 md:px-8 rounded-md bg-deep bg-opacity-40 leading-loose md:leading-[3.2rem] text-2xl md:text-3xl font-body text-white text-left">
                            While still currently managing at the local restaurant, virtually all of my free time is and has been spent on refining my <span className="font-header -mx-1 text-accent">knowledge and proficiencies</span> in
                            web development. It doesn't feel at all like work, I have truly found my passion. Being able to craft applications that others can
                            interact with is extremly fulfilling to me. With my girlfriend finishing up her degree at Iowa this summer, we're <span className="font-header -mx-1 text-accent">preparing to make a leap</span>. I am
                            also prepared to make my own leap, transferring the time and energy I put into my current role at the restaurant, to instead practice my passion profesionally. 
                            Feeling better than ever, 
                            {Fade ?
                            <span className="font-header -mx-1 text-accent tranistion-opacity ease-in duration-300 opacity-100"> I am ready to take on the challenges of a full-time position.</span>
                            :
                            <span className="font-header -mx-1 text-accent tranistion-opacity ease-in duration-300 opacity-0"> I am ready to take on the challenges of a full-time position.</span>
                            }  
                        </p> : 
                        null
                    }

                    {AboutIndex > 0 ?
                        <div className="absolute bottom-6 left-0 rounded-b-lg h-20 w-full flex flex-row">
                            <div className="relative flex items-center w-5/12 h-full">
                                {AboutIndex > 1 ? <button onClick={() => decrementAbout()} className="absolute right-4 h-9 w-9 text-white text-opacity-70 rounded-full hover:cursor-pointer hover:text-deep hover:bg-opacity-90 hover:bg-accent flex justify-center items-center text-6xl pb-[.8rem] font-body">-</button> : null}
                            </div>
                            <div className="w-1/3 md:w-1/6 mx-auto h-full rounded-lg shadow-inner bg-deep flex justify-center items-center text-4xl text-opacity-70 font-header text-white">{AboutIndex} / 12</div>
                            <div className="relative flex items-center w-5/12 h-full">
                                {AboutIndex < 12 ? <button onClick={() => incrementAbout()} className="absolute left-4 h-9 w-9 text-white text-opacity-70 rounded-full hover:cursor-pointer hover:text-deep hover:bg-opacity-90 hover:bg-accent flex justify-center items-center text-4xl pb-1.5 font-header">+</button> : null}
                            </div>
                        </div> :
                        null}
                </div>
            </div>
        </div>
    )
}