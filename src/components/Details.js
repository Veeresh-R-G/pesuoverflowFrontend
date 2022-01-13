import { BsArrowRightSquareFill } from "react-icons/bs";
import Tags from "./Tags";
const Details = () => {
    let style =
    {
        backgroundImage: `url("https://images.unsplash.com/photo-1576502202167-791eca35a78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80")`,
        backgroundSize: "1800px 1200px"
    }

    let name = "World"
    return (

        <div style={style} className="h-screen w-screen flex justify-center items-center">

            <div className="w-myWidth2 h-128 bg-purple-50 rounded-2xl flex flex-col">

                <h1
                    className="text-center my-4 text-3xl font-semibold">
                    Hi {name} !
                </h1>

                {/* <hr className='underline decoration-solid w-1/2 ml-52 mt-3 border-1 border-blue-900 ' /> */}

                <h1
                    className="ml-10 my-4 text-2xl font-semibold underline decoration-dotted">
                    Tell us About yourself !
                </h1>


                <div className="flex flex-row ml-12 text-xl mb-5">
                    <h1>You are &nbsp; </h1>
                    <div>
                        <input type="radio" name="role" id="" value="Mentor" /> <spam>Mentor</spam> <br />
                        <input type="radio" name="role" id="" value="Alumni" /> <spam>Alumni</spam> <br />
                        <input type="radio" name="role" id="" value="Student" /> <spam>Student</spam> <br />
                    </div>
                </div>

                <hr className='underline decoration-solid w-1/3 ml-72 mt-3 border-1 mb-8 border-blue-900 ' />

                <div className="register-tags ml-12 flex">
                    <p className="text-xl ">Your Interests</p>
                    <div className="mx-20 focus:outline-none border-0">
                        <Tags />
                    </div>
                </div>

                <p className="ml-44 mt-2 mb-10">We will Connect you to people & clubs with similar Interests 😎😁</p>

                <div className="ml-12 flex">
                    <p className="text-xl mr-10">Describe yourself in one Sentence : </p>
                    <input type="text" name="description_user"
                        className="bg-gray-200/80 rounded-lg px-10 py-2"
                        placeholder="Type it out here .." />
                </div>

                <a href="/home" className="text-center mt-7">
                    <button
                        className="bg-blue-600/80 text-white px-20 py-2 rounded-xl text-lg text-center
                        hover:text-blue-600 hover:bg-white border-blue-500 hover:border-2">
                        Go Ahead
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Details;