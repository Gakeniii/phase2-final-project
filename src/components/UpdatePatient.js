import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    diagnosis: '',
    nextAppointment: '',

  });

  useEffect(() => {
    fetch(`https://json-server-template-5kcv.onrender.com/patients/${id}`)
      .then(response => response.json())
      .then(data => setPatient(data))
      .catch(error => console.error('Error fetching patient details:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://json-server-template-5kcv.onrender.com/patients/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    })
      .then(response => {
        if (response.ok) {
          alert('Patient information updated successfully!');
          navigate(`/patients/${id}`);
        } else {
          throw new Error('Failed to update patient information.');
        }
      })
      .catch(error => console.error('Error updating patient:', error));
  };

  return (
    <div className="update-patient-container">
      <h2>Update Patient Information</h2>
      <form onSubmit={handleSubmit} className="update-patient-form">
        
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
            className="form-group"
          />
        
          <label>Diagnosis:</label>
          <input
            type="text"
            name="diagnosis"
            value={patient.diagnosis}
            onChange={handleChange}
            required
            className="form-group"
          />

          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={patient.age}
            onChange={handleChange}
            required
            className="form-group"
          />

        <button type="submit" className="update-button">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdatePatient;
