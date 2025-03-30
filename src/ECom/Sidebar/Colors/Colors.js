import React from 'react';
import "./Colors.css";

import Input from '../../components/Input.js';

function Colors({handleChange}) {
  return (
    <>
    <div className='ml'>
    <h2 className='sidebar-title color-title'>Colors</h2>
    <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value='' name='test3' />
          <span className='checkmark all'></span>All
    </label>

    <Input handleChange={handleChange}
           value='black'
           title='Black'
           color='black'
           name='test3'/>
    <Input handleChange={handleChange}
           value='blue'
           title='Blue'
           color='blue'
           name='test3'/>
    <Input handleChange={handleChange}
           value='red'
           title='Red'
           color='red'
           name='test3'/>
    <Input handleChange={handleChange}
           value='green'
           title='Green'
           color='green'
           name='test3'/>
           
    <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value='white' name='test3' />
          <span className='checkmark' style={{background:"white", border:"2px solid black"}}></span>White
    </label>

    </div>
    </>
  )
}

export default Colors;