import React from 'react'
import Accordians from './Accordians.js'
import accordionData from "./content.js"

const Acco = () => {
  return (
    <div>
    <div className="accordian">
    {accordionData.map(({title, content}) => {
     return < Accordians title={title} content={content}
     key={Math.random() * 10000}/>})}
    </div>
    </div>
  )
}

export default Acco;