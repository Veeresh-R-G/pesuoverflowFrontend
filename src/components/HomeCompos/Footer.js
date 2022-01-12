import logo from './logo.png'
import { BsGithub } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="footer bg-black w-full h-80  pt-3 text-white absolute">
            <a href="/home"><img src={logo} alt="" className='w-28 ml-28' /></a>
            <h1 className='ml-28 font-bold text-lg uppercase'>PESU OverFlow.</h1>
            <p className='ml-28 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro.
            </p>

            <a href="/home"><BsGithub className='w-10 h-10 ml-28 mt-4 rounded-xl hover:text-black hover:bg-white' /></a>

            <div className='absolute right-72 top-24 text-xl '>
                <h1 className='underline decoration-double mb-4'>Creators:</h1>

                <h1 className='uppercase'>Ankur D</h1>
                <h1 className='uppercase'>Veeresh R G</h1>

            </div>
            <hr className='underline decoration-solid w-1/2 ml-96 mt-10 ' />
            <div className='mt-2 text-center text-lg'>
                <p> @ PesuOverflow &trade; 2022 | All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;