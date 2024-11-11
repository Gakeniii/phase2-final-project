import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('https://json-server-template-5kcv.onrender.com/patients')
      .then(response => response.json())
      .then(data => setPatients(data));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;