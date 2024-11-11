import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [previousAppointment, setPreviousAppointment] = useState('');
  const [nextAppointment, setNextAppointment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { name, previousAppointment, nextAppointment };
    
    fetch('http://localhost:5000/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPatient)
    }).then(() => navigate('/patients'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Patient</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="date" value={previousAppointment} onChange={(e) => setPreviousAppointment(e.target.value)} required />
      <input type="date" value={nextAppointment} onChange={(e) => setNextAppointment(e.target.value)} required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatient;