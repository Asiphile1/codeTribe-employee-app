
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const goToFormPage = () => {
    navigate('/form');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={goToFormPage}>Go to Form Page</button>
    </div>
  );
};

export default DashboardPage;




















// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>start with this page</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create">Add New Employee</a>
            
//             </div>

//         </nav>
//      );
// }
 
// export default Navbar;
