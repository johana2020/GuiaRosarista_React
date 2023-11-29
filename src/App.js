// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
 
const App = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="./profesor">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    {/* <Link to="/about">About</Link> */}
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    {/* <Link to="/contactus">Contact Us</Link> */}
                </li>
            </ul>
        </div>
    );
};
 
export default App;