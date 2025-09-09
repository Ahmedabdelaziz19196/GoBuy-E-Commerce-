import { createContext, useContext, useState } from "react";
const FiltersContext = createContext();
export function FilterProvider({ children }) {
    const filters = {
        laptops: {
            categories: ["Gaming", "Business", "Personal", "Graphics"],
            brand: ["Hp", "Dell", "Lenovo", "Msi", "Acer", "Asus", "Razer"],
            processors: [
                "Intel Core i3",
                "Intel Core i5",
                "Intel Core i7",
                "Intel Core i9",
                "Intel Core 5",
                "Intel Core 7",
                "Intel Core Ultra 5",
                "Intel Core Ultra 7",
                "Intel Core Ultra 9",
                "AMD Ryzen 7",
                "AMD Ryzen 9",
                "AMD Ryzen AI 9",
                "Snapdragon X",
                "Snapdragon X Plus",
                "Snapdragon X Elite",
            ],
            generations: [
                "14th generation",
                "4th Generation",
                "10th generation",
                "11th generation",
                "12th generation",
                "13th generation",
            ],
            vgaNumbers: [
                "AMD Radeon RX 6600M",
                "AMD Radeon RX 6500M",
                "AMD Radeon RX 6700S",
                "AMD Radeon RX6700M",
                "NVIDIA GeForce RTX 3070",
                "Nvidia GeForce RTX 3070 Ti",
                "Nvidia GeForce RTX 3050",
                "Nvidia GeForce RTX 5060",
                "Nvidia GeForce RTX 5070 Ti",
                "NVIDIA GeForce RTX 5090",
                "NVIDIA GeForce RTX 2050",
                "NVIDIA GeForce RTX 3050 Ti",
                "NVIDIA GeForce RTX 4050",
                "NVIDIA GeForce RTX 4060",
                "NVIDIA GeForce RTX 4070",
                "NVIDIA GeForce RTX 4080",
                "NVIDIA GeForce RTX 4090",
                "NVIDIA GeForce RTX 5070",
                "NVIDIA GeForce RTX 5080",
                "NVIDIA GeForce RTX 5050Ti",
                "NVIDIA GeForce RTX 2050",
                "AMD Radeon Graphics",
                "NVIDIA GeForce GTX 1650",
                "NVIDIA GeForce GTX 1650Ti",
                "NVIDIA GeForce RTX 2060",
                "NVIDIA GeForce RTX 3050",
                "NVIDIA GeForce RTX 3060",
                "NVIDIA GeForce RTX 3070",
                "NVIDIA GeForce RTX 3080",
            ],
            screenSizes: [
                '13.4"',
                '14"',
                '15"',
                '15.6"',
                '16"',
                '16.1"',
                '17"',
                '17.3"',
                '18"',
            ],
            refreshRates: [
                "60 Hz",
                "120 Hz",
                "144 Hz",
                "165 Hz",
                "240 Hz",
                "300 Hz",
                "360 Hz",
            ],
            ramOptions: ["8 GB", "12 GB", "16 GB", "24 GB", "32 GB", "64 GB"],
            storageOptions: [
                "3TB SSD",
                "4TB SSD",
                "SSD 2TB",
                "SSD 256 GB",
                "SSD 512 GB",
                "SSD 1TB",
                "2 TB SSD",
                "1 TB",
                "1 TB + 256 GB SSD",
                "2 TB",
            ],
        },
        monitors: {},
    };
    const [selectedFilters, setSlectedFilters] = useState({
        laptops: {
            inStock: false,
            categories: [],
            brand: [],
            processors: [],
            generations: [],
            vgaNumbers: [],
            screenSizes: [],
            refreshRates: [],
            ramOptions: [],
            storageOptions: [],
        },
        monitors: {},
    });
    function toggleLpatopsFilters(filterGroup, value) {
        setSlectedFilters((prev) => {
            const currentValues = prev.laptops[filterGroup];
            if (typeof currentValues === "boolean") {
                return {
                    ...prev,
                    laptops: {
                        ...prev.laptops,
                        [filterGroup]: value,
                    },
                };
            }
            const isSelected = currentValues.includes(value);
            return {
                ...prev,
                laptops: {
                    ...prev.laptops,
                    [filterGroup]: isSelected
                        ? currentValues.filter((v) => v !== value)
                        : [...currentValues, value.toLowerCase()],
                },
            };
        });
    }
    return (
        <FiltersContext.Provider
            value={{ filters, selectedFilters, toggleLpatopsFilters }}
        >
            {children}
        </FiltersContext.Provider>
    );
}
export function useFilter() {
    return useContext(FiltersContext);
}
