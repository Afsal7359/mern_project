import React from 'react'
import { useState } from "react";
import product1 from "/iphones/iphone14promax.png"
import product2 from"/iphones/iphone14plus.png"
import product3 from "/iphones/iphone14.png"
import product4 from "/iphones/iphone13.png"
import product5 from "/iphones/iphone12.png"
import product6 from "/iphones/iphone11.png"
import { useNavigate } from "react-router-dom";

function Iphone() {
   let navigate = useNavigate()
    
  const iphone =[
    {
      id: 1,
      productName: "Iphone 14 pro",
      price: "RS : 1,19,999",
      productImage: product1,
  },
  {
      id: 2,
      productName: "Iphone 14 plus",
      price: "RS : 90,999",
      productImage: product2,
  },
  {
      id: 3,
      productName: "Iphone 14",
      price: "RS : 80,999",
      productImage: product3,
  },
  {
      id: 4,
      productName: "Iphone 13",
      price:" $5499.00",
      productImage: product4,
  },
  {
      id: 5,
      productName: "Iphone 12",
      price: "$5451.54",
      productImage: product5,
  },
  {
      id: 6,
      productName:"Iphone 11",
      price: "$899.05",
      productImage: product6,
  },
  ]
  function pic(id){
    if(id==1){
    navigate(`/`);
    }
    else if(id==2){
        navigate(`/cart`);
    }
}
  return (
    <div>
        <div className='ml-5 row'  >
            {iphone.map((item) => (
                <div>
                <h1>
                    {/* {item.productName} */}
                </h1>
                <div className='p-4 d-flex' onClick={()=>pic(item.id)}>
            
                <div className="card" style={{ width: "17rem"  }}>
                    <div style={{maxWidth:"100%", maxHeight:"100%"}}>
                    <img className="card-img-top p-2" src={item.productImage} alt="Card image cap" style={{objectFit:"cover",width:"12rem"}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-text">
                            <p>{item.price}</p>
          
                           
                        </p>
                        
                    </div>
                </div>
                </div>
                </div>
            ))};
          
            
        </div>
        
    </div>
  )
}



  
 




export default Iphone