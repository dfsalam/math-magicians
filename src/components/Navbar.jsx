import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Math Magicians</h1>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
