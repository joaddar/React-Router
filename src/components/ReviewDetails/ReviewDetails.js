import React from 'react';
import './ReviewDetails.css';
import { StarIcon } from '@heroicons/react/solid'

const ReviewDetails = (props) => {
    const { img, name, price, brandName } = props.products;
    return (
        <div className='details'>
            <img src={img} alt="" />
            <h2 className=' text-blue-800 text-xl font-bold'>{name}</h2>
            <h2 className=' text-gray-500 text-2xl font-bold'>BRAND: {brandName}</h2>
            <h2>rating:{StarIcon}</h2>
            <h2 className=' text-red-500 text-3xl font-bold'> $ {price}</h2>
        </div>
    );
};

export default ReviewDetails;