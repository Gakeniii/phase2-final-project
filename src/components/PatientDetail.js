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
    <div>
      <main>
          <h1>Patients Information</h1>
          <h2>{patient.name}</h2>
          <p>Previous Appointment: {patient.previousAppointment}</p>
          <p>Next Appointment: {patient.nextAppointment}</p>
      </main>
    </div>
  );
};

export default PatientDetail;