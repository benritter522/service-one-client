import ProfileCard from '../ProfileCard';
import React, { useEffect, useState } from 'react';


function ListView() {

  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
      try {
          const response = await fetch('https://villagr.herokuapp.com/api/VA?page=1&limit=1000')
          const data = await response.json();
          // console.log(data.data);
          setLocations(data.data);
      } catch(error) {
          console.error(error);
      }
  }
  useEffect(() => {
      fetchLocations();
  }, []);


  return locations ? (
    <div>
      {locations.map((selected, index) => (
        <ProfileCard
          key={index}
          business_name={selected.business_name}
          street_address={selected.street_address}
          city={selected.city}
          state={selected.state}
          zip_code_first5={selected.zip_code_first5}
          lat_long={selected.lat_long}
          loan_size_rank_by_state={selected.loan_size_rank_by_state}
        />
      ))}
    </div>
  ) : <p>Loading...</p>
}



export default (ListView);
