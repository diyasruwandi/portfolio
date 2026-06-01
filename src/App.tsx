import GridBackground from "./components/GridBackground";
import { Routes, Route } from "react-router-dom";
// import LogoLoop from "./components/LogoLoop"; // Sesuaikan path-nya
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111] relative text-white">
      <PreLoader />
      <GridBackground />
      <div className="relative z-10 flex h-full w-full flex-col overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <div className="flex w-full justify-center">
          {/* Perhatikan lg:ml-16 agar konten bergeser ke kanan (lebar sidebar) */}
          <main className="no-scrollbar h-full w-full max-w-5xl px-6 py-10 lg:ml-16 scroll-smooth transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
