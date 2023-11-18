import { useState } from "react";

const Dropdown=()=>{
    const options=["React Js","Vue Js","Angular Js"];
    const [isActive,setIsActive]=useState(false);
    const [selectedItem,setSelectedItem]=useState('Choose Framework');
    return(
        <div className="container">
            <div className="dropdown-container">
                <div className="dropdown-btn" onClick={e=>setIsActive(!isActive)}>{selectedItem}<span>v</span></div>
                <ul className={isActive?"dropdown-content dropdown-active":"dropdown-content dropdown-inactive"}>
                {options.map((option)=>{
                    return <li className="dropdown-item animate__animated animate__fadeIn" onClick={(e)=>{setSelectedItem(e.target.textContent)}}>{option}</li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;