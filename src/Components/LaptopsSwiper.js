import "./LaptopsSwiper.css";
import Container from "@mui/material/Container";
import ResponsiveSliderLaptops from "./ResponsiveSliderLaptops";
import { useState } from "react";

export default function LaptopsSwiper() {
    const [viewAllClick, setViewAllClick] = useState(false);
    function handleViewAllClickUI() {
        setViewAllClick(true);
        setTimeout(() => setViewAllClick(false), 250);
    }
    return (
        <div className="ps-3 pe-3 ">
            <div className="selection-header">
                <p style={{ background: "white", padding: "0px 5px" }}>
                    VIEW
                    <span
                        style={{
                            color: "var(--main-color)",
                        }}
                    >
                        {` LAPTOPS`}
                    </span>
                </p>
            </div>
            <Container maxWidth="xl">
                <ResponsiveSliderLaptops />
                <div
                    className="d-flex align-items-center justify-content-center  fit-content mt-2 mb-2"
                    onClick={handleViewAllClickUI}
                >
                    <p
                        className={`view-all ${
                            viewAllClick ? "icon-clicked" : ""
                        }`}
                    >
                        View All
                    </p>
                </div>
            </Container>
        </div>
    );
}
