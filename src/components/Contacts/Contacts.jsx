import Contacthero from "../../assets/Contacthero.jpg"
import Map from "../../assets/map.png"
import Phone from "../../assets/ring-phone.png"
import '../Contacts/contact.css'

function Contacts() {
  return (
    <section>
      <div className='container-contacts'> 
        <div className='contact-hero'>
          <img className='contact-img' alt="contact-alt" src={Contacthero}/>
          <div>
            <h1 className="contact-head"> Lets Talk Together</h1>
            <h3 className="contact-under">Give us your suggestions and get opportunities</h3>
              
              <div className="contact-details">
                <div className="location-details">
                    <img className="loc-img" src={Map}/>
                    <h4 className="loc-head">Our location</h4>
                    <p className="loc-text">220 North Main St, ste 500, Greenville SC 29601</p>
                </div>
                <div className="phone-details">
                    <img className="phone-img" src={Phone}/>
                    <h4 className="phone-head">Contact details</h4>
                    <p className="phone-text-email">Email: ps@ithousegroup.com</p>
                    <p className="phone">Phone: +1 864-686-7208</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts