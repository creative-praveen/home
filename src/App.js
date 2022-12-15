import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <div className="contant flexcol flex">
        <code className="home-top">
          &lt;html><br/> &nbsp; &nbsp; &lt;body> 
        </code>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
            <Route exact path="/works" element={<Works/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
        <code className="home-bottom">
          &nbsp; &nbsp; &lt;/body><br/>&lt;/html>
        </code>
      </div>
    </Router>
  );
}

export default App;
