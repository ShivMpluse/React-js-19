 import React from "react";
// !import gsap from 'gsap'
// ! import { useGSAP } from "@gsap/react";

// import  {EventHandling}  from "./components/EventHandling.jsx";
// import {NetFlix}  from "./components/NetFlix.jsx";
// import { EventProps } from './components/EventProps.jsx';
// import EventPropagation from "./components/EventPropagation.jsx"
// import {State} from "./components/Hooks/State"
// import {Practice} from "./components/Practice.jsx"
import DerivedState from "./components/DerivedState"


const App = () => {

  // useGSAP(() => {
  //   gsap.from("Button",{
  //     scale: 8,
  //     y: -200,
  //     x: 1000,
  //     rotate: 580,
  //     duration: 1.5,
  //     delay: 0.3,
  //     yoyo: true,
  //     marginLeft: 20,
  //     backgroundColor: "aqua"
  //   });
  //   gsap.from(".main",{
  //     scale: 8,
  //     y: -200,
  //     x: 800,
  //     rotate: 580,
  //     duration: 1.5,
  //     delay: 0.3,
  //     yoyo: true,
  //     marginLeft: 20,
  //     backgroundColor: "aqua"
  //   });
  // }); 

  return(
    <>
      {/* <NetFlix />
       <EventHandling />
       <EventProps /> 
       <State />
       <EventPropagation />
       <Practice /> */}
       <DerivedState />
    </>
  );
};

export default App



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
