import "./Nav.css"
import { Link } from 'react-router-dom';
function Nav(){

    return (
      <div class="nav">
        <div className="header">
          <div className="navbar">
            <Link class="split" to="/">Home</Link>
            <Link to="/Delete">DELETE DETAILS</Link>
            <Link to="/update">UPDATE DETAILS</Link>
            <Link to="/post">ADD DETAILS</Link>
            <Link to="/Get">DETAILS</Link>
          </div>
        </div>
       
        
      </div>
    );
  }
export default Nav;
