import Cards from './cards'

function Projects() {

    return(
        <div className="relative w-screen h-auto bg-deep">
            <div className="w-screen max-w-7xl h-auto mx-auto pb-10">
                <p className="pt-5 pb-8 text-accent w-full pl-0 md:pl-8 text-center md:text-left text-7xl font-bold font-header shadowSection uppercase">Projects</p>
                <Cards />
            </div>
        </div>
    )
}

export default Projects