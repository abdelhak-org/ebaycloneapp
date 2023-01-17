import React, {useEffect, useState}from 'react';
import "./app.css";
import { Navbar  , Header  , Main , Aboutus, Contactus, Footer} from './container';
import {Register , Login, DisplayInfos } from "./components"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import PublishNewAnounce from './components/PublishNewAnounce';
import  axios from "axios"

const App = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
     axios.get("https://fakestoreapi.com/products").then((response)=>{
           console.log(products);
           setProducts(response.data)
     })
    },[products])

    return (
    <div className='App'>
    <Router>

    <Navbar/>
    <Header products ={products}/>
    <Routes>
        <Route exact path='/' element={<Main products={products}/>} />
        <Route exact path='/aboutus' element={< Aboutus/>} />
        <Route exact path='/contactus' element={<Contactus/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path="/infos" element ={<DisplayInfos/>}  />
        <Route exact path="/publish" element ={<PublishNewAnounce/>}  />


    </Routes>
    <Footer/>

    </Router>
    </div>
    )
}

export default App
