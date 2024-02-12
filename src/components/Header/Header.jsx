import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images.png";

const Header = () => {
  return (
    <header className="flex justify-between">
      <span>
        <h1 className="text-lg">LOGO</h1>
      </span>
      <NavLink>
        <ul className="flex justify-between gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <Link to={"/"}>Contact Us</Link>
        </ul>
      </NavLink>
    </header>
  );
};

export default Header;
