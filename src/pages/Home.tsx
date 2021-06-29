import React from 'react';
import Navigation from '../components/Nav/Navigation';
import HeroBanner from '../components/Home/HeroBanner';
import Services from '../components/Home/Services';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroBanner />
            <Services />
        </>
    );
};

export default Home;