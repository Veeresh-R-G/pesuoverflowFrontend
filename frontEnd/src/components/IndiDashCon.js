import ProMeter from './ProgresMeter';

const IndiDashCon = () => {
    let NAME_HERE = "<NAME>";
    return (
        <div className="flex flex-row dash-main bg-slate-100 text-black w-myWidth2 rounded-lg ml-96 mt-10 h-full ">

            <button className=" z-20 absolute top-14 left-100 text-slate-700" onClick={() => { console.log("Clicked the search Bar") }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <input className="absolute ml-7 mt-2 p-3 w-20 outline-none rounded-full hover:w-48 duration-300" type="search" name="search" placeholder="         Algolia Search" />


            {
                /*
                    We are going to access all details through props
                */
            }
            <div className="indi-content w-auto rounded-xxl bg-gray-100 ml-10 ">
                <h1 className='text-5xl font-black uppercase mt-16 pb-5'>WELCOME {NAME_HERE}</h1>
                <h1 className="det pt-10">NAME</h1>
                <h1 className="det">TEAM NAME</h1>
                <h1 className="det">ROLE OF PERSON</h1>
            </div>

            {
                /*  
                    Progress Bar Below -->
                */
            }
            <ProMeter />
        </div>
    );
}

export default IndiDashCon
    ;