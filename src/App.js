import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components//Footer";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import LaptopsPage from "./Components/LaptopsPage";
import MonitorsPage from "./Components/MonitorsPage";
import ServiceFeatures from "./Components/ServiceFeatures";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/laptops" element={<LaptopsPage />} />

                <Route path="/monitors" element={<MonitorsPage />} />
            </Routes>
            <ServiceFeatures />
            <Footer />
        </>
    );
}

export default App;
