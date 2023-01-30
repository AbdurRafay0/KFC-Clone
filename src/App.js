import Home from "./Pages/Home";
import Register from "../src/Pages/Register";
import Aboutus from "./Pages/Aboutus";
import Mitaobhook from "./Pages/Mitaobhook";
import MitaobhookScholarship from "./Pages/MitaobhookScholarship"
import Privacy from "./Pages/Privacy";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";




function App(){

  return (
    <>
  <Router>
    <Header/>
    <Routes>
      
      <Route path="/" element={<Home/>} />

      <Route path="/Register-Signin" element={<Register/>} />

      <Route path="/AboutUs" element={<Aboutus/>} />

      <Route path="/Mitaobhook" element={<Mitaobhook/>} />

      <Route path="/MitaobhookScholarship" element={<MitaobhookScholarship/>} />

      <Route path="/PrivacyPolicy" element={<Privacy/>} />

      <Route path="/Careers" element={<Careers/>} />

      <Route path="/ContactUs" element={<Contact/>} />

      <Route path="/TermsAndConditions" element={<Terms/>} />


    </Routes>
    <Footer/>
  </Router>

    </>
  )
   
  
}

export default App;


