// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import {Practice} from "./Practice.jsx"
// // import Practices from './Practices.jsx'
// import './index.css'

// // import Profile from './components/Profile.jsx'

// createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//     {/* <Practices /> */}
//     {/* <Profile /> */}
//     <Practice />
//   </>
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import { Practice } from './Practice.jsx'; // Correct import
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice /> Using the Practice component */}
  </StrictMode>
);

