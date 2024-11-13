import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://json-server-template-5kcv.onrender.com/patients')
      .then(response => response.json())
      .then(data => setPatients(data));
  }, []);

   const searchPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    {/* DISPLAY CARDS */}
      <div id='patient-info'>
        <h2 id='info'>Patients</h2>
        <div className="card-container">
          {patients.map(patient => (
            <div className="patient-card" key={patient.id}>
              <div className="card-header">
                <h3>{patient.name}</h3>
              </div>
              <div className="card-body">
                {/* specify if urgent or not */}
                <p>{patient.diagnosis}</p>
                <Link to={`/patients/${patient.id}`} className="view-details-link">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEARCH FUNCTIONALITY */}
        <div id='patient-info'>
          <h2 id='info'>Patients</h2>
          <Search handleSearch={setSearch} />
          <div className="card-container">
            {filteredPatients.length > 0 ? (
              filteredPatients.map(patient => (
                <div className="patient-card" key={patient.id}>
                  <div className="card-header">
                    <h3>{patient.name}</h3>
                  </div>
                  <div className="card-body">
                    <p>{patient.diagnosis}</p>
                    <Link to={`/patients/${patient.id}`} className="view-details-link">View Details</Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No patients found</p>
            )}
          </div>
      </div>


      <br/><br/><br/><br/>

    </>
  );
};

export default PatientList;