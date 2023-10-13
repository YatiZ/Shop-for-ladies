import Select from 'react-select';
import React, { useEffect, useState } from 'react'

const UserAddress = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    useEffect(()=>{
        fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
        .then((response=>response.json()))
        .then((data)=>{
            setCountries(data.countries)
            setSelectedCountry(data.userSelectValue);
        });
    },[]);
   
  return (
    <Select options={countries}
    value={selectedCountry}
    onChange={(selectedOption) => setSelectedCountry(selectedOption)}/>
  )
}

export default UserAddress