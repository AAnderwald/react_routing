import {Link} from "react-router-dom";
import {routes} from "../data/routes";

function Navbar () 
{  
  return (
    <nav>
        <ul class="navBarGrid" id="listLook" >
          {routes.list.map (({path, label }) => (
            <li class="items1" id="left" key={path}>
                <Link to={path}>{label} </Link>
            </li>
          ))}
            <li class="items2" id="right">
              <img src="castle_hires_3.jpg" alt="cast in the sky photo" />
            </li> 
        </ul>
      <hr />
    </nav>
  );
}


  export default Navbar;