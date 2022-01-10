import ProMeter from './ProgresMeter';
import img1 from './des.png';
const IndiDashCon = ({name,photoURL,phone,email,projects,clubs,interests,ticket}) => {
    let NAME_HERE = "<NAME>";
    let PROJECT_NAME_HERE = "<PROJECT>"
    let options = ["opt1", "opt1", "opt1", "opt1"]
    let option2 = ["opt1", "opt1", "opt1"]


    return (
        <div className="flex flex-row dash-main text-black w-full h-screen mt-4 mb-6 font-google-sans">


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
            <div className="indi-content w-myWidth rounded-lg border-[6px] border-slate-400 bg-gray-100 ml-72 pl-2 mt-14">
                <div>
                <img src={photoURL} alt="" className="w-60 h-60 rounded-lg mt-2" />
                <span className='relative'>
                    <h1 className='text-4xl font-black uppercase ml-20 pb-2 '>
                        <span>Hey, i am  </span>
                        <span className="underline">{name}</span>
                    </h1>
                    <h3 className='mt-3 font-semibold'>Wanna get in touch?Hit me Up at : </h3>
                    <p>{email}</p>
                    <p>{phone}</p>
                
                </span>
                </div>                            
                <div className="text-xl ml-28">
                    <h3 className='font-semibold'>I am interested in :</h3>
                    <ol>
                        {interests.map((item) =>
                            <li className='text-lg'>-{item}</li>)}
                    </ol>

                    <h3 className='mt-4 font-semibold'>Projects :</h3>
                    <ol>
                        {projects.map(({post,project}) =>
                            <li className='text-lg'>-{post} at {project.title}</li>)}
                    </ol>

                    <h3 className='mt-4 font-semibold'>Clubs :</h3>
                    <ol>
                        {clubs.map(({post,club}) =>
                            <li className='text-lg'>-{post} at {club.name}</li>)}
                    </ol>

                  
                </div>

            </div>

            <div className="team-logo-here border-[6px] border-gray-400 bg-white rounded-lg ml-7 mt-14">
                <h1 className="font-medium text-3xl mt-2 mb-3 mx-10">Current Ticket:</h1>
                <h1 className='mx-14'>{ticket.name} of the Project,<bold className="font-semibold"> {ticket.header.project.title}</bold></h1>
                <ProMeter statusNum={ticket.status.statusNum}/>
                <h1 className='font-semibold text-2xl mx-16 mt-5'>Quick Links:</h1>
                <div className="links-project ml-20 text-lg">
                    {/* 
                        
                        This was Appraoch-1 but i still now aware about the schema whether
                        it contains any field for storing the href's
                        
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

export default IndiDashCon
    ;