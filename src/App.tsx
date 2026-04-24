import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PeoplePage from "./pages/PeoplePage"; // ✅ ADD THIS

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ THIS IS MISSING */}
        <Route path="/people" element={<PeoplePage />} />

      </Routes>
    </BrowserRouter>
  );
}