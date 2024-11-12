import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddPatient = () => {
  const [name, setName] = useState('');
  const [previousAppointment, setPreviousAppointment] = useState('');
  const [nextAppointment, setNextAppointment] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { name, previousAppointment, nextAppointment, diagnosis, notes };
    
    fetch('https://json-server-template-5kcv.onrender.com/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPatient)
    }).then(() => navigate('/patients'));
  };

  return (
    <>
      <h2 id='form-h2' className="form-header">Add New Patient</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="patient-form">
          <label>Patients Name:</label>
          <input 
            type="text" 
            placeholder="Patient's Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="input-field" 
          />
          
          <label>Previous Appointment:</label>
          <input 
            type="date" 
            value={previousAppointment} 
            onChange={(e) => setPreviousAppointment(e.target.value)} 
            required 
            className="input-field" 
          />
          
          <label>Next Appointment:</label>
          <input 
            type="date" 
            value={nextAppointment} 
            onChange={(e) => setNextAppointment(e.target.value)} 
            required 
            className="input-field" 
          />

          <label>Diagnosis:</label>
          <input
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Patient's Diagnosis"
            required
            className="input-field"
          />
          
          <label>Notes:</label>
          <textarea 
            rows="5" 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write notes here..." 
            className="textarea-field" 
          ></textarea>
          
          <center>
            <button id="submit" type="submit" className="submit-button">Add Patient</button>
          </center>
        </form>
      </div>
    </>
  );
};

export default AddPatient;