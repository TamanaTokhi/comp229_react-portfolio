import { BrowserRouter, Routes, Route } from "react-router-dom";

import Format from "./components/Format.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import References from "./pages/References.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Format />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="references" element={<References />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;