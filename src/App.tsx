import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Featured from "./components/Feature";
import Work from "./components/Work";
import GenresSection from "./components/GenresSection";
import CinematicSection from "./components/Cinematic";
import Loader from "./components/Loder";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 simulate initial app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* 🏠 HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Trending />
              <Featured />
              <Work />
              <CinematicSection />
              <GenresSection />
            </>
          }
        />

        {/* 🔐 LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;