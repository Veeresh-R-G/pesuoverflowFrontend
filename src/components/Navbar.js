import { FiAlignJustify } from 'react-icons/fi';
import { useState } from 'react';
const Navbar = (props) => {

    let [toggle, setToggle] = useState(false);


    return (
        <div className="mr-10 navBar-Wrapper w-1/6 h-screen text-black bg-white p-4 fixed uppercase rounded-tl-xxl" >
            <h1 className="text-4xl font-extrabold pr-4 text-violet-800">  PESU
                <span className="text-black text-lg ml-10 h-12" >
                    <button onClick={() => { console.log("heheh") }}> <FiAlignJustify className='w-12 h-12' /> </button>
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
    );
}

export default Navbar;