import React, {useState, useEffect} from "react";
import { Container } from 'react-bootstrap';
import {County, Constituency, ward } from './County.json'

export const Country = () => {
    const[country, setCountry] = useState([]);

    useEffect( () => {
        const getCountry = async () => {
            const res = await fetch("");
            const getcon = await res.json();

            setCountry(await getcon)
        }
        getCountry();
    })
}
