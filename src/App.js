import './db/db.json'
import './App.css';
import React from 'react';
import { getCateg } from './components/fetcher';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProdDetails from './components/ProdDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Categories from './components/Categories';
import Layout from './components/Layout';
import Home from './components/Home';
import Confirmation from './components/Confirmation';
import SearchResults from './components/SearchResults';

function App() {
  const [categ, setcateg] = React.useState({errmsg:'',data:[]});


  React.useEffect(() =>{
    const fetcherData= async()=>{
     const respObj= await getCateg();
      setcateg(respObj);
    }
    fetcherData();
  
  },[])
  return (
   <>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Layout categ={categ}/>}>
      <Route path='Cart' element={<Cart />}/>
      <Route path='Checkout' element={<Checkout />}/>
      <Route path='Confirmation' element={<Confirmation />}/>
      <Route index element={<Home/>} />
      <Route path='search' element={<SearchResults/>}/>
      <Route path='Categories/:categoryId' element={ <Categories/>}/>
      <Route path='Products/:productId' element={<ProdDetails />}/>
    </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
