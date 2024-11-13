import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs'
import PatientList from './PatientList';
import PatientDetail from './PatientDetail';
import AddPatient from './AddPatient';
import Footer from './Footer'

function App() {
  return (
      <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/patients/:id" element={<PatientDetail />} />
      <Route path="/add-patient" element={<AddPatient />} />
    </Routes> <br></br>
    <Footer />
  </div>
  )
};

export default App;