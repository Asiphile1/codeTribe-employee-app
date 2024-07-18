// do not need to import react from version 17 going upwards.
import './App.css';
// import Navbar from './components/Navbar';  
//  once imported go and nest it where you want it to be in the page.
// import right from './components/rightSide';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import FormPage from './components/FormPage';


function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<LoginPage/>} />
         <Route path='/dashboard' element={<DashboardPage/>} />
         <Route path='/form' element={<FormPage/>} />
       </Routes>
     </div>
  );
}

export default App;






// <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/dashboard" element={<DashboardPage />} />
    //     <Route path="/form" element={<FormPage />} />
    //   </Routes>
    // </Router>















// component is a function 
// in that function we need to return something
// that is a JSX template generally
// then at the end we export that function so we can use it somewhere else as well/