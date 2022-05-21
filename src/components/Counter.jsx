import React,{useState,Fragment} from "react";
import "../App.css"


const Counter = ()=>{
    const [count,setCount]=useState(0);
    
    return (
        <Fragment>
            <h1>Counter : <span className={count%2===0&&count>0 ? 'even' : count===0 ?null : 'odd'} >{count}</span></h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{if(count>0){
                setCount(count-1)
            }}}>Decrement</button>
            <button onClick={()=>{setCount(2*count)}}>Double</button>
        </Fragment>
    )
}

export default Counter;