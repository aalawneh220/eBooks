
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Card from './Card';
import Data from './Data.json'
import Search from './Search';
import { useEffect, useState } from 'react';

function App() {
  const [bookData , setBookData]= useState([])
  useEffect(
    ()=>{
      setBookData(Data.eBooks)
    },[]
  )
  const handlesearch=(e)=>{
    const searchData=Data.eBooks.filter((book)=>{
      return book.language.toLowerCase().includes(e.toLowerCase())
    })
    setBookData(searchData)
  }
  const handlefilter=(e)=>{
    const price=e.split('-')
    const searchData=Data.eBooks.filter((book)=>{
      return book.price>=price[0]&&book.price<=price[1]
    })
    setBookData(searchData)
  }
  return (
    <div >
      <Nav />
      <Home />
      <div className='w-25'>
      <Search  searchfun ={handlesearch} filterfun={handlefilter}/>
      </div>
      <div className='d-flex m-5 flex-wrap  '>
        
        
      <Card books={bookData}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
