import React,{useState} from "react";
function dhars(){
    const[counts1,setCounts1]=useState(0);
    function myfunc()
    {
        setCounts1(counts1+1)
    }
    function myfunc1()
    {
        setCounts1(counts1-1)
    }
    return (
    <>
    <button onClick={myfunc}>Increase </button>
    <span>{counts1}</span>
    <button onClick={myfunc1}>Decrease</button>
    </>

)
    }
export default dhars