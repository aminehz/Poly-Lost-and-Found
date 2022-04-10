import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    


    <nav className="navbar">
      <link rel="apple-touch-icon" href="..public/logo_poly.pnge" />
      <img src="../public/logo_poly.png" className="imglogo" alt="Logo poly"/>
      <h1>Lost and Found</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create_lost" style={{ 
          color: 'white', 
          backgroundColor: 'rgb(247,144,35)',
          borderRadius: '8px' 
        }}>Lost thing</Link>
        <Link to="/create_found" style={{ 
          color: 'white', 
          backgroundColor: 'rgb(247,144,35)',
          borderRadius: '8px' 
        }}>Found thing
        </Link>
      </div>
    </nav>
  );
}
 
export default Navbar;