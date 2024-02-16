import { IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav__container">
        <h1 className="logo">Restaurant Landing Page</h1>
        <ul className="nav__links">
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          <li>
            <IoCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
