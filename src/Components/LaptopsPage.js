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
import { useEffect, useState, useContext } from "react";
import LaptopsLinedView from "./LaptopsListView";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useFilter } from "../Context/ProductFilters";
import { useProduct } from "../Context/TheProducts";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import ThePagination from "./ThePagination";
import LaptopsGridView from "./LaptopsGridView";
import LaptopsFilter from "./LaptopsFilter";
export default function LaptopsPage() {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    const [vGASearch, setVGASearch] = useState("");
    const [price, setPrice] = useState([18000, 300000]);
    const [resetllClick, setresetllClick] = useState(false);
    const [currentViewProducts, setCurrentViewProducts] = useState("grid");
    const { filters, selectedFilters } = useFilter();
    const { laptopsList } = useProduct();

    // Set for the Pagination
    //filter Laptops
    const x = laptopsList.map((ele) => {
        return ele.processor.name;
    });
    const y = new Set(x);
    console.log(y);
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
    //filter Laptops

    const [currentPage, setCurrentPage] = useState(1);
    const [perPageValue, setPerPageValue] = useState("25");
    const indexOfLastItem = currentPage * perPageValue;
    const indexOfFirstItem = indexOfLastItem - perPageValue;
    const currentProducts = FilteredLapstopsProductsList.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const perPageValueRadios = [
        { perPage: "15" },
        { perPage: "25" },
        { perPage: "35" },
    ];
    // Set for the Pagination

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 599) {
                setCurrentViewProducts("grid");
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

    useEffect(() => {
        setSideCategoriesShow(false);
    }, [setSideCategoriesShow]);

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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                                <Accordion.Item
                                    eventKey="0"
                                    className="accordion-two"
                                >
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
                        FilteredLapstopsProductsList={
                            FilteredLapstopsProductsList
                        }
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </Grid>
            </Grid>
        </>
    );
}
