import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { MdMicNone } from "react-icons/md";
import { SiGooglelens } from "react-icons/si";
import { MdOutlineSearch } from "react-icons/md";

export default function Search(){

    return(
        <div className="searchbar">
          
                <input type="text" id="searchtext"/>
                {/* <button><img src="https://cdn-icons-png.flaticon.com/512/3138/3138411.png" alt="voice" /></button>
                <button><img src="https://www.svgrepo.com/show/504416/google-lens.svg" alt="imagesr" /></button>
                <button><img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="search" /></button> */}
                <span className="searchicon"><MdMicNone color="#1aa3ff" size={"30px"}/></span>
                <span className="searchicon"><SiGooglelens color="#1aa3ff" size={"27px"} /></span>
                <span className="searchicon"><MdOutlineSearch color="#1aa3ff" size={"30px"}/></span>
                
                
                
                
            
        </div>
    );
}