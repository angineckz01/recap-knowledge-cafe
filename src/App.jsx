import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    if(!bookmarks.includes(blog)){
      setBookmarks([...bookmarks, blog]);
      // console.log('Bookmarked:', blog);
    }
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex gap-6'>
        <Blogs 
            handleBookmark={handleBookmark}></Blogs>
        <Bookmarks 
            bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
