import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Photo1 from '../../static/gd/Photo1.jpg'
import Photo2 from '../../static/gd/Photo2.jpg'
import Photo3 from '../../static/gd/Photo3.png'
import Photo4 from '../../static/gd/Photo4.jpg'
import Photo5 from '../../static/gd/Photo5.jpg'
import Photo6 from '../../static/gd/Photo6.jpg'
import Photo7 from '../../static/gd/Photo7.jpg'
import Photo8 from '../../static/gd/Photo8.jpg'
import Photo9 from '../../static/gd/Photo9.jpg'
import Photo10 from '../../static/gd/Photo10.jpg'
import Photo11 from '../../static/gd/Photo11.jpg'
import Photo12 from '../../static/gd/Photo12.jpg'
import Photo13 from '../../static/gd/Photo13.jpg'
import Photo14 from '../../static/gd/Photo14.jpg'
import Photo15 from '../../static/gd/Photo15.jpg'
import Photo16 from '../../static/gd/Photo16.jpg'


export default function Assets() {

    let imgRender = []

    for (let i=1;i<17;i++) {
        imgRender.push(i)
    }

    console.log(imgRender)
   
    return (
        <div className="relative w-screen h-auto bg-deep">
            <div className="w-screen max-w-7xl h-auto mx-auto pb-10 px-2">
                    <p className="pt-5 pb-8 text-accent w-full pl-0 md:pl-8 text-center md:text-left text-5xl md:text-7xl font-bold font-header shadowSection uppercase">Marketing Assets</p>
                    <div className="w-full h-auto"> 
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{750: 2, 900: 3}}
                        >
                            <Masonry>
                                {imgRender.map((item) => 
                                <img key={item} className='m-2 rounded-sm shadow-md' src={item === 3 ? `src/assets/static/gd/Photo${item}.png` : `src/assets/static/gd/Photo${item}.jpg`} />
                                )}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div> 
            </div>
        </div>
    )
}
