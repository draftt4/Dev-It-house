import {Link} from "react-router-dom"
import './footer.css'

function footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="colum-left">
                <h1>CONTACT US</h1>
                <h3>220 North Main St, ste 500, Greenville SC 29601</h3>
                <h3>+1 864-686-7208</h3>
                <h4><Link id='link-items' to='/'>https://ithousegroup.com</Link></h4>
                <h4><Link id='link-items' to='/Privacy'>Privacy Policy</Link></h4>
            </div>
            <div className="colum-mid">
                <h1>OUR SERVICES</h1>
                <h3>Custom web application development</h3>
                <h3>Website development</h3>
                <h3>E-commerce Solutions</h3>
            </div>
            <div className="colum-right">
                <h3>Mobile web development solutions</h3>
                <h3>BUSINESS WEBSITES</h3>
                <h3>CUSTOM SOFTWARE</h3>
            </div>
            
        </div>
        <div className="footer-span">2020 All rigths reserved It House Group &copy;</div>
    </footer>
  )
}

export default footer;