import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/patients">Patients</Link>
    <Link to="/add-patient">Add Patient</Link>
  </nav>
);

export default Navbar;