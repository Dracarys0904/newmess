// import React, { useState, useEffect } from 'react';
// import ComplaintItem from '../../components/ComplaintItem/ComplaintItem';
// import './Manager.css';

// function Manager() {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     loadComplaints();
//   }, []);

//   const loadComplaints = () => {
//     // Implement API call to fetch complaints; mock data for now
//     setComplaints([
//       { id: 1, complaint: 'Complaint 1', resolved: false, action: '' },
//       { id: 2, complaint: 'Complaint 2', resolved: true, action: '' }
//     ]);
//   };

//   const toggleResolved = (id) => {
//     setComplaints(complaints.map(c => c.id === id ? { ...c, resolved: !c.resolved } : c));
//   };

//   const handleActionChange = (id, action) => {
//     setComplaints(complaints.map(c => c.id === id ? { ...c, action } : c));
//   };

//   return (
//     <div className="Manager-container">
//       <h2>Manager Portal</h2>
//       <div>
//         {complaints.map(c => (
//           <ComplaintItem
//             key={c.id}
//             complaint={c}
//             toggleResolved={toggleResolved}
//             handleActionChange={handleActionChange}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Manager;

// import React, { useState } from 'react';
// import './Student.css'; // Import the CSS file

// const StudentLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     campus: '',
//     mess: '',
//     date: '',
//     name: '',
//     phone: '',
//     collegeClass: '',
//     cleanEnvironment: '',
//     pestControl: '',
//     protocols: '',
//     complaints: '',
//     suggestions: '',
//     complaintCategory: '',
//     photo: null,
//     mealTime: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to server)
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </label>

//       <label>
//         Select Campus:
//         <select name="campus" value={formData.campus} onChange={handleChange} required>
//           <option value="">Select Campus</option>
//           <option value="Vadgaon-Ambegaon">Vadgaon-Ambegaon</option>
//           <option value="Warje">Warje</option>
//           <option value="Narhe">Narhe</option>
//           <option value="Kondhwa">Kondhwa</option>
//           <option value="Lonavla">Lonavla</option>
//         </select>
//       </label>

//       <label>
//         Select Mess:
//         <select name="mess" value={formData.mess} onChange={handleChange} required>
//           <option value="">Select Mess</option>
//           <option value="mess1">Mess 1</option>
//           <option value="mess2">Mess 2</option>
//         </select>
//       </label>

//       <label>
//         Date:
//         <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//       </label>

//       <label>
//         Name of the Student:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </label>

//       <label>
//         Phone Number:
//         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//       </label>

//       <label>
//         College Name and Class:
//         <input type="text" name="collegeClass" value={formData.collegeClass} onChange={handleChange} required />
//       </label>

//       <label>
//         Clean and Hygienic Environment in Dining Hall:
//         <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, cleanEnvironment: 'No' })}>No</button>
//       </label>

//       <label>
//         Pest Control Done in Dining Hall:
//         <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, pestControl: 'No' })}>No</button>
//       </label>

//       <label>
//         Food Handlers Following Protocols:
//         <button type="button" onClick={() => setFormData({ ...formData, protocols: 'Yes' })}>Yes</button>
//         <button type="button" onClick={() => setFormData({ ...formData, protocols: 'No' })}>No</button>
//       </label>

//       <label>
//         Food Related Complaints:
//         <input type="text" name="complaints" value={formData.complaints} onChange={handleChange} required />
//       </label>

//       <label>
//         Suggestions for Improvement:
//         <input type="text" name="suggestions" value={formData.suggestions} onChange={handleChange} required />
//       </label>

//       <label>
//         Category of Complaint:
//         <select name="complaintCategory" value={formData.complaintCategory} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           <option value="food">Food Related</option>
//           <option value="hygiene">Hygiene</option>
//           <option value="space">Lack of Space</option>
//         </select>
//       </label>

//       <label>
//         Meal Time:
//         <select name="mealTime" value={formData.mealTime} onChange={handleChange} required>
//           <option value="">Select Meal Time</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//         </select>
//       </label>

//       <label>
//         Upload Photo (Optional):
//         <input type="file" name="photo" onChange={handleChange} />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default StudentLogin;






// import React, { useState, useEffect } from 'react';
// import './Manager.css';

// function Manager() {
//   const [complaints, setComplaints] = useState([]);
//   const [formData, setFormData] = useState({
//     action: '',
//     photo: null, // For storing selected photo file
//   });

//   useEffect(() => {
//     loadComplaints();
//   }, []);

//   const loadComplaints = () => {
//     // Implement API call to fetch complaints; mock data for now
//     setComplaints([
//       { id: 1, complaint: 'Complaint 1', details: 'Details of complaint 1', status: 'Pending', action: '', photo: null },
//       { id: 2, complaint: 'Complaint 2', details: 'Details of complaint 2', status: 'Pending', action: '', photo: null }
//       // Add more complaints as needed
//     ]);
//   };

