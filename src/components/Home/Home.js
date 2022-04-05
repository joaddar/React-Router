import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setproducts(data[0]))
    }, [])
    const { img } = products;
    return (
        <div>
            <div className='home'>
                <div className=' details'>
                    <h1 className=' text-red-600 font-bold text-3xl '>Here My BADMINTon $Hop </h1>
                    <h1 className=' text-blue-700 font-bold text-3xl '>The Best Product Is Here</h1>
                    <p className=' text-purple-500'>hi friends its me kd, now i am show you my shop, you know whats is important,here area ll products is fake, if you want it you never give us money </p>
                    <button className=' px-6 py-2 text-xl font-bold'>More</button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;