import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import ReadTime from '../ReadTime/ReadTime';

const Bookmarks = ({ bookmarks }) => {  
    return (
        <div className=' bg-gray-300 p-4 rounded-2xl' >
            <h3 className='text-2xl font-bold mb-4'>Bookmarked Blogs: {bookmarks.length}</h3>
            <div className='space-y-4'>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark} />)
                }
            </div>
        </div>
    );
};

export default Bookmarks;