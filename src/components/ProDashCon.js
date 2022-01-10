import ProMeter from "./ProgresMeter";
import img1 from './des.png';
import CardProject from "./CardProject";
const ProDashCon = ({project,tickets,statusNum}) => {
    

    const details=project.details;
    return (
        <div className="flex flex-row dash-main text-black w-full pl-1  h-auto mt-4 mb-6">


            {
                /* Search Bar  */
            }
            <button className=" z-20 absolute top-7 left-100 ml-72 text-slate-700" onClick={() => { console.log("Clicked the search Bar") }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <input className="absolute p-3 pl-7 w-myWidth top-4 ml-72 outline-none rounded-full" type="search" name="search" placeholder=" Search" />


            {
                /*
                    We are going to access all details through props
                */
            }
            <div className="indi-content w-myWidth3 rounded-lg border-[4px] border-slate-400 bg-gray-100 ml-64 mr-1 pl-4 mt-14">
                <img src={details.photoURL} alt="" className="w-56 h-56 rounded-lg mt-2 float-left mr-5" />

                <div className='relative'>
                    <p className='text-4xl font-bold uppercase ml-28 pl-20 pt-8 pb-2'>
                        <span>PROJECT  </span>
                        <span className="underline">{project.title}</span>
                    </p>
                    <br /><br />
                    <h3 className="text-2xl ml-5 font-semibold">contact : {details.contact.email}</h3>
                </div>


                {
                    /*
                        Outline added only for reference of the proper placement and position 
                    */
                }
                <div className="text-xl mt-20 h-36 mr-5">
                    <p>{details.displayInfo}</p>
                    
                </div>

                <h1 className="text-2xl font-semibold">Our Team:</h1>
                <div className="cards-here grid grid-cols-3  mt-3">
                    {
                        project.people.map(({post,user})=>{
                            return <CardProject name={user.name} photoURL={user.details.photoURL} post={post} key={user.id}/>
                        })
                    }
                
                </div>
            </div>

            <div className="team-logo-here border-[4px] border-gray-400 bg-white rounded-lg  mt-14">
                <h1 className="font-medium text-3xl mt-2 mb-3 mx-10">Available Tickets:</h1>
                
                {
                    tickets.map((item)=>(
                        <h1 className='mx-14'><span className="font-bold">{item.name}</span>: {item.requirements.join(",")}</h1>
                    )

                    )
                }
                <ProMeter statusNum={statusNum}/>
                <h1 className='font-semibold text-2xl mx-16 mt-5'>Quick Links:</h1>
                <div className="links-project ml-20 text-lg">
                    {/* 
                        
                        This was Appraoch One but problem I think would be to give the project
                        links

                        If thats stored in the DB then use this else Use the latter One
                        {option2.map((item) =>
                        <a href={}>-{item} <br /></a>
                        )} 
                    */}

                    <a href="/indi">heheh1</a><br />
                    <a href="/indi">heheh2</a><br />
                </div>

            </div>


        </div>
    );
}

export default ProDashCon;