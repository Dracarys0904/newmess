import React, { useState, useEffect } from 'react';
import './Supervisor.css';

function Supervisor() {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({
    action: '',
    photo: null, // For storing selected photo file
  });

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = () => {
    // Implement API call to fetch complaints; mock data for now
    setComplaints([
      { id: 1, complaint: 'Complaint 1', details: 'Details of complaint 1', status: 'Pending', action: '', photo: null },
      { id: 2, complaint: 'Complaint 2', details: 'Details of complaint 2', status: 'Pending', action: '', photo: null }
      // Add more complaints as needed
    ]);
  };

  const handleActionChange = (id, action) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, action } : c));
  };

  const handlePhotoChange = (e, id) => {
    const file = e.target.files[0];
    // Update the photo property of the corresponding complaint
    setComplaints(complaints.map(c => c.id === id ? { ...c, photo: file } : c));
  };

  const toggleStatus = (id) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: c.status === 'Pending' ? 'Resolved' : 'Pending' } : c));
  };

  const onSubmit = (id) => {
    // Implement API call to submit action and photo for complaint with 'id'
    console.log(`Action ${formData.action} and photo submitted for complaint ${id}`, formData.photo);
    // Reset form data after submission if needed
    setFormData({ action: '', photo: null });
  };

  return (
    <div className="supervisor-container">
      <h2>Supervisor Portal</h2>
      <div>
        {complaints.map(c => (
          <div key={c.id} className="complaint-item">
            <p>{c.complaint}</p>
            <p>{c.details}</p>
            <p>Status: {c.status}</p>
            <div>
              <input
                type="text"
                value={c.action}
                onChange={(e) => handleActionChange(c.id, e.target.value)}
                placeholder="Enter action"
              />
              <input
                type="file"
                onChange={(e) => handlePhotoChange(e, c.id)}
              />
              <button onClick={() => toggleStatus(c.id)}>
                {c.status === 'Pending' ? 'Mark as Resolved' : 'Mark as Pending'}
              </button>
              <button onClick={() => onSubmit(c.id)}>Submit Action</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supervisor;
