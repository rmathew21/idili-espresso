import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
    <Routes>
    <Route index element={<Home />} />
    </Routes>
    </main>
        <Footer />
        </div>
      
    </BrowserRouter>
  );
}
