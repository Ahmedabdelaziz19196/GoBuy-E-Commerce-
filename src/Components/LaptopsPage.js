import PageCategoryHeader from "./PageCategoryHeader";
import Grid from "@mui/material/Grid";
import "./LaptopsPage.css";
import CategoriesForLaptops from "./CategoriesForLaptops";
import { useEffect } from "react";

export default function LaptopsPage({
    selectedCat,
    setSelectedCat,
    categories,
}) {
    useEffect(() => {
        setSelectedCat(null);
    }, [setSelectedCat]);
    return (
        <>
            <PageCategoryHeader />
            <Grid container spacing={2} sx={{ margin: "0px 20px 20px 20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2.5 }}>
                    <CategoriesForLaptops
                        selectedCat={selectedCat}
                        setSelectedCat={setSelectedCat}
                        categories={categories}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9.5 }}>
                    {/* <LaptopCategory /> */}
                </Grid>
            </Grid>
        </>
    );
}
