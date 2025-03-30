import { useState, useEffect } from "react";
import "./style.css";

function Clock() {

const [time, setTime] = useState(new Date());

useEffect(() => {
    const intervalID = setInterval(() => {
        setTime(new Date());
    
    return () => clearInterval(intervalID)

    }, 1000);
}, [])

function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;

}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}

return (
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
);

}

export default Clock;