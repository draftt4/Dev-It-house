import { BrowserRouter , Route , Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/home";
import About from "./components/about/About"
import Service from "./components/Service/Service";
import Contacts from "./components/Contacts/Contacts";
import Footer from './components/Footer/footer.jsx';
import Privacy from './components/Privicy/privicy';






const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Services" element={<Service/>}></Route>
          <Route path="/Contacts" element={<Contacts/>}> </Route>
          <Route path="/Privacy" element={<Privacy/>}> </Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
      );
}

export default App