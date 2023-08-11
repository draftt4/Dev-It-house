import { Link } from "react-router-dom"
import "./nav.css"

function Nav() {
  return (
    <div className="Container">
      <div className="Logo">
        <Link id="nav-links" to="/">IT HOUSE GROUP</Link>
      </div>
      <div className="Left-site_countainer">
        <ul className="List-items">
          <li className="Home"><Link id="nav-links" to="/">HOME</Link></li>
          <li className="about-item"><Link id="nav-links" to="/About">ABOUT US</Link></li>
          <li className="contacts-item"><Link id="nav-links" to="/Contacts">CONTACTS</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav