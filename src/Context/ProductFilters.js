import { createContext, useContext, useState } from "react";
import { useProduct } from "./TheProducts";

const FiltersContext = createContext();

export function FilterProvider({ children }) {
    const minPrice = 12000;
    const maxPrice = 300000;
    const [price, setPrice] = useState([minPrice, maxPrice]);
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
                "Nvidia GeForce RTX 3050",
                "Nvidia GeForce RTX 5060",
                "Nvidia GeForce RTX 5070 Ti",
                "NVIDIA GeForce RTX 2050",
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
                "NVIDIA GeForce RTX 3050",
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
            priceOptions: [],
        },
        monitors: {},
    });

    function toggleLpatopsFilters(filterGroup, value) {
        setSlectedFilters((prev) => {
            const currentValues = prev.laptops[filterGroup];
            let updatedFilters;
            if (typeof currentValues === "boolean") {
                updatedFilters = {
                    ...prev,
                    laptops: {
                        ...prev.laptops,
                        [filterGroup]: value,
                    },
                };
            } else {
                const isSelected = currentValues.includes(value);
                updatedFilters = {
                    ...prev,
                    laptops: {
                        ...prev.laptops,
                        [filterGroup]: isSelected
                            ? currentValues.filter((v) => v !== value)
                            : [...currentValues, value.toLowerCase()],
                    },
                };
            }

            return updatedFilters;
        });
    }

    const availableFilter = {};

    const filterGroups = [
        "categories",
        "brand",
        "processors",
        "generations",
        "vgaNumbers",
        "screenSizes",
        "refreshRates",
        "ramOptions",
        "storageOptions",
    ];

    function getFilteredListExcludingGroup(excludedGroup) {
        return laptopsList.filter((laptop) => {
            const laptopPrice = laptop.price;
            const priceClean = laptopPrice.replace(/[^0-9]/g, "");
            const numberPrice = parseInt(priceClean, 10);

            return (
                filterGroups.every((group) => {
                    if (group === excludedGroup) return true;

                    const selected = selectedFilters.laptops[group];
                    if (selected.length === 0) return true;

                    let value;
                    switch (group) {
                        case "categories":
                            value = laptop.category;
                            break;
                        case "brand":
                            value = laptop.brand;
                            break;
                        case "processors":
                            value = laptop.processor.name;
                            break;
                        case "generations":
                            value = laptop.processor.generation;
                            break;
                        case "vgaNumbers":
                            value = laptop.graphics.name;
                            break;
                        case "screenSizes":
                            value = laptop.display.size;
                            break;
                        case "refreshRates":
                            value = laptop.display.refreshRate;
                            break;
                        case "ramOptions":
                            value = laptop.ram.size;
                            break;
                        case "storageOptions":
                            value = laptop.storage;
                            break;
                        default:
                            return true;
                    }

                    return selected.includes(value.toLowerCase());
                }) &&
                (selectedFilters.laptops.priceOptions.length === 0 ||
                    (numberPrice >= selectedFilters.laptops.priceOptions[0] &&
                        numberPrice <=
                            selectedFilters.laptops.priceOptions[1])) &&
                (!selectedFilters.laptops.inStock || laptop.inStock === true)
            );
        });
    }
    let FilteredLapstopsProductsList = "";
    filterGroups.forEach((group) => {
        FilteredLapstopsProductsList = getFilteredListExcludingGroup(group);
        availableFilter[group] = [
            ...new Set(
                FilteredLapstopsProductsList.map((lap) => {
                    let value;
                    switch (group) {
                        case "categories":
                            value = lap.category;
                            break;
                        case "brand":
                            value = lap.brand;
                            break;
                        case "processors":
                            value = lap.processor.name;
                            break;
                        case "generations":
                            value = lap.processor.generation;
                            break;
                        case "vgaNumbers":
                            value = lap.graphics.name;
                            break;
                        case "screenSizes":
                            value = lap.display.size;
                            break;
                        case "refreshRates":
                            value = lap.display.refreshRate;
                            break;
                        case "ramOptions":
                            value = lap.ram.size;
                            break;
                        case "storageOptions":
                            value = lap.storage;
                            break;
                        default:
                            value = undefined;
                            break;
                    }
                    return value.toLowerCase();
                })
            ),
        ];
    });

    //---------------------------------------------------------------------------------------------------------
    //......
    //^^ Monitors

    return (
        <FiltersContext.Provider
            value={{
                filters,
                setSlectedFilters,
                selectedFilters,
                toggleLpatopsFilters,
                FilteredLapstopsProductsList,
                price,
                setPrice,
                minPrice,
                maxPrice,
                availableFilter,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
}

export function useFilter() {
    return useContext(FiltersContext);
}
