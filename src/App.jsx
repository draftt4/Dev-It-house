import { BrowserRouter , Route , Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"
import About from "./components/about/About"
import Service from "./components/Service/Service";
import Contacts from "./components/Contacts/Contacts";






const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
            <Route path="/Main" element={<Main/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Services" element={<Service/>}></Route>
            <Route path="/Contacts" element={<Contacts/>}> </Route>
            </Routes>
      </BrowserRouter>
      );
}

export default App