//   const handleActionChange = (id, action) => {
//     setComplaints(complaints.map(c => c.id === id ? { ...c, action } : c));
//   };

//   const handlePhotoChange = (e, id) => {
//     const file = e.target.files[0];
//     // Update the photo property of the corresponding complaint
//     setComplaints(complaints.map(c => c.id === id ? { ...c, photo: file } : c));
//   };

//   const onSubmit = (id) => {
//     // Implement API call to submit action and photo for complaint with 'id'
//     console.log(`Action ${formData.action} and photo submitted for complaint ${id}`, formData.photo);
//     // Reset form data after submission if needed
//     setFormData({ action: '', photo: null });
//   };

//   return (
//     <div className="manager-container">
//       <h2>Manager Portal</h2>
//       <div>
//         {complaints.map(c => (
//           <div key={c.id} className="complaint-item">
//             <p>{c.complaint}</p>
//             <p>{c.details}</p>
//             <div>
//               <input
//                 type="text"
//                 value={c.action}
//                 onChange={(e) => handleActionChange(c.id, e.target.value)}
//                 placeholder="Enter action"
//               />
//               <input
//                 type="file"
//                 onChange={(e) => handlePhotoChange(e, c.id)}
//               />
//               <button onClick={() => onSubmit(c.id)}>Submit Action</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Manager;




import React, { useState, useEffect } from 'react';
import './Manager.css';

function Manager() {
  const [complaints, setComplaints] = useState({ pending: [], resolved: [] });
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [actionFormData, setActionFormData] = useState({ action: '', photo: null });

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = () => {
    // Mock data for pending and resolved complaints
    const pending = [
      { id: 1, complaint: 'Complaint 1', details: 'Details of complaint 1', time: '10:00 AM' },
      { id: 2, complaint: 'Complaint 2', details: 'Details of complaint 2', time: '11:30 AM' }
    ];

    const resolved = [
      { id: 3, complaint: 'Complaint 3', details: 'Details of complaint 3', time: '12:15 PM', resolutionTime: '01:00 PM', action: 'Action taken for complaint 3' },
      { id: 4, complaint: 'Complaint 4', details: 'Details of complaint 4', time: '01:30 PM', resolutionTime: '02:45 PM', action: 'Action taken for complaint 4' }
    ];

    setComplaints({ pending, resolved });
  };

  const handleDetailsClick = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleActionChange = (e) => {
    setActionFormData({ ...actionFormData, action: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setActionFormData({ ...actionFormData, photo: file });
  };

  const handleSubmitAction = () => {
    // Implement API call to submit action and photo for selected complaint
    console.log(`Action ${actionFormData.action} and photo submitted for complaint ${selectedComplaint.id}`, actionFormData.photo);

    // Update the complaint in state with the action taken
    const updatedComplaints = complaints.pending.map(c =>
      c.id === selectedComplaint.id ? { ...c, action: actionFormData.action } : c
    );
    setComplaints({ ...complaints, pending: updatedComplaints });

    // Reset action form data
    setActionFormData({ action: '', photo: null });

    // Close details view
    setSelectedComplaint(null);
  };

  const renderComplaintDetails = () => {
    if (!selectedComplaint) return null;

    return (
      <div className="complaint-details">
        <h3>Complaint Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Complaint ID:</td>
              <td>{selectedComplaint.id}</td>
            </tr>
            <tr>
              <td>Details:</td>
              <td>{selectedComplaint.details}</td>
            </tr>
            <tr>
              <td>Action Taken:</td>
              <td>{selectedComplaint.action || 'Pending'}</td>
            </tr>
            {selectedComplaint.resolutionTime && (
              <tr>
                <td>Resolution Time:</td>
                <td>{selectedComplaint.resolutionTime}</td>
              </tr>
            )}
          </tbody>
        </table>
        {complaints.pending.includes(selectedComplaint) && (
          <div className="action-form">
            <label>Action Taken:</label>
            <input
              type="text"
              value={actionFormData.action}
              onChange={handleActionChange}
              placeholder="Enter action taken"
            />
            <input
              type="file"
              onChange={handlePhotoChange}
            />
            <button onClick={handleSubmitAction}>Submit Action</button>
          </div>
        )}
        <button onClick={() => setSelectedComplaint(null)}>Close Details</button>
      </div>
    );
  };

  return (
    <div className="manager-container">
      <h2>Manager Portal</h2>
      <hr />
      <div className="complaints-container">
        <div className="left-column">
          <h3>Pending Complaints</h3>
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.pending.map(complaint => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.time}</td>
                  <td>
                    <button onClick={() => handleDetailsClick(complaint)}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right-column">
          <h3>Resolved Complaints</h3>
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Time</th>
                <th>Resolution Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.resolved.map(complaint => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.time}</td>
                  <td>{complaint.resolutionTime}</td>
                  <td>
                    <button onClick={() => handleDetailsClick(complaint)}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {renderComplaintDetails()}
    </div>
  );
}

export default Manager;
