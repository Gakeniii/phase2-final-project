import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PatientList from './PatientList';
import PatientDetail from './PatientDetail';
import AddPatient from './AddPatient';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/patients/:id" element={<PatientDetail />} />
      <Route path="/add-patient" element={<AddPatient />} />
    </Routes>
  </>
);

export default App;