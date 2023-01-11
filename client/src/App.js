import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualifications from "./Components/Qualifications/Qualifications";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Router } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
