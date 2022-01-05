import ProMeter from "./ProgresMeter";
const TeamDashCon = () => {
    return (
        <div className="flex flex-row dash-main text-black w-full mt-4 mb-6">

            {/* <button className="absolute top-8 left-100 text-slate-700" onClick={() => { console.log("Clicked the search Bar") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button> */}

            {/* <input className="absolute top-3 ml-10 mt-2 p-3 w-20 outline-none rounded-full hover:w-48 duration-300" type="search" name="search" placeholder="         Algolia Search" /> */}


            {
                /*
                    We are going to access all details through props
                */
            }
            <div className="indi-content w-myWidth rounded-lg border-[6px] border-slate-400 bg-gray-100 ml-72 pl-7">
                <h1 className='text-4xl font-black uppercase mt-10 pb-2 animate-bounce'>
                    <span className="overline">TEAM</span>
                    <span className="underline"> MAMA</span>
                </h1>

                <div style={{ width: "560px", marginLeft: "13px" }} className="h-96 border-4 p-4 rounded-md">
                    {/* About Team here --> */}
                    {/* <p className="text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.sdfsfdsfsdfsdf
                            Laudantium possimus nihil nam adipisci corrupti velit iste minima ipsa a
                            porro?
                        </p> */}
                    <img src={"example.svg"} alt="teamPicture" />
                </div>

                <a href="/" target={"_blank"} className="uppercase text-lg">
                    <h1 className="m-0 p-0 det hover:text-violet-700 duration-300 ">Area : ML / AI</h1>
                </a>


                <a href="/" target={"_blank"} className="uppercase text-lg">
                    <h1 className="m-0 p-0 det hover:text-violet-700 hover:underline hover:decoration-wavy">VIEW PROJECTS HERE</h1>
                </a>

            </div>

            <div className="team-logo-here border-[6px] border-gray-400 bg-white rounded-lg ml-5">
                <h1 className="font-medium text-3xl m-10 animate-bounce">TEAM PROGRESS</h1>
                <ProMeter />
            </div>


        </div>
    );
}

export default TeamDashCon;