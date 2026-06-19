import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import ReadTime from './components/ReadTime/ReadTime'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    if(!bookmarks.includes(blog)){
      setBookmarks([...bookmarks, blog]);
      // console.log('Bookmarked:', blog);
    }
  }

  const handleReadTime = (id, time) => {
    console.log(`read ${time} minutes`);
    setReadTime(readTime + time);
    // remove specific item based on id from bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex gap-6'>
        <Blogs 
            handleBookmark={handleBookmark}
            handleReadTime={handleReadTime}
            ></Blogs>
        <div className='md:w-1/3'>
            <ReadTime readTime={readTime}></ReadTime>
            <Bookmarks
              bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
