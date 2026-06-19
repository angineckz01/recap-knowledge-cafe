import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleReadTime }) => {
    const {id, title, cover, author, author_img, hashtags, posted_date, reading_time} = blog;
    return (
        <div>
            <img className='w-full object-cover' src={cover} alt={title} />
            {/* Author Basic Information here */}
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt={author} />
                    <div>
                        <p className='font-bold'>{author}</p>
                        <p className='text-sm text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p>{reading_time} min read</p>
                    <span onClick={() => handleBookmark(blog)} className='text-2xl'><FaBookmark /></span>
                </div>
            </div>
            {/* Blog Title here */}
            <h3 className='text-3xl font-bold'>{title}</h3>
            {/* Blog Tags here */}
            <div>
                { 
                    hashtags.map((hash, idx) => <a className='mr-2 text-blue-500 hover:text-blue-700'
                    key={idx}>#{hash}</a>)
                }
            </div> 
            {/* Mark As Read here */}
            <button
                onClick={() => handleReadTime(id, reading_time)}
                className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                Mark as Read
            </button>

        </div>
    );
};

export default Blog;