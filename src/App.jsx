import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
