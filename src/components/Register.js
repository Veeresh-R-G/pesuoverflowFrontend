const Register = () => {
    let interest = ["web-dev", "runinng",]
    return (
        <div className="register w-screen h-screen bg-slate-300 flex justify-center items-center">
            <div className="w-myWidth2 h-128 bg-gray-50 grid grid-cols-2 rounded-2xl pl-2">

                <div className="">
                    <h1 className="font-bold text-violet-700 text-5xl p-2 text-center mt-8 mb-5">WELCOME TO

                        ____OVERFLOW.</h1>
                    <p className="text-xl text-center">
                        Hope You have a Wonderful time with us</p> <br />
                    <div className="promotion text-lg font-semibold ml-6">
                        <p className="text-xl text-center"> Why ____OVERFLOW ?  </p>
                        <ul style={{ listStyleType: "circle" }}>
                            <li>One of the Best Collaborative Platform</li>
                            <li>Eliminate CSE CLUBS IN ALL COLLGES</li>
                            <li>We earn hahaha  </li>
                        </ul>
                    </div>


                </div>
                <div className="flex items-center mt-20 flex-col">
                    <input type="text" placeholder="Name" className="regStyle" />
                    <input type="email" placeholder="Email" className="regStyle" />
                    <input type="text" placeholder="Phone Number" className="regStyle" />
                    <input type="text" placeholder="Photo URL" className="regStyle" />

                    <div>
                        <label>Type:</label>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Register;