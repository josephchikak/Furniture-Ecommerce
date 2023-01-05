import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import New from "./Components/New/New";
import About from "./Components/About/About";
import {commerce} from './lib/Commerce'
import { 
        Routes,
         Route,
        } from "react-router-dom";
import Products from "./Components/Products/Products";
import Products2 from "./Components/Products/Products2";
import Navbar from "./Components/Home/Navbar";
import Cart from "./Components/cart/Cart";
import gsap from "gsap";



export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalItems, setTotalItems] = useState();

  const fetchCart = async () =>{
    try {
      const res = await commerce.cart.retrieve();
      setTotalItems(res.total_items)
      setCart(res); 
        }
    catch (error){
        console.log(error)
    }
  }

  const fetchProducts = async () =>{
    try{
      const {data} = await commerce.products.list();
      setProducts(data);
    }
    catch (error){
      console.log(error)
    }
  } 

  const emptyCart = async () =>{
    const empty = await commerce.cart.empty();
    setCart(empty)
  }
  

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    gsap.from('#badge', {scale: 2, duration:1} )
    setCart(item)
    setTotalItems(item.total_items)

  }

  const handleCartUpdate = async (productID, quantity) =>{
    const {cart} = await commerce.cart.update(productID, {quantity})
    setCart(cart)
  } 

  const handleRemove = async (productID) =>{
    const {cart} = await commerce.cart.remove(productID);
    setCart(cart)
  }

  useEffect(() => {
      emptyCart();
      fetchProducts();
      fetchCart();
  },[])


return (
    <div>
      <Navbar totalItems = {totalItems}/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/chairs" element={<Products onAddToCart = {handleAddToCart} products={products}/>}/>
        <Route path="/sofas" element={<Products2 onAddToCart = {handleAddToCart} products={products}/>}/>
        <Route path="/cart" element={<Cart cart = {cart} 
            handleCartUpdate = {handleCartUpdate}
            handleRemove ={handleRemove}
            emptyCart = {emptyCart}/> } />
      </Routes>
    </div>
  );
}
