

import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 

  return (
    <>
      
      <h1 className="text-3xl">Viteccc + React</h1>
      
      <Header></Header>
      <div className='md:flex' >
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

      
    </>
  )
}

export default App
