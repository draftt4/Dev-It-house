import {Link} from "react-router-dom"
import "../Nav/nav.css"

function Nav() {
  return (
    <div className="Container">
      <div className="Logo">
        <Link to="Main">IT HOUSE</Link>
      </div>
      <div className="Left-site_countainer">
        <ul className="List-items">
          <li className="about-item"><Link to="/About">ABOUT US</Link></li>
          <li className="service-item"><Link to="/Services">SERVICES</Link></li>
          <li className="contacts-item"><Link to="/Contacts">CONTACTS</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav