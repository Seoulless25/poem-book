import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styles from './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
    <Link to='/'><span className="title">Home</span></Link>
    <span>Welcome, {user?.name??'Stranger'}</span>
    &nbsp; | &nbsp;
    <Link to='/poems'>My Poems</Link>
    <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
  </nav>
);
}