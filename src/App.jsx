import { BrowserRouter , Route , Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main";
import About from "./components/About/About"
import Service from "./components/Service/Service";
import Contacts from "./components/Contacts/Contacts";
import Footer from './components/Footer/footer.jsx';
import Privacy from './components/Privicy/privicy';






const App = () => {
  return (
    <BrowserRouter >
      <Nav/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
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