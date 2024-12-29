import React from "react";
import { useDispatch,useSelector } from "react-redux";

const CounterRedux=()=>{
    const count=useSelector((count)=>count)
    const dispatch=useDispatch();

    return(
        <>
        <div className="container">
            <h1>{count}</h1>
            <button className="btn-success m-2" onClick={()=>dispatch({type:'inc'})}>+</button>
            <button className="btn-danger" onClick={()=>dispatch({type:'dec'})}>-</button>
        </div>
        </>
    )
}
export default CounterRedux