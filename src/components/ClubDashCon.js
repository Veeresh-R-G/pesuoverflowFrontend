import img1 from './des.png';
import CardProject from "./CardProject";
const ClubDashCon = ({name,details,people,wallOfFame,picGallery}) => {

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

    console.log(picGallery);
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
                <img src={details.photoURL} alt="" className="w-56 h-56 rounded-lg mt-2 float-left mr-5" />

                <div className='relative'>
                    <p className='text-4xl font-bold uppercase ml-28 pl-20 pt-8 pb-2'>
                        <span>CLUB  </span>
                        <span className="underline">{name}</span>
                    </p>
                    <br />
                    <h3 className="text-2xl ml-5 font-semibold">contact : {details.contact.email}</h3>
                </div>


                <h1 className="text-2xl font-semibold mt-28">Our Team:</h1>
                <div className="cards-here grid grid-cols-3 mt-3">
                    {
                           // return <CardProject name={user.name} photoURL={user.details.photoURL} post={post} key={user.id}/>
                            
                        people.map(({post,user})=>(
                            <CardProject name={user.name} photoURL={user.details.photoURL} post={post} key={user.id}/>
                        ))
                    }
                    
                </div>

                <div className="text-xl h-36 mr-5">
                   <p> {details.displayInfo}</p>     
                </div>

                <div className="mt-20 mb-44 carousel-here ml-20 ">
                    <marquee id="mymarq2" behavior="scroll" direction="left"
                        className='w-myWidth h-auto text-lg border-4 border-slate-300 rounded-xl p-4 '
                        onMouseEnter={handleMouseOver2}
                        onMouseLeave={handleMouseDown2}>
                        {picGallery.map(({caption,uri}) =>
                            <img className='inline w-24 h-24 mr-5' src={uri} />)}
                    </marquee>
                </div>
            </div>

            <div className="team-logo-here border-[4px] w-myWidth5  border-gray-400 bg-white rounded-lg mt-14 p-5">

                <h1 className="text-3xl font-semibold mb-10">Wall Of Fame</h1>

                {/* // eslint-disable-next-line jsx-a11y/no-distracting-elements */}

                <marquee id="mymarq" behavior="scroll" direction="up"
                    className='w-48 h-auto pl-20 text-lg border-4 border-slate-300 rounded-xl 
                    hover:bg-slate-700 hover:text-white hover:border-white'
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseDown}>
                    {wallOfFame.map((item) =>
                        <a href='/club' className="uppercase mb-3 block over:text-violet-500 hover:underline">{item.name}</a>)}
                </marquee>

            </div>
        </div>
    );
}

export default ClubDashCon;