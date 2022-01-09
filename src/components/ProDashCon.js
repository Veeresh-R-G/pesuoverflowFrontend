import ProMeter from "./ProgresMeter";
import img1 from './des.png';
import CardProject from "./CardProject";
const ProDashCon = () => {
    let NAME_HERE = "<NAME>";
    let PROJECT_NAME_HERE = "<PROJECT>"
    let XXX = "Project_Head"
    let option3 = ["pro1", "pro1", "pro1"]
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
                <img src={img1} alt="" className="w-56 h-56 rounded-lg mt-2 float-left mr-5" />

                <div className='relative'>
                    <p className='text-4xl font-bold uppercase ml-28 pl-20 pt-8 pb-2'>
                        <span>PROJECT  </span>
                        <span className="underline">{PROJECT_NAME_HERE}</span>
                    </p>
                    <br /><br />
                    <h3 className="text-2xl ml-5 font-semibold">contact : {XXX}</h3>
                </div>


                {
                    /*
                        Outline added only for reference of the proper placement and position 
                    */
                }
                <div className="text-xl mt-20 h-36 mr-5">
                    <p>Hello I am Spider-Man of avengers(Its not a musical Band) 🤣😂😂</p>
                    <p>We are looking for</p>
                    {option3.map(item =>
                        <p> &nbsp;--{item}</p>)}
                </div>

                <h1 className="text-2xl font-semibold">Our Team:</h1>
                <div className="cards-here grid grid-cols-3  mt-3">
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
            </div>

            <div className="team-logo-here border-[4px] border-gray-400 bg-white rounded-lg  mt-14">
                <h1 className="font-medium text-3xl mt-2 mb-3 mx-9">Ticket Directory:</h1>
                <h1 className='mx-14'>{NAME_HERE} of {PROJECT_NAME_HERE}</h1>
                <ProMeter />
                <div className='w-56 h-56 ml-10'>
                    <h1 className='font-semibold text-2xl uppercase underline decoration-dashed ml-8'>Quick Links:</h1>
                    <div className="links-project text-lg ml-20 mt-4">
                        {/*    
                        {option2.map((item) =>
                        <a href={}>-{item} <br /></a>
                        )} 
                    */}

                        <a href="/indi" className='hover:text-violet-600'>heheh1</a> <br />
                        <a href="/indi" className='hover:text-violet-600'>heheh2</a> <br />
                        <a href="/indi" className='hover:text-violet-600'>heheh2</a> <br />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ProDashCon;