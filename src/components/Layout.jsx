import { Outlet, Link } from "react-router-dom";
import './../layout.css';

const Layout = () => {
  return (
    <>
      <nav className="toolbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
             <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;