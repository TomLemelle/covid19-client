import React from 'react';
import { NavLink } from 'react-router-dom';
import vaccine from '../assets/vaccine.png';
import track from '../assets/track.png';
import attestation from '../assets/attestation.png';


interface ServicesInterface {
    img?: string
    vaccine?: string,
    tracks?: string,
    attestation?: string,
    click?: string,
    service?: any
}

const Service = (props: ServicesInterface) => {
    return (
        <div className="service">
            <div className="img-service">
                <img src={props.img} alt="logo du covid19" />
            </div>
            <h3>{props.vaccine || props.tracks || props.attestation}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, 
                Accusamus quod deserunt, iure quae odio. 
                Similique rem deleniti soluta mollitia.
            </p>
            <div className="link-service">
                <NavLink exact to={"/" + props.service}>
                    {props.click}
                </NavLink>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <section className="services">
            <h1>Services</h1>

            <div className="wrapper-service">
                <Service img={vaccine} vaccine="Vaccine" service="vaccine" click="Visit" />
                <Service img={track} tracks="Track covid19 data" service="tracks" click="Visit"/>
                <Service img={attestation} attestation="Make an attestation" service="attestation" click="Visit"/>
            </div>
            
        </section>
    );
};

export default Services;