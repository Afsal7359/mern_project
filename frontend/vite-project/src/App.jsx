import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom/dist'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Navabar from './components/Navabar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Product from './Product'
import Mobiles from './components/products/Iphone'
import{ useState} from 'react'
import Laptops from './components/products/Redmi'
import Iphone from './components/products/Iphone'

import Samsung from './components/products/Samsung'
import Realme from './components/products/Realme'
import Redmi from './components/products/Redmi'
import Vivo from './components/products/Vivo'
import Oneplus from './components/products/Oneplus'
import AdminloginPage from './components/adminlogin'
import Adminpage from './Pages/Adminpage'


function App() {
  // const {pro}= data;
  // const{cartItems,setcartItems}=useState([]);

  // const handleAddProduct = (product)=> {
  //   const productExist = cartItem.find((item)=>item.id===product.id);
  //   if(productExist){
  //     setcartItems(cartItems.map((item) => item.id === product.id))
  //   }
  // }
  return (
    <div>
        <BrowserRouter>
        <Navabar></Navabar>
            <Routes>
                <Route exact path='/p' element={<Shop></Shop>}/>
                <Route exact path='/cart' element={<Cart></Cart>}/>
                <Route exact path='/pro' element={<Product/>}/>
                <Route exact path='/' element={<Register></Register>}></Route>
                <Route exact path='/nav' element={<Navabar></Navabar>}></Route>
                <Route exact path='/Login' element={<Login></Login>}></Route>
                <Route exact path='/Iphone' element={<Iphone></Iphone>}></Route>
                <Route exact path='/Realme' element={<Realme></Realme>}></Route>
                <Route exact path='/samsung' element={<Samsung></Samsung>}></Route>
                <Route exact path='/redmi' element={<Redmi></Redmi>}></Route>
                <Route exact path='/vivo' element={<Vivo></Vivo>}></Route>
                <Route exact path='/oneplus' element={<Oneplus></Oneplus>}></Route>
                <Route exact path='/admin' element={<AdminloginPage></AdminloginPage>}></Route>
                <Route exact path='/adminpage' element={<Adminpage></Adminpage>}></Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App