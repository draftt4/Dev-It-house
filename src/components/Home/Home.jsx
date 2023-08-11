import Form from "../Form/Form"
import Image from "../../assets/code.jpg"
import Rea from "../../assets/React.png"
import Js from "../../assets/JS.png"
import Node from "../../assets/NodeJS.png"
import Redux from "../../assets/Redux.png"
import Php from "../../assets/PHP.png"
import Laravel from "../../assets/Laravel.png"
import "./home.css"
 
function Home() {
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
    <h1 className="mid">At IT HOUSE GROUP <br/><span>we specialize in crafting cutting-edge web solutions 
       that drive results. <br/>With our extensive expertise in web development, 
       we help businesses like yours unlock their online 
       potential and stand out in the digital landscape.For this we are using technologies like.</span>
       </h1>
    </article>
    <article className="card-section">
    <div className="grid-container">
    <div className="card">
    <div className="card-logo">
      <img src={Rea} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>React</h3>
      <p>React. js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. Originally built by Facebook, Meta and the open-source community now maintain it.</p>
    </div>
    </div>
    <div className="card">
    <div className="card-logo">
      <img src={Js} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>JavaScript</h3>
      <p>JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-logo">
      <img src={Node} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>Node JS</h3>
      <p>Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-logo">
      <img src={Redux} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>Redux</h3>
      <p>State management tool with React.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-logo">
      <img src={Php} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>PHP</h3>
      <p>PHP (recursive acronym for PHP: Hypertext Preprocessor ) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-logo">
      <img src={Laravel} alt="Card Logo"/>
    </div>
    <div className="card-content">
      <h3>Laravel</h3>
      <p>PHP framework, which is robust and easy to understand.</p>
    </div>
  </div>
       </div>
    </article>
    <Form/>
    </>
  )
}

export default Home