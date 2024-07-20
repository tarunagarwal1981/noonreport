import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function AddVessel() {
  const [formData, setFormData] = useState({ imo_number: '', vessel_name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('vessels').insert([formData]);
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted:', data);
    }
  };

  return (
    <div>
      <h1>Add Vessel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="imo_number"
          placeholder="IMO Number"
          value={formData.imo_number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vessel_name"
          placeholder="Vessel Name"
          value={formData.vessel_name}
          onChange={handleChange}
        />
        <button type="submit">Add Vessel</button>
      </form>
    </div>
  );
}

export default AddVessel;
