import React from "react";

export default function Snippet(props){

    return(
        <div className="snippet">
            <div className="newshead">{props.heading}</div>
            <div className="newsbody">
                <img src={props.image} alt="news" />
                <span className="newstext">{props.content}</span>
            </div>
        </div>
    );
}