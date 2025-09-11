import { Form } from "react-bootstrap";
import { useFilter } from "../Context/ProductFilters";

export default function LaptopsFilter({ filterType }) {
    const { filters, selectedFilters, toggleLpatopsFilters, availableFilter } =
        useFilter();
    // console.log(availableFilter);

    return (
        <>
            {filterType !== "inStock" ? (
                filters.laptops[filterType].map((type, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        id={`${filterType}-${type}`}
                        label={type}
                        onChange={() =>
                            toggleLpatopsFilters(filterType, type.toLowerCase())
                        }
                        disabled={
                            !availableFilter[filterType].includes(
                                type.toLowerCase()
                            )
                        }
                        checked={
                            !availableFilter[filterType].includes(
                                type.toLowerCase()
                            )
                                ? false
                                : selectedFilters.laptops[filterType].includes(
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
                    onChange={(e) =>
                        toggleLpatopsFilters("inStock", e.target.checked)
                    }
                />
            )}
        </>
    );
}
