import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/ProductFilters";
import { ProductsProvider } from "./Context/TheProducts";
import { SideCategoriesProvider } from "./Context/SideCategoriesContext";
import LaptopsProvider from "./Context/laptopsProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LaptopsProvider>
        <SideCategoriesProvider>
            <ProductsProvider>
                <FilterProvider>
                    <React.StrictMode>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </React.StrictMode>
                </FilterProvider>
            </ProductsProvider>
        </SideCategoriesProvider>
    </LaptopsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
