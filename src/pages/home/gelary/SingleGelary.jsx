import React from 'react';

const SingleGelary = ({picture}) => {
    const {url} = picture
    return (
        <div>
            <div className="card w-full  bg-base-100 shadow-xl">
                <figure><img src={url} className='w-full h-64' alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default SingleGelary;