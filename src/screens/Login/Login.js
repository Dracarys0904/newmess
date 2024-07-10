// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [isStudent, setIsStudent] = useState(true);
//   const [contactNumber, setContactNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate();

//   const handleGenerateOtp = () => {
//     // Implement OTP generation logic
//     console.log('Generate OTP for:', contactNumber);
//   };

//   const handleLogin = () => {
//     // Implement login logic with OTP
//     console.log('Login with OTP:', otp);
//     // Redirect to student dashboard after successful login
//     navigate('/student-dashboard');
//   };

//   return (
//     <div className="login-container">
//       {isStudent ? (
//         <>
//           <h2>Student Login</h2>
//           <div className="login-form">
//             <input
//               type="text"
//               placeholder="Enter Contact Number"
//               value={contactNumber}
//               onChange={(e) => setContactNumber(e.target.value)}
//               className="login-input"
//             />
//             <button onClick={handleGenerateOtp} className="login-button">Generate OTP</button>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="login-input"
//             />
//             <button onClick={handleLogin} className="login-button">Login</button>
//           </div>
//           <div className="alt-login">
//             <span>Not a student? </span>
//             <button onClick={() => setIsStudent(false)} className="alt-login-link">Click here</button>
//           </div>
//         </>
//       ) : (
//         <>
//           <h2>Choose your login</h2>
//           <div className="login-options">
//             <Link to="/supervisor" className="login-button">Supervisor Login</Link>
//             <Link to="/admin" className="login-button">Admin Login</Link>
//             <Link to="/manager" className="login-button">Manager Login</Link>
//           </div>
//           <div className="alt-login">
//             <span>Are you a student? </span>
//             <button onClick={() => setIsStudent(true)} className="alt-login-link">Click here</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Login;





// 




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isStudent, setIsStudent] = useState(true);
  const [contactNumber, setContactNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleGenerateOtp = () => {
    // Implement OTP generation logic
    console.log('Generate OTP for:', contactNumber);
  };

  const handleLogin = () => {
    // Implement login logic with OTP
    console.log('Login with OTP:', otp);
    // After successful login, navigate to the student page
    navigate('/student');
  };

  return (
    <div className="login-container">
      {isStudent ? (
        <>
          <h2>Student Login</h2>
          <div className="login-form">
            <input
              type="text"
              placeholder="Enter Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="login-input"
            />
            <button onClick={handleGenerateOtp} className="login-button">Generate OTP</button>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
          </div>
          <div className="alt-login">
            <span>Not a student? </span>
            <button onClick={() => setIsStudent(false)} className="alt-login-link">Click here</button>
          </div>
        </>
      ) : (
        <>
          <h2>Choose your login</h2>
          <div className="login-options">
            <Link to="/supervisor" className="login-button">Supervisor Login</Link>
            <Link to="/manager" className="login-button">Manager Login</Link>
            <Link to="/admin" className="login-button">Admin Login</Link>
            
          </div>
          <div className="alt-login">
            <span>Are you a student? </span>
            <button onClick={() => setIsStudent(true)} className="alt-login-link">Click here</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
