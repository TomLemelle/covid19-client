import React from 'react';
import Navigation from '../components/Nav/Navigation';

const Attestation = () => {
    return (
        <>
            <Navigation />

            <div className="attestation-component">
                <h3>Here is the link to create an attestation</h3>
                <a href="https://media.interieur.gouv.fr/attestation-deplacement-derogatoire-covid-19/" target="_blank" rel="noreferrer">Create</a>
            </div>
        </>
    );
};

export default Attestation;