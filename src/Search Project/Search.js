import { useState } from "react";
import {FaSearch } from "react-icons/fa"
import "./style.css"

function Search() {

const [showInput, setShowInput] = useState(false);
const [bgColor, setBgColor] = useState("white");

const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if(e.target.className === "container") {
        setShowInput(false)
        setBgColor("white")
    }
}

return (
    <section className="container" style={{backgroundColor: bgColor}} onClick={handleClick}>
    {showInput ? (<input type="text" placeholder="Search..." />)
               : (<FaSearch onClick={() => setShowInput(true)} className="icon"/>)}
    </section>
)
    
}

export default Search;