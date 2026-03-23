import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="min-h-screen flex flex-col"> */}
        <Navbar />
        {/* <main className="flex-1"> */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="locations" element={<Locations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </main> */}
        <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}
