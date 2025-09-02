import CategoriesForLaptops from "./CategoriesForLaptops";
import Grid from "@mui/material/Grid";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function LaptopCategory({
    selectedCat,
    setSelectedCat,
    categories,
}) {
    const { category } = useParams();

    useEffect(() => {
        const index = categories.findIndex((cat) => cat === category);
        setSelectedCat(index);
    }, [category, categories, setSelectedCat]);
    return (
        <>
            <div
                style={{
                    margin: "10px 20px",
                    borderBottom: "1px solid #b3b3b3",
                    paddingBottom: "10px",
                }}
            >
                <h3 style={{ textTransform: "uppercase", fontWeight: "900" }}>
                    <span style={{ color: "var(--main-color)" }}>
                        {category.split(" ")[0]}
                    </span>{" "}
                    category
                </h3>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        color: "#b3b3b3",
                    }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <p style={{ cursor: "pointer" }} className="home">
                            Home
                        </p>
                    </Link>
                    <p>/</p>
                    <Link
                        to="/laptops"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <p style={{ cursor: "pointer" }} className="home">
                            Laptops
                        </p>
                    </Link>
                    <p>/</p>
                    <p style={{ cursor: "text" }}>{category}</p>
                </div>
            </div>

            <Grid container spacing={2} sx={{ margin: "0px 20px 20px 20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2.5 }}>
                    <CategoriesForLaptops
                        selectedCat={selectedCat}
                        setSelectedCat={setSelectedCat}
                        categories={categories}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9.5 }}></Grid>
            </Grid>
        </>
    );
}
