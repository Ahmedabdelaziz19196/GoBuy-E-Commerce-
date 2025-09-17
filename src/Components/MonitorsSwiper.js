import "./LaptopsSwiper.css";
import Container from "@mui/material/Container";
import ResponsiveSliderMonitors from "./ResponsiveSliderMonitors";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MonitorsSwiper() {
    const [viewAllClick, setViewAllClick] = useState(false);
    function handleViewAllClickUI() {
        setViewAllClick(true);
        setTimeout(() => setViewAllClick(false), 250);
    }
    return (
        <div className="ps-3 pe-3 mb-3 ">
            <div className="selection-header">
                <p style={{ background: "white", padding: "0px 5px" }}>
                    VIEW
                    <span
                        style={{
                            color: "var(--main-color)",
                        }}
                    >
                        {` MONITORS`}
                    </span>
                </p>
            </div>
            <Container maxWidth="xl">
                <ResponsiveSliderMonitors />
                <Link
                    to="/monitors"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
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
                </Link>
            </Container>
        </div>
    );
}
