import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components//Footer";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import LaptopsPage from "./Components/LaptopsPage";
import MonitorsPage from "./Components/MonitorsPage";
import ServiceFeatures from "./Components/ServiceFeatures";
import { useEffect, useState } from "react";
import LaptopsDetails from "./Components/LaptopsDetails";

function App() {
    const [favProducts, setFavProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [favIconClickdedIndex, setFavIconClickedIndex] = useState({});
    const [cartIconClickdedIndex, setCartIconClickedIndex] = useState({});
    const [currentProducts, setCurrentProducts] = useState([]);
    const [numberOfOrders, setNumberOfOrders] = useState({});

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
        const savedFavProducts = localStorage.getItem("favProducts");
        if (savedFavProducts) {
            setFavProducts(JSON.parse(savedFavProducts));
        }
        const savedCartProducts = localStorage.getItem("cartProducts");
        if (savedCartProducts) {
            setCartProducts(JSON.parse(savedCartProducts));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("favProducts", JSON.stringify(favProducts));
    }, [favProducts]);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    useEffect(() => {
        localStorage.setItem(
            "favProductsIndexsStates",
            JSON.stringify(favIconClickdedIndex)
        );
    }, [favIconClickdedIndex]);

    useEffect(() => {
        localStorage.setItem(
            "cartProductsIndexsStates",
            JSON.stringify(cartIconClickdedIndex)
        );
    }, [cartIconClickdedIndex]);

    useEffect(() => {
        const savedOrders =
            JSON.parse(localStorage.getItem("numberForOrder")) || {};
        setNumberOfOrders(savedOrders);
    }, []);
    return (
        <>
            <Header favProducts={favProducts} cartProducts={cartProducts} />
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
                            currentProducts={currentProducts}
                            setCurrentProducts={setCurrentProducts}
                        />
                    }
                />
                <Route
                    path="/laptops/:productId"
                    element={
                        <LaptopsDetails
                            favIconClickdedIndex={favIconClickdedIndex}
                            setFavIconClickedIndex={setFavIconClickedIndex}
                            cartIconClickdedIndex={cartIconClickdedIndex}
                            setCartIconClickedIndex={setCartIconClickedIndex}
                            currentProducts={currentProducts}
                            favProducts={favProducts}
                            setFavProducts={setFavProducts}
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                            numberOfOrders={numberOfOrders}
                            setNumberOfOrders={setNumberOfOrders}
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
