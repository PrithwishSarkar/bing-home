import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";


export default function Header(){
    const smaller={
        fontSize: "0.72rem"
    }
    const [show, setShow] = useState(false);
    const [ddone, setddone] = useState(false);
    const [ddtwo, setddtwo] = useState(false);

    function handleClick(){
        setShow(!show);
    }
    function handleDDone(){
        setddone(!ddone);
    }
    function handleDDtwo(){
        setddtwo(!ddtwo);
    }
    return(
        <div>
            <div className="head">
            <div className="left">
                <img src="https://www.freepnglogos.com/uploads/image-microsoft-logo--5.png" id="logo" alt="bing logo" />
                <span id="logo"><b>Microsoft Bing</b></span>
                <span className="headleft">Images</span>
                <span className="headleft">Videos</span>
                <span className="headleft">Translate</span>
                <span className="headericon headleft"><BsThreeDots color="white" size={"24px"}/></span>
            </div>
            
            
            
            <div className="right">
                <span className="headerright">Sign in</span>
                <span className="headericon headerright"><MdAccountCircle color="white" size={"24px"}/></span>
                <span className="headericon hamb headerright" onClick={handleClick}><GiHamburgerMenu color="white" size={"24px"}/></span>
            </div>
            
            
            

            {/* <img src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-icon-image_1187018.jpg" alt="account" /> */
            /* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="hamburger" />
            <img src="https://www.shareicon.net/download/2015/09/26/646795_web_512x512.png" alt="three dot" /> */}
        </div>
        {show? <div className="hammenu">
            <ul>
                <li onClick={handleDDone}><span className="hamicon"><IoMdSettings  size={"1rem"}/></span>Settings<span className="rightham"><IoIosArrowDown size={"1rem"} /></span></li>
                {ddone? <ul>
                    <li className="nested">Language</li>
                    <li className="sub nested" style={smaller}>English</li>
                    <li className="nested">Country/Region</li>
                    <li className="sub nested" style={smaller}>India</li>
                    <li className="nested">Location</li>
                    <li className="nested">Voice Search</li>
                    <li className="nested">More</li>
                </ul> : ""}

                <li><span className="hamicon"><IoLockClosedSharp size={"1rem"}/></span>SafeSearch    Moderate</li>
                <li><span className="hamicon"><MdOutlineHistoryToggleOff size={"1rem"} /></span>Search History</li>
                <li><span className="hamicon"><MdManageAccounts size={"1rem"} /></span>My Bing</li>
                <li><span className="hamicon"><BsShieldLockFill size={"1rem"} /></span>Privacy</li>
                <li><span className="hamicon"><BiSolidMessage size={"1rem"} /></span>Feedback</li>

                <li onClick={handleDDtwo}><span className="hamicon"><MdHomeFilled size={"1rem"} /></span>Customize your homepage<span className="rightham"><IoIosArrowDown size={"1rem"} /></span></li>
                {ddtwo? <ul>
                    <li className="nested">Show menu bar<span className="rightham"><LiaToggleOnSolid color="#1aa3ff" size={"1.5rem"} /></span></li>
                    <li className="nested">Show news and interests<span className="rightham"><LiaToggleOnSolid color="#1aa3ff" size={"1.5rem"} /></span></li>
                    <li className="nested">Show homepage image<span className="rightham"><LiaToggleOnSolid color="#1aa3ff" size={"1.5rem"} /></span></li>
                </ul> : ""}
                
                <hr />
                <li style={smaller}>Privacy and Cookies * Legal * Advertise * About our ads * Help </li>
                <li className="sub" style={smaller}>&copy; 2024 Microsoft</li>
            </ul>
        </div> : ""}
        </div>
    );
}