import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/FoundItems">Found Items</Link>
        <Link to="/LostItem ">Lost Items</Link>
        <Link to="/create_lost"> Add Lost Thing</Link>
        <Link to="/create_found">Add Found thing</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;