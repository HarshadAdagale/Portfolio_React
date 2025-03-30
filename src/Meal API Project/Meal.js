import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function Meal() {

const [items,setItems] = useState([]);

let arr = [];

    for(let i = 0; i <= 39; i++) {
        arr = [...arr, i];
    }


const generateId = () =>  Math.floor(Math.random() * 10000) 
// const generateId = () =>  arr.map((i) => i)

useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
         .then(res => setItems(res.data.meals))
         .catch(e => console.log(e));
}, [])

const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {
    return (
        <section className="card" key={generateId()}>
            <img src={strMealThumb} />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
})

return (
    <div className="items-container">
        {itemsList}
    </div>
)

}

export default Meal;