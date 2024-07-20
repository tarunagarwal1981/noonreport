import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function VesselList() {
  const [vessels, setVessels] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchVessels();
  }, []);

  const fetchVessels = async () => {
    const { data, error } = await supabase.from('vessels').select('*');
    if (error) console.error('Error fetching vessels:', error);
    else setVessels(data);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredVessels = vessels.filter((vessel) =>
    vessel.vessel_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Vessel List</h1>
      <input
        type="text"
        placeholder="Filter by vessel name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredVessels.map((vessel) => (
          <li key={vessel.id}>
            {vessel.imo_number} - {vessel.vessel_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VesselList;

