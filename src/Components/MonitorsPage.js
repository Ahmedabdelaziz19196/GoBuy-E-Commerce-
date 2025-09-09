import PageCategoryHeader from "./PageCategoryHeader";
import { useContext, useEffect } from "react";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";

export default function MonitorsPage() {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    useEffect(() => {
        setSideCategoriesShow(false);
    }, [setSideCategoriesShow]);
    return (
        <>
            <PageCategoryHeader />
            <Container
                maxWidth="xl"
                sx={{ textAlign: "center", height: "calc(100vh - 300px)" }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <h3 style={{ margin: "0" }}>Progress On Fire</h3>
                    <img
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3R6OWQ1ejZnN3hmNW5ja2o3OXJqYWJwcjFvaTBoZzBjcmY5ZzhrYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JWybLzXs7Hn0JKhSji/giphy.gif"
                        alt="on fire"
                        style={{ width: "390px" }}
                    />
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button className="gategories ">
                            <p>Go Home</p>
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}
