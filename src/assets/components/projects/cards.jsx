import projectInfo from '../../info/projects'

function Cards() {

    const mappedCards = projectInfo.map((item) => 
        <div className='flex flex-col p-8 justify-center items-center h-auto w-auto rounded-md shadow-md bg-shallow hover:shadow-inner hover:cursor-pointer hover:border-2 border-accent'>
            <div className='h-auto w-full'>
                <p className='w-full text-center text-3xl text-white uppercase font-body font-semibold tracking-wide'>{item.name}</p>
                <p className='w-full text-center text-2xl text-white font-body mt-4'>{item.description}</p>
            </div>
        </div>
    )

    return(
        <div className='h-full w-full grid grid-cols-1 px-4 md:grid-cols-2 gap-4 md:gap-2'>
            {mappedCards}
        </div>
    )
}

export default Cards