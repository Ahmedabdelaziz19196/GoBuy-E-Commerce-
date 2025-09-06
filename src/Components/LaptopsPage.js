import "./LaptopsPage.css";
import PageCategoryHeader from "./PageCategoryHeader";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Fuse from "fuse.js";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import LaptopsLinedView from "./LaptopsListView";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useFilter } from "../Context/ProductFilters";
import { useProduct } from "../Context/TheProducts";
import ThePagination from "./ThePagination";
import LaptopsGridView from "./LaptopsGridView";
export default function LaptopsPage() {
    const [vGASearch, setVGASearch] = useState("");
    const [price, setPrice] = useState([18000, 300000]);
    const [resetllClick, setresetllClick] = useState(false);
    const [currentViewProducts, setCurrentViewProducts] = useState("grid");
    const { laptops } = useFilter();
    const { laptopsList } = useProduct();

    // Set for the Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageValue, setPerPageValue] = useState("16");
    const indexOfLastItem = currentPage * perPageValue;
    const indexOfFirstItem = indexOfLastItem - perPageValue;
    const currentProducts = laptopsList.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    // Set for the Pagination
    const perPageValueRadios = [
        { perPage: "16" },
        { perPage: "24" },
        { perPage: "32" },
        { perPage: "64" },
    ];

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
    const fuse = new Fuse(laptops.vgaNumbers, options);
    const result = fuse.search(vGASearch);
    const SearchedVGA = result.map((type) => type.item);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 599) {
                setCurrentViewProducts("square");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setCurrentViewProducts]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);
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
                                        {laptops.brand.map((type, index) => (
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
                                        {laptops.processors.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                                        {laptops.generations.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                                            laptops.vgaNumbers.map(
                                                (type, index) => (
                                                    <Form.Check
                                                        key={index}
                                                        type={"checkbox"}
                                                        id={type}
                                                        label={type}
                                                    />
                                                )
                                            )
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
                                        {laptops.screenSizes.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                                        {laptops.refreshRates.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                                        {laptops.ramOptions.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                                        {laptops.storageOptions.map(
                                            (type, index) => (
                                                <Form.Check
                                                    key={index}
                                                    type={"checkbox"}
                                                    id={type}
                                                    label={type}
                                                />
                                            )
                                        )}
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
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9.5 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "4px",
                            }}
                        >
                            <p
                                style={{
                                    color: "var(--main-color)",
                                    fontWeight: "bold",
                                }}
                            >
                                Per Page :
                            </p>
                            <ButtonGroup>
                                {perPageValueRadios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.perPage}
                                        checked={perPageValue === radio.perPage}
                                        onChange={(e) => {
                                            setPerPageValue(
                                                e.currentTarget.value
                                            );
                                            setCurrentPage(1);
                                        }}
                                        style={{
                                            paddingTop: "1px",
                                            paddingBottom: "1px",
                                            display: "flex",
                                            alignItems: "center",
                                            height: "30px",
                                            background: "white",
                                            color: "black",
                                            border: "1px solid #e7e7e7",
                                        }}
                                    >
                                        {radio.perPage}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>

                        <div
                            style={{ display: "flex", justifyContent: "right" }}
                        >
                            <div
                                className="gategories d-md-none d-lg-none align-items-center justify-content-center d-flex"
                                // onClick={handleShowCategories}
                            >
                                <TuneIcon />
                                <p>Filter</p>
                            </div>
                            <div className="sorting-icon d-block d-lg-none d-md-none"></div>
                            <div
                                className={`sorting-icon ${
                                    currentViewProducts === "list"
                                        ? "clicked"
                                        : ""
                                } d-none d-lg-block d-md-block`}
                                onClick={() => setCurrentViewProducts("list")}
                            >
                                <ViewHeadlineIcon />
                            </div>
                            <div
                                className={`sorting-icon ${
                                    currentViewProducts === "grid"
                                        ? "clicked"
                                        : ""
                                } d-none d-lg-block d-md-block`}
                                onClick={() => setCurrentViewProducts("grid")}
                            >
                                <AppsIcon />
                            </div>
                        </div>
                    </div>

                    {currentViewProducts === "grid" ? (
                        <LaptopsGridView currentProducts={currentProducts} />
                    ) : (
                        <LaptopsLinedView currentProducts={currentProducts} />
                    )}
                    <ThePagination
                        perPageValue={perPageValue}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Grid>
            </Grid>
        </>
    );
}
