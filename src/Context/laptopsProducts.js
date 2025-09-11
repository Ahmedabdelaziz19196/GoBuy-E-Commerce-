import { useContext, createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FireBase";
const LaptopsContext = createContext();
export default function LaptopsProvider({ children }) {
    const [laptopsProductsList, setLaptopsProductsList] = useState([]);
    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "laptops"));
                const laptopsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLaptopsProductsList(laptopsData);
            } catch (error) {
                console.error("Error fetching laptops:", error);
            }
        };

        fetchLaptops();
    }, []);
    console.log("yes");
    return (
        <LaptopsContext.Provider value={{ laptopsProductsList }}>
            {children}
        </LaptopsContext.Provider>
    );
}
export function useLaptops() {
    return useContext(LaptopsContext);
}
