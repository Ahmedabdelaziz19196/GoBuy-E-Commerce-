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
import RegisterUser from "./Components/Auth/RegisterUser";
import Login from "./Components/Auth/Login";
import { useAuth } from "./Context/AuthContext";
import { db } from "./FireBase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import RequireAuth from "./Context/RequireAuth";
import { PublicRoute } from "./Context/PublicRoute";
import LanguageContext from "./Context/LanguageContext";
// import {}

function App() {
    const [favProducts, setFavProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [favIconClickdedId, setFavIconClickedId] = useState({});
    const [cartIconClickdedId, setCartIconClickedId] = useState({});
    const [currentProducts, setCurrentProducts] = useState([]);
    const [numberOfOrders, setNumberOfOrders] = useState({});
    const [totalPrice, setToatalPrice] = useState(0);
    const [userDate, setUserDate] = useState({});
    const [language, setLanguage] = useState("EN");
    const { currentUser } = useAuth();

    //get the language
    useState(() => {
        const theLanguage = localStorage.getItem("language");
        setLanguage(theLanguage);
    });

    useEffect(() => {
        async function handleUserData() {
            const savedFavProducts = JSON.parse(
                localStorage.getItem("favProducts") || "[]"
            );
            const savedCartProducts = JSON.parse(
                localStorage.getItem("cartProducts") || "[]"
            );
            const savedFavIds = JSON.parse(
                localStorage.getItem("favProductsIdsStates") || "{}"
            );
            const savedCartIds = JSON.parse(
                localStorage.getItem("cartProductsIdsStates") || "{}"
            );
            const savedOrders = JSON.parse(
                localStorage.getItem("numberForOrder") || "{}"
            );

            setFavProducts(savedFavProducts);
            setCartProducts(savedCartProducts);
            setFavIconClickedId(savedFavIds);
            setCartIconClickedId(savedCartIds);
            setNumberOfOrders(savedOrders);

            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserDate(userData);

                    const mergedFavProducts = [
                        ...savedFavProducts,
                        ...userData.wishlist.filter(
                            (item) =>
                                !savedFavProducts.some(
                                    (p) => p.productid === item.productid
                                )
                        ),
                    ];
                    const mergedFavIds = {
                        ...savedFavIds,
                        ...userData.wishlistProductsId,
                    };
                    const mergedCartProducts = [
                        ...savedCartProducts,
                        ...userData.cart.filter(
                            (item) =>
                                !savedCartProducts.some(
                                    (p) => p.productid === item.productid
                                )
                        ),
                    ];
                    const mergedCartIds = {
                        ...savedCartIds,
                        ...userData.cartProductsId,
                    };
                    const mergedOrders = {
                        ...savedOrders,
                        ...userData.numberOfOrders,
                    };

                    setFavProducts(mergedFavProducts);
                    setCartProducts(mergedCartProducts);
                    setFavIconClickedId(mergedFavIds);
                    setCartIconClickedId(mergedCartIds);
                    setNumberOfOrders(mergedOrders);

                    localStorage.setItem(
                        "favProducts",
                        JSON.stringify(mergedFavProducts)
                    );
                    localStorage.setItem(
                        "cartProducts",
                        JSON.stringify(mergedCartProducts)
                    );
                    localStorage.setItem(
                        "favProductsIdsStates",
                        JSON.stringify(mergedFavIds)
                    );
                    localStorage.setItem(
                        "cartProductsIdsStates",
                        JSON.stringify(mergedCartIds)
                    );
                    localStorage.setItem(
                        "numberForOrder",
                        JSON.stringify(mergedOrders)
                    );

                    await setDoc(
                        userDocRef,
                        {
                            wishlist: mergedFavProducts,
                            cart: mergedCartProducts,
                            wishlistProductsId: mergedFavIds,
                            cartProductsId: mergedCartIds,
                            numberOfOrders: mergedOrders,
                        },
                        { merge: true }
                    );
                } else {
                    await setDoc(
                        userDocRef,
                        {
                            wishlist: savedFavProducts,
                            cart: savedCartProducts,
                            wishlistProductsId: savedFavIds,
                            cartProductsId: savedCartIds,
                            numberOfOrders: savedOrders,
                        },
                        { merge: true }
                    );
                }
            }
        }

        handleUserData();
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem("favProducts", JSON.stringify(favProducts));
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        localStorage.setItem(
            "favProductsIdsStates",
            JSON.stringify(favIconClickdedId)
        );
        localStorage.setItem(
            "cartProductsIdsStates",
            JSON.stringify(cartIconClickdedId)
        );
    }, [favProducts, cartProducts, favIconClickdedId, cartIconClickdedId]);

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
        <div style={{ direction: language === "EN" ? "ltr" : "rtl" }}>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <Header
                    favProducts={favProducts}
                    cartProducts={cartProducts}
                    numberOfOrders={numberOfOrders}
                    setFavProducts={setFavProducts}
                    userDate={userDate}
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
                                setNumberOfOrders={setNumberOfOrders}
                            />
                        }
                    />

                    <Route
                        path="/checkout"
                        element={
                            <RequireAuth>
                                <CartCheckOut
                                    cartProducts={cartProducts}
                                    numberOfOrders={numberOfOrders}
                                    setCartProducts={setCartProducts}
                                    setCartIconClickedId={setCartIconClickedId}
                                    totalPrice={totalPrice}
                                    cartIconClickdedId={cartIconClickdedId}
                                    setNumberOfOrders={setNumberOfOrders}
                                />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/registerUser"
                        element={
                            <PublicRoute>
                                <RegisterUser
                                    favProducts={favProducts}
                                    cartProducts={cartProducts}
                                    favIconClickdedId={favIconClickdedId}
                                    cartIconClickdedId={cartIconClickdedId}
                                    numberOfOrders={numberOfOrders}
                                />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                </Routes>
                <ServiceFeatures />
                <Footer />
            </LanguageContext.Provider>
        </div>
    );
}

export default App;
