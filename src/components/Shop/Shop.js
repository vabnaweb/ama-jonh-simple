import React, { useEffect, useState } from 'react';
      const [products,setProducts]= useState([])
      useEffect(()=>{
          fetch('./products.JSON')
      })
const Shop = () => {
    return (
        <div>
            <div>
                  
            </div>
            <div>

            </div>
        </div>
    );
};

export default Shop;
