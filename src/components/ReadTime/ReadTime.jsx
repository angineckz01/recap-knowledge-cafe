import React from 'react';

const ReadTime = ({ readTime }) => {
    return (
        <div className='mb-4'>
            <h2 className='text-violet-600 font-bold bg-gray-200 p-3 rounded-xl border border-violet-400'>
                Spent Time on Read: {readTime} minutes</h2>
        </div>
    );
};

export default ReadTime;