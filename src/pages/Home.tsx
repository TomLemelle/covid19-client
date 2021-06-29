import React from 'react';
import Navigation from '../components/Nav/Navigation';
import HeroBanner from '../components/HeroBanner';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <HeroBanner />
            <Services />
        </div>
    );
};

export default Home;