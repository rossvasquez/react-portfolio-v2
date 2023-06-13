import { useState, useRef } from "react"

export default function About() {

    const [AboutIndex, setAboutIndex] = useState(0)
    const [LongIndex, setLongIndex] = useState(1)
    const [IsShort, setIsShort] = useState(true)

    const topOfCard = useRef(null)
    const short = useRef(null)

    const aboutLength = () => {
        if (IsShort) {
            const deez = short.current;
            setIsShort(false);
            setAboutIndex(LongIndex);
            deez.className += 'transform translate-x-[6.45rem]';
        } else {
            const deez = short.current;
            setIsShort(true);
            setAboutIndex(0);
            deez.className += 'transform -translate-x-0';
        }
    }

    const incrementAbout = () => {
        if (AboutIndex < 9) {
            let count = AboutIndex
            count++
            topOfCard.current.scrollIntoView({ behavior: 'smooth' })
            setAboutIndex(count)
            setLongIndex(count)
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
                        <p className="shadow-md py-4 px-4 md:px-12 -mb-[7.2rem] md:-mb-[6.4rem] rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            Software Developer currently residing in Iowa City, IA. I am a <span className="text-accent">passionate problem solver</span> who enjoys leveraging web
                            technology to create user experiences that make life easier. I am a Certified Salesforce Administrator whose interest in
                            Salesforce-to-Web led to me finding my purpose in <span className="text-accent">Web Development</span>. I previously attended The Tippie College of Business, studying Marketing
                            Analytics before deciding to instead pursue a career in tech. When I'm not working as a manager at the local restaurant I've
                            been with for almost five years, I'm either coding or spending time with <span className="text-accent">my girlfriend</span>. I've enjoyed <span className="text-accent">Golf</span> my whole life and love
                            to play pick-up basektball.
                        </p> : 
                        null
                    }

                    {AboutIndex === 1 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            Born in Des Moines, Iowa in 1999. I've grown up with an adoration for technology. Having only known a life with computers,
                            albeit monitor sizes measured in cubic inches. I cherish the unique experience to have grown with the exponential tech boom, from
                            Kindergarten; playing pixelated games on my Mom's 1st Gen iPod Mini, to Sixth Grade; unboxing the iPod Touch. Being able to experience and learn
                            in a significant period of hardware evolution is no doubt, the basis for my relationship with 1's and 0's.
                        </p> : 
                        null
                    }

                    {AboutIndex === 2 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            There was always a voice in my head that told me software development was my passion. From an introduction to command line control setting up Minecraft Servers
                            in midddle school to building out Shopify stores later in High School. I decided, however, to pursue a business degree, it was what succesful people in
                            my life had. I figured, as a direct admit to the Henry B. Tippie College of Business, declaring Marketing Analytics as my major would expose
                            me to coding. I quickly found confliction in my initial experience with college. Nobody told me about Gen Eds, in my head all along, I assumed
                            I was coming to participate in grandiose experiential learning and was going to learn how to build fantastic businesses,
                            learning some code along the way so I could bootstrap something. I ended up only lasting a year and a half in Iowa City.
                        </p> : 
                        null
                    }

                    {AboutIndex === 3 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            Coming back to Des Moines, I was fortunate to recieve a managerial position at a popular local restaurant. Working in food service and being given
                            leadership, would lay a seed that grew my work ethic. I also gained a lot of perspective working in a kitchen. Managing a kitchen staff composed of
                            primarily immigrants who would work two jobs, 8:00AM-8:00PM, six days a week, permanetly changed my outlook on the world. It's humbling
                            to hear someone remincise on fishing with yarn and a wooden spindle just so they could eat, as they happily work a 72 hour work week to ensure
                            the wellbeing and bright future of their children.
                        </p> : 
                        null
                    }

                    {AboutIndex === 4 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            In Des Moines, work primarily took up my time. I took a few classes at DMACC that revolved around technology. An Intro to Photoshop class that refined
                            my passion for Photoshops capabilities I had exercised since High School. An Intro to HTML/CSS class that taught barebones frontend design (some really
                            gross looking websites). And an Intro to Wordpress class that exposed me to the capabilities of a more advanced CMS, I saw it as Shopify on steriods.
                        </p> : 
                        null
                    }

                    {AboutIndex === 5 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            I regretably didn't maximize my pursuit of software development during this time. I was still beating myself up over not suceeding at University was quickly
                            thrown a curveball no one saw coming, COVID-19. This time away from work, stuck inside, made me reflect. I decided I wanted to go back to Iowa City that Fall,
                            I didn't see many other ways forwards outside of college. Coeincedentally, the restaurant I work at had another one of it's three locations positioned 400 yards
                            from University property, it was a seemingly perfect situation.
                        </p> : 
                        null
                    }

                    {AboutIndex === 6 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            I ended up going to Kirkwood Community College for a year to take transferable business credits and earn my re-entry to the business school. I was re-admitted
                            in the Fall of 2021. This is the same time I met my girlfriend, Brynn, my love and support system who cheers me on unconditionally. I re-attended Tippie for
                            one year, that spring semester, while taking a Tippie class on the essentials of Microsoft Office, I built a basic program in Python using
                            the Kivy framework in my own time. It re-sparked my interest in Tech and resulted in me applying to some SE apprenticeship cohorts with Google, to no avail.
                        </p> : 
                        null
                    }

                    {AboutIndex === 7 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            That summer I weighed my options in college and pursuing a career in my passion of Tech. Option one was change my major to computer science, effectively
                            restarting my college career as if the groundhog didn't see it's shadow. Option two was attend a coding bootcamp. Previously I had weighed
                            this option, however I drew the same conclusions as before, it was a diluted market, how could I trust the investment when I'm not sure if companies will?
                            Option three was obtaining a certification in my newly discoverd niche that seemed like a fast track to tech, Salesforce.
                        </p> : 
                        null
                    }

                    {AboutIndex === 8 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            I decided I was going to study for and complete my Salesforce Administrator Certification instead of attending classes in the Fall. From there, per the certification
                            roadmap that Salesforce provides, I could follow up the certification with Application Builder, APEX Developer, and Javascript Developer certifications. My long term
                            fantasy in my mind was that I would get into tech by being a Salesforce Administrator, pivot to Salesforce Development, and then pivot out of Salesforce sometime in my
                            early 30s to finally become an agnostic Software Developer. I studied for and obtained my Administrator Certification in December of that year.
                        </p> : 
                        null
                    }

                    {AboutIndex === 9 ? 
                        <p className="shadow-md py-4 px-4 md:px-12 rounded-md bg-deep bg-opacity-40 leading-relaxed text-2xl md:text-3xl font-body text-white text-center">
                            On Thanksgiving of that same year, I had the honor meeting my girlfriend's uncle whom is a principle engineer at a company in Washington D.C. We ended up talking all
                            night, no one else was mildly interested in our conversation of tech jargon. I told him about my Salesforce plan and let my endless curiosity flow as he patiently
                            answered all of my questions about web development. In the end, he challenged me: "You want to create, you get excited talking about development,
                            why does Salesforce have to lead you there? Why not just jump right into web development?". I couldn't get
                        </p> : 
                        null
                    }

                    {AboutIndex > 0 ?
                        <div className="absolute bottom-6 left-0 rounded-b-lg h-20 w-full flex flex-row">
                            <div className="relative flex items-center w-5/12 h-full">
                                {AboutIndex > 1 ? <button onClick={() => decrementAbout()} className="absolute right-4 h-9 w-9 text-white text-opacity-70 rounded-full hover:cursor-pointer hover:text-deep hover:bg-opacity-90 hover:bg-accent flex justify-center items-center text-6xl pb-[.8rem] font-body">-</button> : null}
                            </div>
                            <div className="w-1/3 md:w-1/6 mx-auto h-full rounded-lg shadow-inner bg-deep flex justify-center items-center text-4xl text-opacity-70 font-header text-white">{AboutIndex} / 9</div>
                            <div className="relative flex items-center w-5/12 h-full">
                                {AboutIndex < 9 ? <button onClick={() => incrementAbout()} className="absolute left-4 h-9 w-9 text-white text-opacity-70 rounded-full hover:cursor-pointer hover:text-deep hover:bg-opacity-90 hover:bg-accent flex justify-center items-center text-4xl pb-1.5 font-header">+</button> : null}
                            </div>
                        </div> :
                        null}
                </div>
            </div>
        </div>
    )
}