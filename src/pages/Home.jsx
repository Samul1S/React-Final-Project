export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Contact Manager SPA</h1>
      <p>This single-page application is built with React and React Router.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>🏠 Home</h3>
          <p>This current view. Provides an overview of the application and describes its features.</p>
        </div>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>👥 Contact List</h3>
          <p>Displays all saved contacts. You can view, edit, and delete contacts here. Clicking a name opens the dynamic Contact Details view.</p>
        </div>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>➕ Add Contact</h3>
          <p>A form to add new contacts to the state. It uses controlled components and redirects back to the list upon submission.</p>
        </div>
        <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>🔍 Contact Details</h3>
          <p>A dynamic route (<code>/contacts/:id</code>) that displays full information for a specific contact using the URL parameter.</p>
        </div>
      </div>
    </div>
  );
}