import React from 'react';
import covidLogoHeroBanner from '../../assets/covidLogoHeroBanner.png';


const HeroBanner = () => {
    return (
        <section className="herobanner">
            <ul className="list-herobanner">
                <li>
                    <h1>Help for <span>covid19</span></h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, repudiandae eaque 
                        excepturi sint incidunt totam necessitatibus labore deserunt aspernatur et porro iusto 
                        sapiente error quos consequatur vero rerum, quibusdam deleniti?
                    </p>
                    <div className="covidtracker"><a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noreferrer">Explore CovidTracker</a></div>
                </li>
                <li>
                    <img src={covidLogoHeroBanner} alt="logo du covid19" />
                </li>
            </ul>
        </section>
    );
};

export default HeroBanner;