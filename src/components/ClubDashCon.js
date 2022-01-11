import img1 from './des.png';
import CardProject from "./CardProject";
const ClubDashCon = () => {

    let CLUB_NAME_HERE = "<CLUB_NAME>"
    let XXX = "Club_Head(If any)"
    let option3 = ["pro1", "pro1", "pro1", "pro1"]
    let option4 = ["pro1", "pro1", "pro1", "pro1", "pro1", "pro1", "pro1", "pro1", "pro1"];
    function handleMouseOver() {
        let marq = document.getElementById("mymarq");
        marq.stop();
    }
    function handleMouseDown() {
        let marq = document.getElementById("mymarq");
        marq.start();
    }
    function handleMouseOver2() {
        let marq = document.getElementById("mymarq2");
        marq.stop();
    }
    function handleMouseDown2() {
        let marq = document.getElementById("mymarq2");
        marq.start();
    }
    return (
        <div className="flex flex-row dash-main pl-1 h-full mt-4 mb-6">
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
                        <span>CLUB  </span>
                        <span className="underline">{CLUB_NAME_HERE}</span>
                    </p>
                    <br />
                    <h3 className="text-2xl ml-5 font-semibold">contact : {XXX}</h3>
                </div>


                <h1 className="text-2xl font-semibold mt-28">Our Team:</h1>
                <div className="cards-here grid grid-cols-3 mt-3">
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>

                <div className="text-xl h-36 mr-5">
                    <p>Hello I am Spider-Man of avengers(Its not a musical Band) 🤣😂😂</p>
                    <p>We are looking for</p>
                    {option3.map(item =>
                        <p> &nbsp;--{item}</p>)}
                </div>
                <div className="mt-20 mb-44 carousel-here ml-20 ">
                    <h1 className='det'>Gallery :</h1>
                    <marquee id="mymarq2" behavior="scroll" direction="left"
                        className='w-myWidth h-auto text-lg border-8 border-green-700 rounded-xl p-10 pt-5 '
                        onMouseEnter={handleMouseOver2}
                        onMouseLeave={handleMouseDown2}>
                        {option4.map((item) =>
                            <img src={img1} className='inline w-28 h-28 mr-5'></img>)}
                    </marquee>
                </div>
            </div>

            <div className="team-logo-here border-[4px] w-myWidth5  border-gray-400 bg-white rounded-lg mt-14 p-5">

                <h1 className="text-3xl font-semibold mb-10">Wall Of Fame</h1>

                {/* // eslint-disable-next-line jsx-a11y/no-distracting-elements */}

                <marquee id="mymarq" behavior="scroll" direction="up"
                    className='w-48 h-auto pl-16 text-lg border-4 border-slate-300 rounded-xl 
                    hover:bg-slate-300 hover:text-white hover:border-white'
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseDown}>
                    {option4.map((item) =>
                        <a href='/club' className="uppercase mb-3 block over:text-violet-500 hover:underline">{item}</a>)}
                </marquee>

            </div>
        </div>
    );
}

export default ClubDashCon;