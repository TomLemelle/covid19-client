import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const VaccineComponent = () => {

    interface apiInterface {
        gid: string
        nom: string
        metadata: {
            address: string
        },
        departement: number
        url: string
    }

    const [dataLabel, setDataLabel] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);

    const handleDepartment = (department: number) => {
        if(department >= 10 && department <= 95) {
            axios.get(`https://vitemadose.gitlab.io/vitemadose/${department}.json`)
                .then(res => {
                    setData(res.data.centres_disponibles);
                    setDataLabel(true);
                });
        } else if(department > 100) setDataLabel(false);
        
    }

    console.log(data);

    return (
        <section className="vaccine-component">

            <p>{dataLabel ? 'Here is the list:' : 'Please choose a number between 10 & 95'}</p>
            <input type="text" placeholder="Your department" className="department-input" onChange={(e) => handleDepartment(+e.target.value)}/>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Url</th>
                    </tr>
                </thead>

                <tbody>
                   
                   {data.map((item: apiInterface) =>
                    <tr key={item.gid}>
                       <td>{item.nom}</td>
                       <td>{item.metadata.address}</td>
                       <td>{item.departement}</td>
                       <td><a href={item.url}>Visit</a></td>
                    </tr>
                   )}
                    
                </tbody>
                
                
            </table>
        </section>
    );
};

export default VaccineComponent;