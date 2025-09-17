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
import Cart from "./Components/Cart";
import WishList from "./Components/WishList";
import CartCheckOut from "./Components/CartCheckOut";

function App() {
    const [favProducts, setFavProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [favIconClickdedId, setFavIconClickedId] = useState({});
    const [cartIconClickdedId, setCartIconClickedId] = useState({});
    const [currentProducts, setCurrentProducts] = useState([]);
    const [numberOfOrders, setNumberOfOrders] = useState({});
    const [totalPrice, setToatalPrice] = useState(0);

    useEffect(() => {
        const savedFavIndexes = localStorage.getItem("favProductsIdsStates");
        if (savedFavIndexes) {
            setFavIconClickedId(JSON.parse(savedFavIndexes));
        }
        const savedCartIndexes = localStorage.getItem("cartProductsIdsStates");
        if (savedCartIndexes) {
            setCartIconClickedId(JSON.parse(savedCartIndexes));
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
            "favProductsIdsStates",
            JSON.stringify(favIconClickdedId)
        );
    }, [favIconClickdedId]);

    useEffect(() => {
        localStorage.setItem(
            "cartProductsIdsStates",
            JSON.stringify(cartIconClickdedId)
        );
    }, [cartIconClickdedId]);

    useEffect(() => {
        const savedOrders =
            JSON.parse(localStorage.getItem("numberForOrder")) || {};
        setNumberOfOrders(savedOrders);
    }, []);
    //handle total price
    useEffect(() => {
        if (cartProducts) {
            let price = cartProducts
                .map(
                    (ele) =>
                        parseInt(ele.price.replace(/[^0-9]/g, ""), 10) *
                        (numberOfOrders[ele.productid] || 1)
                )
                .reduce((acc, ele) => acc + ele, 0);
            setToatalPrice(price);
        }
    }, [cartProducts, numberOfOrders]);
    return (
        <>
            <Header
                favProducts={favProducts}
                cartProducts={cartProducts}
                numberOfOrders={numberOfOrders}
                setFavProducts={setFavProducts}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/laptops"
                    element={
                        <LaptopsPage
                            setFavProducts={setFavProducts}
                            setCartProducts={setCartProducts}
                            favIconClickdedId={favIconClickdedId}
                            setFavIconClickedId={setFavIconClickedId}
                            cartIconClickdedId={cartIconClickdedId}
                            setCartIconClickedId={setCartIconClickedId}
                            currentProducts={currentProducts}
                            setCurrentProducts={setCurrentProducts}
                        />
                    }
                />
                <Route
                    path="/laptops/:productId"
                    element={
                        <LaptopsDetails
                            favIconClickdedId={favIconClickdedId}
                            setFavIconClickedId={setFavIconClickedId}
                            cartIconClickdedId={cartIconClickdedId}
                            setCartIconClickedId={setCartIconClickedId}
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

                <Route
                    path="/wishlist"
                    element={
                        <WishList
                            favProducts={favProducts}
                            setFavProducts={setFavProducts}
                            setFavIconClickedId={setFavIconClickedId}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartProducts={cartProducts}
                            numberOfOrders={numberOfOrders}
                            setCartProducts={setCartProducts}
                            setCartIconClickedId={setCartIconClickedId}
                            totalPrice={totalPrice}
                        />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <CartCheckOut
                            cartProducts={cartProducts}
                            numberOfOrders={numberOfOrders}
                            setCartProducts={setCartProducts}
                            setCartIconClickedId={setCartIconClickedId}
                            totalPrice={totalPrice}
                            cartIconClickdedId={cartIconClickdedId}
                        />
                    }
                />
            </Routes>
            <ServiceFeatures />
            <Footer />
        </>
    );
}

export default App;
