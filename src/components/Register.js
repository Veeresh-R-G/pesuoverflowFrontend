import Tags from "./Tags";

const Register = () => {
    return (
        <div style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80")`,
            backgroundSize: "1200px 1200px"
        }} className="register w-screen h-screen bg-slate-300 flex justify-center items-center">
            <div className="w-myWidth2 h-128 bg-gray-50 grid grid-cols-2 rounded-2xl pl-2">

                <div className=" border-r-2 outline-none border-r-black">
                    <h1 className="font-bold text-black text-5xl p-2 text-center mt-8 mb-10">WELCOME TO

                        PESU OVERFLOW.</h1>
                    <p className="text-3xl font-semibold underline decoration-dashed text-center">
                        Enjoy Coding
                    </p>
                    <br />
                </div>


                <div className="flex items-center mt-20 flex-col">
                    <input type="text" placeholder="Name" name="name" className="regStyle" />
                    <input type="email" placeholder="Email" name="email" className="regStyle" />
                    <input type="text" placeholder="Phone Number" name="phone" className="regStyle" />
                    <input type="text" placeholder="Photo URL" name="photo" className="regStyle" />


                    <a href="/">
                        <button type="submit"
                            className="bg-black text-lg px-24 py-3 text-gray-100 
                                    font-semibold rounded-xl outline outline-3 m-4 hover:bg-white 
                                    hover:text-black hover:outline-black">

                            Register

                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Register;