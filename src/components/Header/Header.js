import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import CustomLink from '../CustomLink/CustomLink';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Review from '../Review/Review';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' element={<Home />}></Link>
            <CustomLink to='/home' element={<Home />}>HOME</CustomLink>
            <CustomLink to='/review' element={<Review />}>REVIEW</CustomLink>
            <CustomLink to='/dashboard' element={<Dashboard />}>DASHBOARD</CustomLink>
            <CustomLink to='/blogs' element={<Blogs />}>BLOGS</CustomLink>
            <CustomLink to='/about' element={<About />}>ABOUT</CustomLink>
        </div>
    );
};

export default Header;