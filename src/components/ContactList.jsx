import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactList({ contacts, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', phone: '', email: '', address: '' });

  const handleEditClick = (contact) => {
    setEditingId(contact.id);
    setEditForm(contact);
  };

  const handleSave = () => {
    onEdit(editForm);
    setEditingId(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact List</h2>
      {contacts.length === 0 ? <p>No contacts found.</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contacts.map(contact => (
            <li key={contact.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              
              {/* EDIT MODE */}
              {editingId === contact.id ? (
                <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                  <input type="text" value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} />
                  <input type="text" value={editForm.phone} onChange={(e) => setEditForm({...editForm, phone: e.target.value})} />
                  <input type="text" value={editForm.email} onChange={(e) => setEditForm({...editForm, email: e.target.value})} />
                  <input type="text" value={editForm.address} onChange={(e) => setEditForm({...editForm, address: e.target.value})} />
                  <button onClick={handleSave} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px' }}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              ) : (
                /* VIEW MODE */
                <>
                  <span style={{ flex: 1 }}>
                    <Link to={`/contacts/${contact.id}`} style={{ fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', color: '#1a0dab' }}>
                      {contact.name}
                    </Link> 
                    <span style={{ marginLeft: '15px', color: '#555' }}>{contact.phone}</span>
                  </span>
                  <div>
                    <button onClick={() => handleEditClick(contact)} style={{ marginRight: '10px', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => onDelete(contact.id)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}