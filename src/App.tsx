import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Featured from "./components/Feature";
import Work from "./components/Work";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
<Hero />
<Trending />
<Featured />
<Work />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;