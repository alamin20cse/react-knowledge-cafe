

import { useState } from 'react'
import './App.css'
import Blogs from './Component/blogs/blogs'

import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {


  const [bookmark,setbookmark]=useState([]);
 
const bookmarkHandel=(blog)=>
{
  const newBookmarks=[...bookmark,blog];
  setbookmark(newBookmarks);
}
  return (
    <>
      
      <h1 className="text-3xl">Viteccc + React</h1>
      
      <Header></Header>
      <div className='md:flex' >
      <Blogs bookmarkHandel={bookmarkHandel}></Blogs>
      <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>

      
    </>
  )
}

export default App
