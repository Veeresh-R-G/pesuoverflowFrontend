
const Navbar = (props) => {
    return (
        <div className="mr-10 navBar-Wrapper w-1/6 h-screen text-black bg-white p-4 fixed uppercase rounded-tl-xxl" >
            <h1 className="text-4xl font-extrabold pr-4 text-violet-800">  PESU <br />OVERFLOW. </h1>
            <div className="ml-1 mt-7 flex flex-col font-semibold ">
                <a href="/" className="navhover">Dashboard</a>
                <a href="/" className="navhover">Profile</a>
                <a href="/" className="navhover">Team Details</a>
                <a href="/" className="navhover">Team Progress</a>
            </div>
        </div>
    );
}

export default Navbar;