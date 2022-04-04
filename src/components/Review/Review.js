import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'

const Review = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className='products'>
            {
                products.map(products => <ReviewDetails
                    products={products}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default Review;