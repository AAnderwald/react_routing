import {Link} from "react-router-dom";


function Navbar (props) 
{  
  return (
    <nav >
      <ul class="list">
        <li>
          <Link className="navHome" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="navFilms" to="/Films">
            Films
          </Link>
        </li>

        <li>
          <Link className="navPeople"  to="/People">
            People
          </Link>
        </li>

        <li>
          <Link className="navSpecie"  to="/Specie">
            Species
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}



  export default Navbar;