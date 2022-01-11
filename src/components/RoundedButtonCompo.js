import { useState } from "react";
const RoundedButtonCompo = () => {
    let beforeClickStyles = {
        backgroundColor: "white",
        color: "#9C28D9"
    }

    let afterClickStyles = {
        backgroundColor: "#9C28D9",
        color: "white",
        border: "none"
    }

    let [styles, setStyle] = useState(beforeClickStyles);

    const changeStyles = () => {
        setStyle(afterClickStyles);
    }
    return (

        <div className="rounded-button-component" >

            <button onClick={console.log("I got Clicked Now give me parrty ! ")}
                className="hover:bg-slate-200 bg-white font-semibold text-violet-700 
                border-2 border-violet-600 rounded-xxl p-1 w-20 mb-1 outline-none"
                style={styles}

                onClick={changeStyles}>
                hehehe

            </button>
        </div>
    );
}

export default RoundedButtonCompo;