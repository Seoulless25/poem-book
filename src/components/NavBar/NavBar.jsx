import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
    <span className="title">Poem Book</span>
    <span>Welcome, {user.name}</span>
    &nbsp;&nbsp;
    <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
  </nav>
);
}