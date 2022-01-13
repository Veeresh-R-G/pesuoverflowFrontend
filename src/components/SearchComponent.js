import Items from "./SearchCompo/SearchItems";
import { useState } from "react";
const SearchComponent = () => {
    let r_items = ["res1", "res1", "res1", "res1"]
    let [visible, setvisible] = useState(true)


    //TailWind stylings for serach Bar items
    const style = " z-100 absolute top-[53px] left-[0px] rounded-lg bg-white ml-72 text-white text-xl"
    const hide = "hidden";

    //Functions handling the visiblity of the search Items
    const showSearch = (e) => {
        e.stopPropagation();
        setvisible(true)
    }
    const hideSearch = (e) => {
        e.stopPropagation();

        setvisible(false)
    }
    return (
        <div onClick={hideSearch} className="text-black h-screen w-screen bg-gray-700">
            <button className=" z-20 absolute top-7 left-100 ml-72 text-slate-700" onClick={() => { console.log("Clicked the search Bar") }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <input onClick={showSearch}
                className="absolute p-3 pl-7 w-myWidth top-4 ml-72 outline-none rounded-lg" type="search" name="search" placeholder=" Search" />
            <div className={visible ? style : hide}>
                {r_items.map((item) =>
                    <Items val={item} />)}
            </div>
        </div>
    );
}

export default SearchComponent;