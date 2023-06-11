import projectInfo from '../../info/projects'

function Cards() {

    const MappedProj = () =>
    projectInfo.map((item) => 
        <div className='flex flex-col p-4 justify-center items-center h-auto w-auto rounded-md shadow-md bg-shallow hover:shadow-xl'>
            <div className='h-auto w-full'>
                <img className='h-auto w-full rounded-sm mb-8' src={item.image} />
                <p className='w-full text-center text-4xl text-white uppercase font-body font-semibold tracking-wide'>{item.name}</p>
                <div className='w-full h-[.05rem] bg-accent mt-4 opacity-80'></div>
                <p className='w-full text-center text-2xl text-white font-body mt-4 mb-10'>{item.description}</p>
                <div className='w-full h-16 rounded-md bg-deep flex justify-center items-center text-2xl text-white text-opacity-90 font-body font-light uppercase hover:cursor-pointer hover:text-opacity-100 hover:border border-opacity-80 border-accent'>Learn More</div>
            </div>
        </div>

    )

    return(
        <div className='relative h-full w-full grid grid-cols-1 px-4 md:grid-cols-2 gap-4 md:gap-2'>
            <MappedProj />
        </div>
    )
}

export default Cards