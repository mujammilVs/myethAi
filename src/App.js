import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import About from "./components/WhyUs/About";
import Frequent from "./components/Frequent/AskedQuestions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCom from "./components/Home/HomeCom";

function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCom />} />
          <Route path="/features" element={<Home />} />
          <Route path="/whyus" element={<About />} />
          <Route path="/roadmaps" element={<Roadmap />} />
          <Route path="/tokenomics" element={<Frequent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
