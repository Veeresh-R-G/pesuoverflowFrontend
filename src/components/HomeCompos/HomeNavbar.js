import logo from './logo.png'

const HomeNavbar = () => {
    return (
        <div className="Home-Navbar">

            <div className='flex flex-row bg-black text-white pl-36'>
                <div className='flex flex-row'>
                    <a href="/home"><img src={logo} alt="" className='w-28' /></a>
                    <h1 className='inline text-center mt-6 text-2xl uppercase font-semibold py-4'>PesuOverflow</h1>
                </div>

                <div>
                    <div >
                        <a href="/login"> <button className='absolute right-80 mt-9 text-center text-2xl'>Sign in</button> </a>
                        <a href="/reg"><button className='bg-brown2 p-1 mt-8 w-36 rounded-lg absolute right-36 text-2xl hover:bg-brown1'>Register</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;