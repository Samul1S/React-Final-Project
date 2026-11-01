import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/contacts" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact List</Link>
      <Link to="/add" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Add Contact</Link>
    </nav>
  );
}