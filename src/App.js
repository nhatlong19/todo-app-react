import { Routes, Route, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import './App.css';
import TodoPage from './pages/Todo'
import GuidePage from './pages/Guide'
import InfomationPage from './pages/Infomation'

function App() {
  const pathname = useLocation().pathname
  return (
    <div className='main'>
      <nav>
        <ul className='navlinks'>
          <li className={`${pathname === '/' ? "active" : ""}`}>
            <Link to="/" >
              <BsIcons.BsCardChecklist />
              Todo App
            </Link>
          </li>
          <li className={`${pathname === '/guide' ? "active" : ""}`}>
            <Link to="/guide" >
              <RiIcons.RiGuideFill />
              Cách sử dụng
            </Link>
          </li>
          <li className={`${pathname === '/infomation' ? "active" : ""}`}>
            <Link to="/infomation" >
              <BsIcons.BsInfoCircle />
              Thông tin
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/infomation" element={<InfomationPage />} />
      </Routes>

    </div>
  );
}

export default App;




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
