import { Link } from "react-router-dom"
import Image from "../../assets/code.jpg"
import Rea from "../../assets/React.png"
import "../Main/main.css"
 
function Main() {
  return (
    <>
    <section className="hero-section">
      <div className="container">
        <img src={Image} className="image" alt="hero"/>
        <div className="hero-subs">
        <h1 className="hero-slogan">Unlock Your Online Potential with Expert Web Development</h1>
        <p className="hero-paragraph">Delivering Custom Solutions for Your Digital Success</p>
        </div>
      </div>
    </section>
    <article className="mid-section">
    <h1 className="mid">At IT HOUSE <br/><span>we specialize in crafting cutting-edge web solutions 
       that drive results. <br/>With our extensive expertise in web development, 
       we help businesses like yours unlock their online 
       potential and stand out in the digital landscape.</span>
       </h1>
    </article>
    <article className="card-section">
    <div className="card-container">
      <div className="Card">
        <div className="Card-logo">
          <img src={Rea}/>
        </div>
        <div className="Card-brand">React</div>
        <p className="descriptio">open-source JavaScript library. 
        It works best to build user interfaces by combining sections of code</p>
        </div>
        <div className="Card">
        <div className="Card-logo"></div>
        <div className="Card-brand">Redux</div>
        <p className="descriptio">A state management tool with React</p>
        </div>
        <div className="Card">
        <div className="Card-logo"></div>
        <div className="Card-brand">JavaScript</div>
        <p className="descriptio">programming language that web developers commonly use to create more dynamic interactions when developing web pages, 
        applications, servers, and or even games</p>
        </div>
        <div className="Card">
        <div className="Card-logo"></div>
        <div className="Card-brand">Node JS</div>
        <p className="descriptio">Cross-platform runtime environment for executing JavaScript code.</p>
        </div>
        <div className="Card">
        <div className="Card-logo"></div>
        <div className="Card-brand">PHP</div>
        <p className="descriptio">a widely-used open source general-purpose scripting 
        language that is especially suited for web development and can be embedded into HTML</p>
        </div>
        <div className="Card">
        <div className="Card-logo"></div>
        <div className="Card-brand">Laravel</div>
        <p className="descriptio">PHP framework, which is robust</p>
        </div>
       </div>
    </article>
    </>
  )
}

export default Main