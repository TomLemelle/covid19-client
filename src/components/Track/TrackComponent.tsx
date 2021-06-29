import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const TrackComponent = () => {

    interface countryInterface {
        country_code: string,
        location: string,
        confirmed: string,
        dead: string,
        recovered: number,
        updated: string
    }

    const [country, setCountry] = useState<[]>([]);
    const [dataLabel, setDataLabel] = useState<boolean>(false);

    const fetchData = async (e: string) => {
        if(e.length === 2) {
            const dataObject = await axios.get(process.env.REACT_APP_TRACK + `/${e}`);
            setCountry(dataObject.data.data);
            setDataLabel(true);
        } else setDataLabel(false);
    };

    return (
        <section className="track-component">
            <p>{dataLabel ? 'Here is the country data:' : 'Please choose a country code'}</p>
            <input type="text" className="track-input" onChange={(e) => fetchData(e.target.value)} />

            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Country code</th>
                            <th>Location</th>
                            <th>Confirmed case</th>
                            <th>Dead</th>
                            <th>Recovered</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>

                    <tbody>
                    
                    {country.map((item: countryInterface) =>
                        <tr key={item.country_code}>
                        <td>{item.country_code}</td>
                        <td>{item.location}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.dead}</td>
                        <td>{item.recovered}</td>
                        <td>{new Date(item.updated).toLocaleString()}</td>
                        </tr>
                    )}
                        
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TrackComponent;