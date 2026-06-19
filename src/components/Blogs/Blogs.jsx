import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmark}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className='md:w-2/3'>
            <h2 className='text-2xl font-bold mb-4'>Blogs: {blogs.length}</h2>
            <div className='space-y-7'>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;