import { FiAlignJustify } from 'react-icons/fi';
import { GoThreeBars } from "react-icons/go"; // use this as final symbol
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from 'react';
const Navbar = (props) => {

    let [navbar, setNavbar] = useState(false)

    //TailWind Css for both Active && hidden Navbar
    const styleTailwindActive = "mr-10 navBar-Wrapper w-1/6 h-screen text-black bg-white duration-300 p-4 fixed uppercase rounded-tl-xxl"
    const styleTailwindDisabled = "hidden duration-700"

    //TailWind Css for Symbol Toggling
    const openNavbar = "absolute text-violet-800 left-5 top-3 w-8 h-8 hover:animate-ping"
    const closedNavbar = "hidden"


    //setting the toggling behaviour 
    const showNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <div style={{ margin: "0px", padding: "0" }}>
            <button className='absolute'>
                <BsArrowRightCircle className={!navbar ? openNavbar : closedNavbar}
                    onClick={showNavbar} />
            </button>

            {/* 
                This is the navbar Component
            */}
            <div className={navbar ? styleTailwindActive : styleTailwindDisabled}>
                <h1 className="text-4xl font-extrabold pr-4 text-violet-800">  PESU
                    <span className="text-black text-lg ml-20" >
                        <button onClick={() => { console.log("heheh") }}>
                            <BsArrowLeftCircle
                                className='w-8 h-8 rounded-xxl text-violet-700
                        hover:bg-violet-700 hover:text-white'
                                onClick={showNavbar}
                            />
                        </button>
                    </span>
                    <br />OVERFLOW.
                </h1>
                <div className="ml-1 mt-7 flex flex-col font-semibold ">
                    <a href="/" className="navhover hover:-translate-y-2">Dashboard</a>
                    <a href="/" className="navhover hover:-translate-y-2">Profile</a>
                    <a href="/" className="navhover hover:-translate-y-2">Team Details</a>
                    <a href="/" className="navhover hover:-translate-y-2">Team Progress</a>
                </div>
            </div>

        </div>
    );
}

export default Navbar;