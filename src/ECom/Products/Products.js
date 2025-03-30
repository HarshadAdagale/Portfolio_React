import React from 'react';
import "./Products.css";

import Card from "../components/Card.js";

function Products({result}) {
  return (
    <>
      <section className='card-container'>
      {result}
      </section>

    </>
  )
}

export default Products;