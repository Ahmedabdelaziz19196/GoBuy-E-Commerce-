import "./LaptopsPage.css";

import Fuse from "fuse.js";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import LaptopsFilter from "./LaptopsFilter";
import { useState } from "react";
import { useFilter } from "../Context/ProductFilters";

export default function SideFilterUIComp() {
    const [vGASearch, setVGASearch] = useState("");
    const [resetllClick, setresetllClick] = useState(false);
    const {
        filters,
        price,
        setPrice,
        setSlectedFilters,
        minPrice,
        maxPrice,
        selectedFilters,
    } = useFilter();

    function handleChange(event, newValue) {
        setPrice(newValue);
        if (newValue[0] === minPrice && newValue[1] === maxPrice) {
            setSlectedFilters((prev) => ({
                ...prev,
                laptops: { ...prev.laptops, priceOptions: [] },
            }));
        } else {
            setSlectedFilters((prev) => ({
                ...prev,
                laptops: {
                    ...prev.laptops,
                    priceOptions: [newValue[0], newValue[1]],
                },
            }));
        }
    }
    function handleResetFilters() {
        setSlectedFilters((prev) => ({
            ...prev,
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
        }));
        setresetllClick(true);
        setTimeout(() => setresetllClick(false), 250);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        window.location.href = window.location.pathname;
    }

    function resetCategory(e) {
        const theCategory = e.target.className.split(" ")[1];
        setSlectedFilters((prev) => ({
            ...prev,
            laptops: { ...prev.laptops, [theCategory]: [] },
        }));
    }

    const options = {
        includeScore: true,
        threshold: 0.3,
    };
    const fuse = new Fuse(filters.laptops.vgaNumbers, options);
    const result = fuse.search(vGASearch);
    const SearchedVGA = result.map((type) => type.item);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body>
                        {/* <LaptopsFilter filterType="categories" /> */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div
                style={{
                    width: "100%",
                    borderRadius: "10px",
                    background: "#f6f8fa",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                    padding: "16px",
                }}
            >
                <p
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        borderBottom: "1px solid #e7e7e7",
                        paddingBottom: "10px",
                    }}
                >
                    Product Filter
                </p>
                {/* Stock */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            Available
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="inStock" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Stock */}
                {/* Brands */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Brand ${
                                selectedFilters.laptops.brand.length
                                    ? `(${selectedFilters.laptops.brand.length})`
                                    : ""
                            }`}
                            {selectedFilters.laptops.brand.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory brand"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="brand" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Brands */}
                {/* Processor */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Processor ${
                                selectedFilters.laptops.processors.length
                                    ? `(${selectedFilters.laptops.processors.length})`
                                    : ""
                            }`}
                            {selectedFilters.laptops.processors.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory processors"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="processors" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Processor */}
                {/* generations */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Generations ${
                                selectedFilters.laptops.generations.length
                                    ? `(${selectedFilters.laptops.generations.length})`
                                    : ""
                            }`}
                            {selectedFilters.laptops.generations.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory generations"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="generations" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* generations */}
                {/* vgaNumbers */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`VGA Number ${
                                selectedFilters.laptops.vgaNumbers.length
                                    ? `(${selectedFilters.laptops.vgaNumbers.length})`
                                    : ""
                            }`}
                            {selectedFilters.laptops.vgaNumbers.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory vgaNumbers"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <div
                                style={{
                                    marginBottom: "10px",
                                    position: "relative",
                                }}
                            >
                                <input
                                    type="text"
                                    className="VGA-sreach"
                                    placeholder="Search..."
                                    value={vGASearch}
                                    onChange={(e) =>
                                        setVGASearch(e.target.value)
                                    }
                                />
                                <div
                                    style={{
                                        top: "50%",
                                        zIndex: 999,
                                        right: "10px",
                                        position: "absolute",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        display: vGASearch ? "block" : "none",
                                    }}
                                    onClick={() => setVGASearch("")}
                                >
                                    <ClearIcon />
                                </div>
                            </div>
                            {vGASearch === "" ? (
                                <LaptopsFilter filterType="vgaNumbers" />
                            ) : SearchedVGA.length > 0 ? (
                                SearchedVGA.map((type, index) => (
                                    <Form.Check
                                        key={index}
                                        type={"checkbox"}
                                        id={type}
                                        label={type}
                                    />
                                ))
                            ) : (
                                <p>No Matching Found</p>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* vgaNumbers */}
                {/* screenSizes */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Screen Size ${
                                selectedFilters.laptops.screenSizes.length
                                    ? `(${selectedFilters.laptops.screenSizes.length})`
                                    : ""
                            }`}
                            {selectedFilters.laptops.screenSizes.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory screenSizes"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="screenSizes" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* screenSizes */}
                {/* refreshRates */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Refresh Rate ${
                                selectedFilters.laptops.refreshRates.length
                                    ? `(${selectedFilters.laptops.refreshRates.length})`
                                    : ""
                            }`}{" "}
                            {selectedFilters.laptops.refreshRates.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory refreshRates"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="refreshRates" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* refreshRates */}
                {/* ramOptions */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`RAM ${
                                selectedFilters.laptops.ramOptions.length
                                    ? `(${selectedFilters.laptops.ramOptions.length})`
                                    : ""
                            }`}{" "}
                            {selectedFilters.laptops.ramOptions.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory ramOptions"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="ramOptions" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* ramOptions */}
                {/* storageOptions */}
                <Accordion className="accordion-two">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            {`Storage ${
                                selectedFilters.laptops.storageOptions.length
                                    ? `(${selectedFilters.laptops.storageOptions.length})`
                                    : ""
                            }`}{" "}
                            {selectedFilters.laptops.storageOptions.length ? (
                                <span
                                    style={{
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        backgroundColor: "var(--main-color)",
                                        width: "fit-content",
                                        marginLeft: "4px",
                                        padding: "0px 5px",
                                        borderRadius: "50%",
                                        color: "white",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetCategory(e);
                                    }}
                                    className="resetFilterCategory storageOptions"
                                >
                                    ×
                                </span>
                            ) : (
                                ""
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <LaptopsFilter filterType="storageOptions" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* storageOptions */}
                {/* Price */}
                <Accordion className="accordion-two accordion-last">
                    <Accordion.Item eventKey="0" className="accordion-two">
                        <Accordion.Header className="accordion-two">
                            Price
                        </Accordion.Header>
                        <Accordion.Body className="accordion-two">
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: "10px",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "left",
                                            alignItems: "center",
                                            gap: "5px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            FROM
                                        </p>
                                        <input
                                            style={{
                                                width: "80px",
                                            }}
                                            type="text"
                                            className="VGA-sreach"
                                            placeholder={minPrice}
                                            value={price[0]}
                                            onChange={(e) => {
                                                const value =
                                                    e.target.value.replace(
                                                        /[^0-9]/g,
                                                        ""
                                                    );
                                                const newPrice = [...price];
                                                newPrice[0] = value;
                                                setPrice(newPrice);
                                                setSlectedFilters((prev) => ({
                                                    ...prev,
                                                    laptops: {
                                                        ...prev.laptops,
                                                        priceOptions: [
                                                            value,
                                                            prev.laptops
                                                                .priceOptions[1] ||
                                                                maxPrice,
                                                        ],
                                                    },
                                                }));
                                            }}
                                        />
                                        <p>EGP </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "left",
                                            alignItems: "center",
                                            gap: "5px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            TO
                                        </p>
                                        <input
                                            style={{
                                                width: "80px",
                                                marginLeft: "22px",
                                            }}
                                            type="text"
                                            className="VGA-sreach"
                                            placeholder={maxPrice}
                                            value={price[1]}
                                            onChange={(e) => {
                                                const value =
                                                    e.target.value.replace(
                                                        /[^0-9]/g,
                                                        ""
                                                    );
                                                const newPrice = [...price];
                                                newPrice[1] = value;
                                                setPrice(newPrice);
                                                setSlectedFilters((prev) => ({
                                                    ...prev,
                                                    laptops: {
                                                        ...prev.laptops,
                                                        priceOptions: [
                                                            prev.laptops
                                                                .priceOptions[0] ||
                                                                minPrice,
                                                            value,
                                                        ],
                                                    },
                                                }));
                                            }}
                                        />
                                        <p>EGP </p>
                                    </div>
                                </div>
                                <Slider
                                    getAriaLabel={() => "Price range"}
                                    value={price}
                                    onChange={handleChange}
                                    // valueLabelDisplay="auto"
                                    min={minPrice}
                                    max={maxPrice}
                                    step={100}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        color: "var(--main-color)",
                                        fontSize: "13px",
                                    }}
                                >
                                    <p>{minPrice} EGP</p>
                                    <p>{maxPrice} EGP</p>
                                </div>
                            </Box>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Price */}

                <button
                    className={`view-all ${
                        resetllClick ? "icon-clicked" : ""
                    } text-center  w-100 mt-2 mb-2`}
                    onClick={handleResetFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
