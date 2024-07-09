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






import React, { useState, useEffect } from 'react';
import './Manager.css';

function Manager() {
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
    <div className="Manager-container">
      <h2>Manager Portal</h2>
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

export default Manager;
