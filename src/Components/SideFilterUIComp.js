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
    const [price, setPrice] = useState([18000, 300000]);
    const [resetllClick, setresetllClick] = useState(false);
    const { filters } = useFilter();

    function handleChange(event, newValue) {
        setPrice(newValue);
    }
    function handleViewAllClickUI() {
        setresetllClick(true);
        setTimeout(() => setresetllClick(false), 250);
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
                        <LaptopsFilter filterType="categories" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div
                style={{
                    width: "100%",
                    // height: "200px",
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
                            Brand
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
                            Processor
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
                            Generations
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
                            VGA Number
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
                            Screen Size
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
                            Refresh Rate
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
                            RAM
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
                            Storage
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
                                            placeholder="18000"
                                            value={price[0]}
                                            onChange={(e) => {
                                                const newPrice = [...price];
                                                newPrice[0] = e.target.value;
                                                setPrice(newPrice);
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
                                            placeholder="300000"
                                            value={price[1]}
                                            onChange={(e) => {
                                                const newPrice = [...price];
                                                newPrice[1] = e.target.value;
                                                setPrice(newPrice);
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
                                    min={18000}
                                    max={300000}
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
                                    <p>18000 EGP</p>
                                    <p>300000 EGP</p>
                                </div>
                            </Box>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Price */}
                <div
                    className="text-center  w-100 mt-2 mb-2"
                    onClick={handleViewAllClickUI}
                >
                    <p
                        className={`view-all ${
                            resetllClick ? "icon-clicked" : ""
                        }`}
                    >
                        Reset
                    </p>
                </div>
            </div>
        </div>
    );
}
