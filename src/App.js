import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components//Footer";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import LaptopsPage from "./Components/LaptopsPage";
import MonitorsPage from "./Components/MonitorsPage";
import ServiceFeatures from "./Components/ServiceFeatures";
import LaptopCategory from "./Components/LaptopCategory";
import { useState } from "react";

function App() {
    // set lapTops gategories
    const [selectedCat, setSelectedCat] = useState(null);
    const categories = [
        "Gaming Laptops",
        "Business Laptops",
        "Personal Laptops",
        "Graphic & Design Laptops",
    ];
    // set lapTops gategories

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/laptops"
                    element={
                        <LaptopsPage
                            selectedCat={selectedCat}
                            setSelectedCat={setSelectedCat}
                            categories={categories}
                        />
                    }
                />
                <Route
                    path="/laptops/:category"
                    element={
                        <LaptopCategory
                            selectedCat={selectedCat}
                            setSelectedCat={setSelectedCat}
                            categories={categories}
                        />
                    }
                />

                <Route path="/monitors" element={<MonitorsPage />} />
            </Routes>
            <ServiceFeatures />
            <Footer />
        </>
    );
}

export default App;
