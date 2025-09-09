import { createContext, useState } from "react";

export const SideCategoriesContext = createContext();

export const SideCategoriesProvider = ({ children }) => {
    const [sideCategoriesShow, setSideCategoriesShow] = useState(false);

    return (
        <SideCategoriesContext.Provider
            value={{ sideCategoriesShow, setSideCategoriesShow }}
        >
            {children}
        </SideCategoriesContext.Provider>
    );
};
