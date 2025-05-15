import React from "react";
import notes from "./note";

function Firstbox(props){
    return(
        <div className="bod">
            <div className="box">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Firstbox;