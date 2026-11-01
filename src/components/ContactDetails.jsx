import { useParams, Link } from 'react-router-dom';

export default function ContactDetails({ contacts }) {
  const { id } = useParams(); 
  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Contact not found!</h2>
        <Link to="/contacts">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Details</h2>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#f9f9f9' }}>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Address:</strong> {contact.address}</p>
      </div>
      <br />
      <Link to="/contacts" style={{ textDecoration: 'none', color: '#1a0dab', fontWeight: 'bold' }}>← Back to Contact List</Link>
    </div>
  );
}