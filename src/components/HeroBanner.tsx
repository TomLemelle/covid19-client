import React from 'react';
import covidLogo from '../assets/covidLogo.jpg';


const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <ul className="list-herobanner">
                <li>
                    <img src={covidLogo} alt="logo du covid19" />
                </li>
                <li>
                    <h1>Help for covid19</h1>
                </li>
                <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, repudiandae eaque 
                    excepturi sint incidunt totam necessitatibus labore deserunt aspernatur et porro iusto 
                    sapiente error quos consequatur vero rerum, quibusdam deleniti?
                </li>
                <li>
                    <a href="https://vitemadose.covidtracker.fr/">Explore CovidTracker</a>
                </li>
            </ul>
        </section>
    );
};

export default HeroBanner;