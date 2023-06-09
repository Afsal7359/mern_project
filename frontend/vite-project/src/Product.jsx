import React, { useState } from 'react'
import product1 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/iphone.png"
import product2 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/samsung1.png"
import product3 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/Realme.png"
import product4 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/redme.png"
import product5 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/vivo.png"
import product6 from "C:/Users/DELL/Desktop/project1/frontend/vite-project/src/assets/oneplus.png"

import { Navigate, useNavigate } from 'react-router-dom'
import Iphone from './components/products/Iphone'
import Realme from './components/products/Realme'
import Samsung from './components/products/Samsung'

function Product() { 
    let navigate=useNavigate

    
   // let [id,setid]=useState("")
    const pro = [
        {
            id: 1,
            productName: "i Phones",
            price: "$999.00",
            productImage: product1,
        },
        {
            id: 2,
            productName: "Samsung",
            price: "$999.00",
            productImage: product2,
        },
        {
            id: 3,
            productName: "Realme",
            price: "$999.00",
            productImage: product3,
        },
        {
            id: 4,
            productName: "Redmi",
            price:" $5499.00",
            productImage: product4,
        },
        {
            id: 5,
            productName: "Vivo",
            price: "$5451.54",
            productImage: product5,
        },
        {
            id: 6,
            productName:"Oneplus",
            price: "$899.05",
            productImage: product6,
        },
        // {
        //     id: 7,
        //     productName: "kids wear",
        //     price: "$8499.05",
        //     productImage: product7,
        // },
        // {
        //     id: 8,
        //     productName: "hat",
        //     price: "$599.02",
        //     productImage: product8,
        // },
    ]

    function pic(id){
        if(id==1){
      navigate(`/Iphone`);
        }
        else if(id==2){
            navigate(`/samsung`);
        }
        else if(id==3){
            navigate(`/realme`);
        }
        else if(id==4){
            navigate(`/redmi`)
        }
        else if (id==5){
            navigate(`/vivo`)
        }
        else if (id==6){
            navigate(`/oneplus`)
        }
    }
 
    return (
        
        <div className='ml-5 row'  >
            {pro.map((item) => (
                <div>
                <h1>
                    {/* {item.productName} */}
                </h1>
                <div className='p-1 d-flex' onClick={()=>pic(item.id)}>
            
                <div className="card" style={{ width: "12rem"  }}>
                    <div style={{maxWidth:"100%", maxHeight:"100%"}}>
                    <img className="card-img-top" src={item.productImage } alt="Card image cap" style={{objectFit:"cover",width:"12rem"}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-text">
                            {/* <p>{item.price}</p> */}
                           
                        </p>
                        {/* <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a> */}
                       
    
                    </div>
                </div>
                </div>
                </div>
            ))}
          
            
        </div>
    )
};

export default Product