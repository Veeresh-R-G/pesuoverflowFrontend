import Navbar from "./Navbar";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { useState } from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

/*

            NEED TO DO IN this Component
            1. We need to append Answer to the div having class --> ans-container
            
            Idk I am not to able to do...and its similar like ur project that u did(CodeBook)

*/
const QuilEditor = () => {
    const [counter, setCounter] = useState(0)

    const handleUpClick = () => {
        setCounter(counter + 1);
    }

    const handleDownClick = () => {
        setCounter(counter - 1);
    }

    const handleQuillClick = () => {
        let quillText = document.querySelector('#quill');
        console.log(quillText.innerText);
        let textAnswer = quillText.innerText;
        console.log(textAnswer);
        //textAnswer contains the answer written by the user

        //Here is the appending to the div tag which I am not able to do 
        //Check this out

        let appendTo = document.querySelector('.ans-container');
        appendTo.innerText += quillText.innerText;

    }
    return (
        <div className="editor flex bg-slate-200 w-screen h-screen">
            <Navbar />
            <div className="container bg-white ml-72 mt-10 h-sceen w-myWidth4">
                <div className="query flex flex-row relative">
                    <div className="absolute top-9 left-10">
                        <BsFillArrowUpCircleFill className="h-8 w-8 cursor-pointer" id="upArrow" onClick={handleUpClick} />
                        <h1 className="ml-2 mt-2 mb-2 text-2xl ">{counter}</h1>
                        <BsFillArrowDownCircleFill className="h-8 w-8 cursor-pointer" id="downArrow" onClick={handleDownClick} />

                    </div>
                    <h1 className="det uppercase pl-20 pt-9 "> {"<Question></Question>"}
                    </h1>
                </div>
                <div className="mt-20 w-myWidth4">
                    <div className="ans-container ml-24  mb-10 w-myWidth4 "></div>
                    <ReactQuill className="ml-24 mr-32" id="quill" placeholder="Type Answer here..." />
                    <button className="bg-blue-600 text-white rounded-xl p-3 absolute right-32 mt-5 overflow text-lg hover:text-blue-600  hover:bg-white hover:border-blue-500 hover:border-2" onClick={handleQuillClick}>Submit Answer</button>
                </div>

            </div>
        </div>
    );
}

export default QuilEditor;