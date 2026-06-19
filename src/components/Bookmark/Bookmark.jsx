import React from 'react';

const Bookmark = ({ bookmark }) => {
    return ( 
        <div className='p-4 rounded border bg-white border-gray-300'>
            <h3 className='font-semibold text-xl'>{bookmark.title}</h3>
        </div>   
    );
};

export default Bookmark;