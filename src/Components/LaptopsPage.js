import PageCategoryHeader from "./PageCategoryHeader";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./LaptopsPage.css";
import Fuse from "fuse.js";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useState } from "react";
export default function LaptopsPage() {
    const [vGASearch, setVGASearch] = useState("");
    // const [price, setPrice] = useState({
    //     min: 18000,
    //     max: 300000,
    // });
    const [price, setPrice] = useState([18000, 300000]);

    function handleChange(event, newValue) {
        setPrice(newValue);
    }

    const brand = ["Hp", "Dell", "Lenovo", "Msi", "Acer", "Asus", "Razer"];
    const processors = [
        "AMD Ryzen AI 9",
        "Intel Core 5",
        "Intel Core 7",
        "Intel Core i7",
        "Intel Core Ultra 7",
        "Intel Core Ultra 9",
        "Intel Core i5",
        "Intel Core i9",
        "AMD Ryzen 5",
        "AMD Ryzen 7",
        "AMD Ryzen 9",
    ];
    const generations = [
        "14th generation",
        "4th Generation",
        "10th generation",
        "11th generation",
        "12th generation",
        "13th generation",
    ];
    const vgaNumbers = [
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
    ];
    const options = {
        includeScore: true,
        threshold: 0.3,
    };
    const fuse = new Fuse(vgaNumbers, options);
    const result = fuse.search(vGASearch);
    const SearchedVGA = result.map((type) => type.item);

    const screenSizes = [
        '13.4"',
        '14"',
        '15"',
        '15.6"',
        '16"',
        '16.1"',
        '17"',
        '17.3"',
        '18"',
    ];
    const refreshRates = [
        "60 Hz",
        "120 Hz",
        "144 Hz",
        "165 Hz",
        "240 Hz",
        "300 Hz",
        "360 Hz",
    ];
    const ramOptions = ["8 GB", "12 GB", "16 GB", "24 GB", "32 GB", "64 GB"];
    const storageOptions = [
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
    ];
    return (
        <>
            <PageCategoryHeader />
            <Grid container spacing={2} sx={{ margin: "0px 20px 20px 20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2.5 }}>
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
                                    <Form.Check
                                        type={"checkbox"}
                                        id={`Gaming Laptops`}
                                        label={`Gaming Laptops`}
                                    />
                                    <Form.Check
                                        type={"checkbox"}
                                        id={`Business Laptops`}
                                        label={`Business Laptops`}
                                    />
                                    <Form.Check
                                        type={"checkbox"}
                                        id={`Personal Laptops`}
                                        label={`Personal Laptops`}
                                    />
                                    <Form.Check
                                        type={"checkbox"}
                                        id={` Graphics & Design Laptops`}
                                        label={` Graphics & Design Laptops`}
                                    />
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Available
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        <Form.Check
                                            type={"checkbox"}
                                            id={`In stock`}
                                            label={`In stock`}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* Stock */}
                            {/* Brands */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Brand
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {brand.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* Brands */}
                            {/* Processor */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Processor
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {processors.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* Processor */}
                            {/* generations */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Generations
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {generations.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* generations */}
                            {/* vgaNumbers */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                                    transform:
                                                        "translateY(-50%)",
                                                    cursor: "pointer",
                                                    display: vGASearch
                                                        ? "block"
                                                        : "none",
                                                }}
                                                onClick={() => setVGASearch("")}
                                            >
                                                <ClearIcon />
                                            </div>
                                        </div>

                                        {vGASearch === "" ? (
                                            vgaNumbers.map((type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            ))
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Screen Size
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {screenSizes.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* screenSizes */}
                            {/* refreshRates */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Refresh Rate
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {refreshRates.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* refreshRates */}
                            {/* ramOptions */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        RAM
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {ramOptions.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* ramOptions */}
                            {/* storageOptions */}
                            <Accordion className="accordion-two">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
                                    <Accordion.Header className="accordion-two">
                                        Storage
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-two">
                                        {storageOptions.map((type, index) => (
                                            <Form.Check
                                                key={index}
                                                type={"checkbox"}
                                                id={type}
                                                label={type}
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* storageOptions */}
                            {/* Price */}
                            <Accordion className="accordion-two accordion-last">
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                                            const newPrice = [
                                                                ...price,
                                                            ];
                                                            newPrice[0] =
                                                                e.target.value;
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
                                                            const newPrice = [
                                                                ...price,
                                                            ];
                                                            newPrice[1] =
                                                                e.target.value;
                                                            setPrice(newPrice);
                                                        }}
                                                    />
                                                    <p>EGP </p>
                                                </div>
                                            </div>
                                            <Slider
                                                getAriaLabel={() =>
                                                    "Price range"
                                                }
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
                                                    justifyContent:
                                                        "space-between",
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
                        </div>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9.5 }}>
                    {/* <LaptopCategory /> */}
                </Grid>
            </Grid>
        </>
    );
}
