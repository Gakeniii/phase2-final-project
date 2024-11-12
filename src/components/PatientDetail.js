import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const PatientDetail = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch(`https://json-server-template-5kcv.onrender.com/patients/${id}`)
      .then(response => response.json())
      .then(data => setPatient(data));
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="patient-detail-container">
      <main className="patient-detail-main">
          <h1 className="patient-detail-heading">Patient Information</h1>
          <h2 className="patient-name">{patient.name}</h2>
          <p className="appointment-info"><strong>Previous Appointment:</strong> {patient.previousAppointment}</p>
          <p className="appointment-info"><strong>Next Appointment:</strong> {patient.nextAppointment}</p>
          {/* <p className="diagnosis-info"><strong>DIAGNOSIS:</strong> {patient.diagnosis}</p>
          <p className="patients-notes"><h4>Notes:</h4> {patient.notes}</p> */}
      </main>
    </div>
  );
};

export default PatientDetail;