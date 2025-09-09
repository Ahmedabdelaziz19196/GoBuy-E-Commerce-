import "./LaptopsPage.css";
import PageCategoryHeader from "./PageCategoryHeader";
import Grid from "@mui/material/Grid";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { useEffect, useState, useContext } from "react";
import LaptopsLinedView from "./LaptopsListView";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useFilter } from "../Context/ProductFilters";
import { useProduct } from "../Context/TheProducts";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import ThePagination from "./ThePagination";
import LaptopsGridView from "./LaptopsGridView";
import SideFilterUIComp from "./SideFilterUIComp";
export default function LaptopsPage() {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    const [currentViewProducts, setCurrentViewProducts] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageValue, setPerPageValue] = useState("25");
    const { FilteredLapstopsProductsList } = useFilter();
    const { laptopsList } = useProduct();

    const x = laptopsList.map((ele) => {
        return ele.storage;
    });
    const y = new Set(x);
    console.log(y);

    // Set for the Pagination
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
                    <SideFilterUIComp />
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
