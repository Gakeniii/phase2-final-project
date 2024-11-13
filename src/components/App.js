import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs'
import PatientCard from './PatientCard';
import PatientDetail from './PatientDetail';
import UpdatePatient from './UpdatePatient';
import AddPatient from './AddPatient';
import Footer from './Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/patients" element={<PatientCard />} />
        <Route path="/patients/:id" element={<PatientDetail />} />
        <Route path="/patients/:id/edit" element={<UpdatePatient />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes> <br></br>
      <Footer />
    </div>
  )
};

export default App;