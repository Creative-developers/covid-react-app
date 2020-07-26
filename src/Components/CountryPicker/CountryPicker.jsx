import React,{ useState, useEffect }  from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker  =  ({ handleCountryChange }) => {
    
    const[fetchedCountries,setFetchedCountries] = useState([]);

    useEffect( () =>{
        const FetchedData = async () => {
            setFetchedCountries( await fetchCountries() );
        }

        FetchedData();  
    },[setFetchedCountries]);

    // console.log(fetchedCountries);

    return (
       <div>
           <FormControl className={styles.formControl}>
                  <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}> 
                      <option value="">Global</option>
                      {fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}
                  </NativeSelect>
           </FormControl>
       </div>
     );
}

export default CountryPicker; 
