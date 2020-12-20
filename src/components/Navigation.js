/* eslint-disable */
import {Link} from 'react-router-dom';
import '../styles/main.css';


export default function Navigation() {
    return (
        <nav role="navigation" aria-label="Site Navigation Bar">
          <ul>
            <li>
              <h1>DCU Intra Portal</h1>
            </li>
            <li>
              <Link to="/" aria-label="Home Page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/student" aria-label="Student Page">
                Student
              </Link>
            </li>
            <li>
              <Link to="/staff" aria-label="Staff Page">
                Staff
              </Link>
            </li>
            <li>
              <Link to="/company" aria-label="Company Button">
                Company
              </Link>
            </li>
          </ul>
        </nav>
    );
  }
