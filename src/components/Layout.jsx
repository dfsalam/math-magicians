import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
    { /* Outlet is for render their child route’s elements inside App.jsx. */ }
  </div>
);
export default Layout;
