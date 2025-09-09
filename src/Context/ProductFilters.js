import { createContext, useContext, useState } from "react";
import { useProduct } from "./TheProducts";
const FiltersContext = createContext();
export function FilterProvider({ children }) {
    const { laptopsList } = useProduct();
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
                "14th Gen",
                "4th Generation",
                "10th generation",
                "11th generation",
                "12th generation",
                "13th generation",
                "Lunar Lake Series 2",
                "Arrow Lake Series 2",
                "Snapdragon X Series",
                "Zen 3+ Architecture",
                "Zen 4 Architecture",
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
                '13.3"',
                '14"',
                '15.3"',
                '15.6"',
                '16"',
                '16.1"',
                '18"',
            ],
            refreshRates: ["60 Hz", "120 Hz", "144 Hz", "165 Hz", "240 Hz"],
            ramOptions: ["4 GB", "8 GB", "16 GB", "24 GB", "32 GB", "64 GB"],
            storageOptions: ["SSD 256 GB", "SSD 512 GB", "SSD 1TB", "SSD 2TB"],
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

    const laptopsProductsList = laptopsList.filter((laptop) => {
        const noFilterApplied = Object.values(selectedFilters.laptops).every(
            (arr) => arr.length === 0 || arr === false
        );
        if (noFilterApplied) return true;

        const filterCategory =
            selectedFilters.laptops.categories.length === 0 ||
            selectedFilters.laptops.categories.includes(
                laptop.category.toLowerCase()
            );
        const filterBrand =
            selectedFilters.laptops.brand.length === 0 ||
            selectedFilters.laptops.brand.includes(laptop.brand.toLowerCase());

        const filterProcessors =
            selectedFilters.laptops.processors.length === 0 ||
            selectedFilters.laptops.processors.includes(
                laptop.processor.name.toLowerCase()
            );

        const filterProcessorsGeneration =
            selectedFilters.laptops.generations.length === 0 ||
            selectedFilters.laptops.generations.includes(
                laptop.processor.generation.toLowerCase()
            );

        const filtervgaNumber =
            selectedFilters.laptops.vgaNumbers.length === 0 ||
            selectedFilters.laptops.vgaNumbers.includes(
                laptop.graphics.name.toLowerCase()
            );
        const filterScreenSize =
            selectedFilters.laptops.screenSizes.length === 0 ||
            selectedFilters.laptops.screenSizes.includes(
                laptop.display.size.toLowerCase()
            );

        const filterRefrshRate =
            selectedFilters.laptops.refreshRates.length === 0 ||
            selectedFilters.laptops.refreshRates.includes(
                laptop.display.refreshRate.toLowerCase()
            );

        const filterRam =
            selectedFilters.laptops.ramOptions.length === 0 ||
            selectedFilters.laptops.ramOptions.includes(
                laptop.ram.size.toLowerCase()
            );

        const filterStorage =
            selectedFilters.laptops.storageOptions.length === 0 ||
            selectedFilters.laptops.storageOptions.includes(
                laptop.storage.toLowerCase()
            );

        return (
            filterCategory &&
            filterBrand &&
            filterProcessors &&
            filterProcessorsGeneration &&
            filtervgaNumber &&
            filterScreenSize &&
            filterRefrshRate &&
            filterRam &&
            filterStorage
        );
    });

    let FilteredLapstopsProductsList = laptopsProductsList;
    if (selectedFilters.laptops.inStock) {
        FilteredLapstopsProductsList = laptopsProductsList.filter((laptop) => {
            return laptop.inStock === true;
        });
    }

    //---------------------------------------------------------------------------------------------------------
    //......
    //^^ Monitors

    return (
        <FiltersContext.Provider
            value={{
                filters,
                selectedFilters,
                toggleLpatopsFilters,
                FilteredLapstopsProductsList,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
}
export function useFilter() {
    return useContext(FiltersContext);
}
