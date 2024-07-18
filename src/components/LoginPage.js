import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
// import route dom



const LoginPage = () => {
    const history = useNavigate();
  
    const handleLogin = () => {
      // Perform login logic here (e.g., authentication)
      history.push('/dashboard');
    };



  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo">ELITE AIR</div>
        <input type="text" placeholder="Enter Admin Name" className="input-field" />
        <input type="password" placeholder="Enter Admin password" className="input-field" />
        <button className="login-button">Login</button>
      </div>
      <div className="login-right">
      <video className="login-video" autoPlay muted loop>

          {/* <source src="/assets/login video.mp4" type="video/mp4" /> */}
          
        </video>
      </div>
    </div>
  );
};

export default LoginPage;



// un comment the video