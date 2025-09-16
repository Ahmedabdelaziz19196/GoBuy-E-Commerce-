import "./LaptopsPage.css";
import PageCategoryHeader from "./PageCategoryHeader";
import Grid from "@mui/material/Grid";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { useEffect, useState, useContext, useMemo } from "react";
import LaptopsLinedView from "./LaptopsListView";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useFilter } from "../Context/ProductFilters";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import ThePagination from "./ThePagination";
import LaptopsGridView from "./LaptopsGridView";
import SideFilterUIComp from "./SideFilterUIComp";
import SideFiltersForMobiles from "./SideFiltersForMobiles";
import LinearProgress from "@mui/material/LinearProgress";
import { useLaptops } from "../Context/laptopsProducts";
import { useSearchParams } from "react-router-dom";

export default function LaptopsPage({
    setViewedProducts,
    setFavProducts,
    favIconClickdedIndex,
    setFavIconClickedIndex,
    cartIconClickdedIndex,
    setCartIconClickedIndex,
    setCartProducts,
    updateFavAndCartProducts,
    currentProducts,
    setCurrentProducts,
}) {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    const [currentViewProducts, setCurrentViewProducts] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageValue, setPerPageValue] = useState("25");
    const [sortingMethod, setSortingMethod] = useState("None");
    const [sortedPriceProducts, setSortedPriceProducts] = useState([]);
    const { FilteredLapstopsProductsList } = useFilter();
    const [sideFiltersShown, setSideFiltersShown] = useState(false);
    const [SideFilterState, setSideFilerState] = useState(true);
    const { laptopsProductsList } = useLaptops();
    const [pageParams, setPageParams] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        selectedFilters,
        filters,
        minPrice,
        maxPrice,
        setSlectedFilters,
        setPrice,
    } = useFilter();
    console.log(currentViewProducts);
    const filterKeys = useMemo(
        () => [
            "categories",
            "brand",
            "processors",
            "generations",
            "vgaNumbers",
            "screenSizes",
            "refreshRates",
            "ramOptions",
            "storageOptions",
        ],
        []
    );
    useEffect(() => {
        let params = [];
        filterKeys.forEach((key) => {
            const selectedItems = selectedFilters.laptops[key];
            const indexs = selectedItems.map((item) =>
                filters.laptops[key].findIndex(
                    (ele) => ele.toLowerCase() === item
                )
            );
            params.push(indexs.join("") || "");
        });

        let inStockParam = "";
        if (selectedFilters.laptops.inStock) {
            inStockParam = 1;
        } else {
            inStockParam = 0;
        }

        const minPriceParam =
            selectedFilters.laptops.priceOptions[0] / 1000 || minPrice / 1000;

        const maxPriceParam =
            selectedFilters.laptops.priceOptions[1] / 1000 || maxPrice / 1000;

        setSearchParams({
            filters: [
                currentPage || 1,
                perPageValue || 25,
                ...params,
                minPriceParam,
                maxPriceParam,
                inStockParam,
            ].join("-"),
        });
    }, [
        filters,
        setSearchParams,
        currentPage,
        perPageValue,
        selectedFilters,
        minPrice,
        maxPrice,
        filterKeys,
    ]);

    useEffect(() => {
        const filtersFromParams = searchParams.get("filters");

        if (filtersFromParams && filtersFromParams !== pageParams) {
            setPageParams(filtersFromParams);
            const restorePageParams = filtersFromParams.split("-");
            setCurrentPage(+restorePageParams[0] || 1);
            setPerPageValue(restorePageParams[1] || "25");
            filterKeys.forEach((key, index) => {
                const restoredDataParams = restorePageParams[index + 2];
                const restoredCategories = restoredDataParams
                    .split("")
                    .map((ele) =>
                        filters.laptops[key]
                            .filter((_, index) => {
                                return index === Number(ele);
                            })
                            .join("")
                    )
                    .map((item) => item.toLowerCase());

                setSlectedFilters((prev) => ({
                    ...prev,
                    laptops: {
                        ...prev.laptops,
                        [key]: restoredCategories,
                    },
                }));
            });
            setPrice([
                +restorePageParams[11] * 1000,
                +restorePageParams[12] * 1000,
            ]);
            setSlectedFilters((prev) => ({
                ...prev,
                laptops: {
                    ...prev.laptops,
                    priceOptions: [
                        +restorePageParams[11] * 1000,
                        +restorePageParams[12] * 1000,
                    ],
                    inStock: restorePageParams[13] === "0" ? false : true,
                },
            }));
        }
    }, [
        setPageParams,
        searchParams,
        pageParams,
        setSlectedFilters,
        filters,
        filterKeys,
        setPrice,
    ]);
    useEffect(() => {
        const pageView = localStorage.getItem("pageView");
        setCurrentViewProducts(pageView || "grid");
    }, []);
    //Sorting Data
    const productsToSort = [
        { sorting: "None" },
        { sorting: "Heigh to Low" },
        { sorting: "Low to Heigh" },
    ];
    useEffect(() => {
        let sortingPrice = [...FilteredLapstopsProductsList];
        if (sortingMethod === "Low to Heigh") {
            sortingPrice = [...FilteredLapstopsProductsList].sort(
                (laptopA, laptopB) => {
                    const priceA = parseInt(
                        laptopA.price.replace(/[^0-9]/g, ""),
                        10
                    );
                    const priceB = parseInt(
                        laptopB.price.replace(/[^0-9]/g, ""),
                        10
                    );
                    return priceA - priceB;
                }
            );
        } else if (sortingMethod === "Heigh to Low") {
            sortingPrice = [...FilteredLapstopsProductsList].sort(
                (laptopA, laptopB) => {
                    const priceA = parseInt(
                        laptopA.price.replace(/[^0-9]/g, ""),
                        10
                    );
                    const priceB = parseInt(
                        laptopB.price.replace(/[^0-9]/g, ""),
                        10
                    );
                    return priceB - priceA;
                }
            );
        } else if (sortingMethod === "None") {
            sortingPrice = [...FilteredLapstopsProductsList];
        }
        setSortedPriceProducts(sortingPrice);
    }, [
        FilteredLapstopsProductsList,
        sortingMethod,
        currentPage,
        perPageValue,
    ]);

    //Sorting Data
    // Set for the Pagination
    useEffect(() => {
        const indexOfLastItem = currentPage * perPageValue;
        const indexOfFirstItem = indexOfLastItem - perPageValue;
        const Products = sortedPriceProducts.slice(
            indexOfFirstItem,
            indexOfLastItem
        );
        setCurrentProducts(Products);
    }, [currentPage, perPageValue, setCurrentProducts, sortedPriceProducts]);
    const perPageValueRadios = [
        { perPage: "15" },
        { perPage: "25" },
        { perPage: "35" },
    ];

    // Set for the Pagination

    function handleShowFilters() {
        setSideFiltersShown(true);
    }

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
        const handleResize = () => {
            if (window.innerWidth <= 599) {
                setSideFilerState(false);
            } else {
                setSideFilerState(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setSideFilerState]);

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
            {laptopsProductsList.length === 0 ? (
                <div style={{ position: "sticky", top: "99px", zIndex: "999" }}>
                    <LinearProgress style={{ background: "white" }} />
                </div>
            ) : (
                ""
            )}
            <PageCategoryHeader />
            <Grid container spacing={2} sx={{ margin: "0px 20px 20px 20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2.5 }}>
                    {SideFilterState ? <SideFilterUIComp /> : ""}
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
                                style={{ padding: "4px 10px" }}
                                className="gategories d-md-none d-lg-none align-items-center justify-content-center d-flex"
                                onClick={handleShowFilters}
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
                                onClick={() => {
                                    const pageView = "list";
                                    setCurrentViewProducts(pageView);
                                    localStorage.setItem("pageView", pageView);
                                }}
                            >
                                <ViewHeadlineIcon />
                            </div>
                            <div
                                className={`sorting-icon ${
                                    currentViewProducts === "grid"
                                        ? "clicked"
                                        : ""
                                } d-none d-lg-block d-md-block`}
                                onClick={() => {
                                    const pageView = "grid";
                                    setCurrentViewProducts("grid");
                                    localStorage.setItem("pageView", pageView);
                                }}
                            >
                                <AppsIcon />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-lg-center mt-2 gap-1 flex-column flex-lg-row flex-md-row">
                        <p
                            style={{
                                color: "var(--main-color)",
                                fontWeight: "bold",
                            }}
                        >
                            Price Sorting By :
                        </p>
                        <ButtonGroup>
                            {productsToSort.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`sorting-${idx}`}
                                    type="radio"
                                    name="sorting"
                                    value={radio.sorting}
                                    checked={sortingMethod === radio.sorting}
                                    onChange={(e) => {
                                        setSortingMethod(e.currentTarget.value);
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
                                    {radio.sorting}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>

                    {currentProducts.length === 0 ? (
                        <h5
                            style={{
                                marginTop: "10px",
                                color: "var(--main-color)",
                                textDecoration: "ununderline",
                            }}
                        >
                            No Laptops Found
                        </h5>
                    ) : currentViewProducts === "grid" ? (
                        <LaptopsGridView
                            currentProducts={currentProducts}
                            setFavProducts={setFavProducts}
                            favIconClickdedIndex={favIconClickdedIndex}
                            setFavIconClickedIndex={setFavIconClickedIndex}
                            cartIconClickdedIndex={cartIconClickdedIndex}
                            setCartIconClickedIndex={setCartIconClickedIndex}
                            setCartProducts={setCartProducts}
                            updateFavAndCartProducts={updateFavAndCartProducts}
                        />
                    ) : (
                        <LaptopsLinedView
                            currentProducts={currentProducts}
                            setFavProducts={setFavProducts}
                            favIconClickdedIndex={favIconClickdedIndex}
                            setFavIconClickedIndex={setFavIconClickedIndex}
                            cartIconClickdedIndex={cartIconClickdedIndex}
                            setCartIconClickedIndex={setCartIconClickedIndex}
                            setCartProducts={setCartProducts}
                            updateFavAndCartProducts={updateFavAndCartProducts}
                        />
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
                <SideFiltersForMobiles
                    sideFiltersShown={sideFiltersShown}
                    setSideFiltersShown={setSideFiltersShown}
                />
            </Grid>
        </>
    );
}
