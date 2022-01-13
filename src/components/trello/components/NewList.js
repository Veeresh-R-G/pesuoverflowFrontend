import React,{ useState } from 'react'
import AddCard from './AddCard';
import {v4} from 'uuid'
function NewList({setData,setIds}) {
    const [newList,setNewList]=useState(false)
    const [title,setTitle]=useState("")

    function handleClick(e){
        e.preventDefault();
        let newId=v4();
        let obj={id:newId,title:title,cards:[]}
        console.log(obj)
        setData((prev)=>({...prev,[newId]:obj}));
        setIds((prev)=>([...prev,newId]));
        setTitle("");   
        setNewList(false);
    }
    return (
        <div className='new'>
            {
                newList?
                (
                    <div className='Input'>
                    <input type="text" className='edit' placeholder='New Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    
                    <div className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon h-5 w-5" viewBox="0 0 20 20" fill="currentColor" onClick={handleClick}>
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>setNewList((prev)=>!prev)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
                    </div>
        
                    
                </div>
                ):
                (
                    <AddCard setNewCard={setNewList} title={"Add a List"}/>
                )
            }
        </div>  
    )
}

export default NewList
