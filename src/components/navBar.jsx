import { Link } from "react-router-dom";
const NavBar = () => {

  let nameDetails = JSON.parse(localStorage.getItem("user")) || null;
  console.log(nameDetails);


  return (
    <div className="container">
      <div className="container1">
        <div className="flex_nav">
          <div className="logo_text">
            <h2>SchoolPortal</h2>
          </div>
          <ul className="nav_links">
            <li className="links">
              <Link to="/DashBoard">DashBoard</Link>
            </li>
            <li className="links">
              <Link to="/registration">Academic Registration</Link>
            </li>
          </ul>
          <div className="sign_up">
            <Link to="/">
              <h3 className="users_name">Welcome, {!nameDetails ? 'Sign Up!' : nameDetails[0].firstName}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
