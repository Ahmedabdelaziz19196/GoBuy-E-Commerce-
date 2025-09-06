import { createContext, useContext, useState } from "react";
import { laptopsProductsList } from "../laptopsProducts";
const ProductsContext = createContext();
export function ProductsProvider({ children }) {
    const monitorsProducts = Array.from(
        { length: 64 },
        (_, i) => `Item ${i + 1}`
    );

    const [products] = useState({
        laptopsList: laptopsProductsList,
        monitorsList: monitorsProducts,
    });
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}
export function useProduct() {
    return useContext(ProductsContext);
}
