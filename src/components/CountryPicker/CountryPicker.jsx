import React, {  useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import style from './countryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries() );
        }
        fetchAPI()
    },[setFetchedCountries]);

  


    return (
       <FormControl className={style.formControl}>
           <NativeSelect defaultValue=""  onChange={(e) => handleCountryChange(e.target.value) } >
               <option value="global"> Global </option>
               
                   {fetchedCountries.map((country, i) => <option key={i} value={country.name} >{country.name}</option> )}
               
           </NativeSelect>
       </FormControl>

    )
}

export default CountryPicker