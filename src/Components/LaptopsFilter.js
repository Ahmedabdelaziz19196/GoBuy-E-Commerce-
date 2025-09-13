import { Form } from "react-bootstrap";
import { useFilter } from "../Context/ProductFilters";
import { useEffect } from "react";

export default function LaptopsFilter({ filterType }) {
    const {
        filters,
        selectedFilters,
        toggleLpatopsFilters,
        availableFilter,
        setSlectedFilters,
    } = useFilter();

    useEffect(() => {
        const filterKeys = [
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
        filterKeys.forEach((key) => {
            const missingItems = selectedFilters.laptops[key].filter(
                (item) => !availableFilter[key].includes(item)
            );

            if (missingItems.length > 0 && availableFilter[key].length > 0) {
                const updatedItems = selectedFilters.laptops[key].filter(
                    (item) => !missingItems.includes(item)
                );

                setSlectedFilters((prev) => ({
                    ...prev,
                    laptops: {
                        ...prev.laptops,
                        [key]: updatedItems,
                    },
                }));
            }
        });
    }, [availableFilter, selectedFilters.laptops, setSlectedFilters]);

    return (
        <>
            {filterType !== "inStock" ? (
                filters.laptops[filterType].map((type, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        id={`${filterType}-${type}`}
                        label={type}
                        checked={selectedFilters.laptops[filterType].includes(
                            type.toLowerCase()
                        )}
                        onChange={() => {
                            toggleLpatopsFilters(
                                filterType,
                                type.toLowerCase()
                            );
                        }}
                        disabled={
                            !availableFilter[filterType].includes(
                                type.toLowerCase()
                            )
                        }
                    />
                ))
            ) : (
                <Form.Check
                    type={"checkbox"}
                    id={`${filterType}`}
                    label={`In Stock`}
                    checked={selectedFilters.laptops.inStock}
                    onChange={(e) => {
                        toggleLpatopsFilters("inStock", e.target.checked);
                    }}
                />
            )}
        </>
    );
}
