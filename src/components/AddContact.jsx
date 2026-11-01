import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddContact({ onAdd }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...formData,
      id: Date.now().toString() // Luodaan uniikki ID aikaleimasta
    };
    onAdd(newContact);
    navigate('/contacts'); // Ohjataan onnistuneen lisäyksen jälkeen listaan
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="text" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleChange} style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Add Contact</button>
      </form>
    </div>
  );
}