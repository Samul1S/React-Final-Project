import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/Notfound';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import { initialContacts } from './data/initialContacts';

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/contacts" 
          element={<ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />} 
        />
        <Route 
          path="/contacts/:id" 
          element={<ContactDetails contacts={contacts} />} 
        />
        <Route 
          path="/add" 
          element={<AddContact onAdd={addContact} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;