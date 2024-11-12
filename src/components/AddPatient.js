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
    
    fetch('https://json-server-template-5kcv.onrender.com/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPatient)
    }).then(() => navigate('/patients'));
  };

  return (
    <>
      <h2 id='form-h2'>Add New Patient</h2>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label> Patients Name: </label>
            <input type="text" placeholder="Patients Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label> Previous appointment: </label>
            <input type="date" value={previousAppointment} onChange={(e) => setPreviousAppointment(e.target.value)} required />
          <label> Next appointment: </label>
            <input type="date" value={nextAppointment} onChange={(e) => setNextAppointment(e.target.value)} required />
          <label>Notes:</label>
            <textarea rows="5">Write notes here ...</textarea>
          <center>
            <button id='submit' type="submit">Add Patient</button>
          </center>
        </form>
    </div>
    </>
  );
};

export default AddPatient;