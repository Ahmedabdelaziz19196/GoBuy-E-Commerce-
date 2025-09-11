import { createContext, useContext } from "react";
import { useLaptops } from "./laptopsProducts";
const ProductsContext = createContext();
export function ProductsProvider({ children }) {
    const { laptopsProductsList } = useLaptops();

    const products = {
        laptopsList: laptopsProductsList,
    };
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}
export function useProduct() {
    return useContext(ProductsContext);
}
