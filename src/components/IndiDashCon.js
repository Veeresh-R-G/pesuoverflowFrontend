import ProMeter from './ProgresMeter';
import img1 from './des.png';
const IndiDashCon = () => {
    let NAME_HERE = "<NAME>";
    let PROJECT_NAME_HERE = "<PROJECT>"
    let options = ["opt1", "opt1", "opt1", "opt1"]
    let option2 = ["opt1", "opt1", "opt1"]


    return (
        <div className="flex flex-row dash-main text-black w-full h-auto mt-4 mb-6">


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
            <div className="indi-content w-myWidth rounded-lg border-[6px] border-slate-400 bg-white ml-72 pl-2 mt-14">
                <div className='flex flex-row'>
                    <img src={img1} alt="" className="w-60 h-60 rounded-lg ml-5" />
                    <span>
                        <h1 className='uppercase ml-14 mt-20 pb-2'>
                            <div className='bouncy animate-bounce'>
                                <span className='font-bold text-3xl'>HEy, i am  </span>
                                <span className=" font-bold text-3xl underline">{NAME_HERE}</span>
                            </div>
                        </h1>
                        <div className='ml-14'>
                            <h3 className='mt-3 text-xl '>Wanna get in touch?Hit me Up at : </h3>
                            <p>email@gmail.com</p>
                            <p>0000000000</p>
                        </div>
                    </span>
                </div>



                <div className="text-xl ml-28">
                    <h3 className='font-semibold'>I am interested in :</h3>
                    <ol>
                        {options.map((item) =>
                            <li className='text-lg'>-{item}</li>)}
                    </ol>

                    <h3 className='mt-4 font-semibold'>Projects :</h3>
                    <ol>
                        {option2.map((item) =>
                            <li className='text-lg'>-{item}</li>)}
                    </ol>

                    <h3 className='mt-4 font-semibold'>Clubs :</h3>
                    <ol>
                        {option2.map((item) =>
                            <li className='text-lg'>-{item}</li>)}
                    </ol>


                </div>

            </div>

            <div className="team-logo-here border-[6px] border-gray-400 bg-white rounded-lg ml-7 mt-14">
                <h1 className="font-medium text-3xl mt-2 mb-3 mx-10 uppercase">Current Ticket:</h1>
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

export default IndiDashCon
    ;