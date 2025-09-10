import { Form } from "react-bootstrap";
import { useFilter } from "../Context/ProductFilters";

export default function LaptopsFilter({ filterType }) {
    const { filters, selectedFilters, toggleLpatopsFilters, availableFilter } =
        useFilter();
    // console.log(availableFilter);
    function filter(type) {
        if (filterType === "categories") {
            return !availableFilter[filterType].includes(type.toLowerCase());
        }
        if (filterType === "brand") {
            return !availableFilter[filterType].includes(type.toLowerCase());
        }
    }
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
                        onChange={() =>
                            toggleLpatopsFilters(filterType, type.toLowerCase())
                        }
                        disabled={filter(type)}
                    />
                ))
            ) : (
                <Form.Check
                    type={"checkbox"}
                    id={`${filterType}`}
                    label={`In Stock`}
                    checked={selectedFilters.laptops.inStock}
                    onChange={(e) =>
                        toggleLpatopsFilters("inStock", e.target.checked)
                    }
                />
            )}
        </>
    );
}
