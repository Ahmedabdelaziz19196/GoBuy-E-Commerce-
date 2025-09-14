import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components//Footer";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import LaptopsPage from "./Components/LaptopsPage";
import MonitorsPage from "./Components/MonitorsPage";
import ServiceFeatures from "./Components/ServiceFeatures";
import { useEffect, useState } from "react";

function App() {
    const [favProducts, setFavProducts] = useState({});
    const [cartProducts, setCartProducts] = useState({});
    const [favIconClickdedIndex, setFavIconClickedIndex] = useState({});
    const [cartIconClickdedIndex, setCartIconClickedIndex] = useState({});

    useEffect(() => {
        const savedFavIndexes = localStorage.getItem("favProductsIndexsStates");
        if (savedFavIndexes) {
            setFavIconClickedIndex(JSON.parse(savedFavIndexes));
        }
        const savedCartIndexes = localStorage.getItem(
            "cartProductsIndexsStates"
        );
        if (savedCartIndexes) {
            setCartIconClickedIndex(JSON.parse(savedCartIndexes));
        }
    }, []);

    console.log("favProducts", favProducts);
    console.log("cartProducts", cartProducts);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/laptops"
                    element={
                        <LaptopsPage
                            setFavProducts={setFavProducts}
                            setCartProducts={setCartProducts}
                            favIconClickdedIndex={favIconClickdedIndex}
                            setFavIconClickedIndex={setFavIconClickedIndex}
                            cartIconClickdedIndex={cartIconClickdedIndex}
                            setCartIconClickedIndex={setCartIconClickedIndex}
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
