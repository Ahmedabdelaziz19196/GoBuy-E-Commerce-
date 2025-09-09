import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./PageCategories.css";
import { Link } from "react-router-dom";
export default function PageCategories() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ margin: "20px 0px " }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <div>
                        <Link to="laptops">
                            <div
                                style={{
                                    border: "2px solid #b3b3b3",
                                    overflow: "hidden",
                                    width: "100%",
                                    borderRadius: "20px ",
                                    position: "relative",
                                    cursor: "pointer",
                                }}
                                className="page-category"
                            >
                                <img
                                    src="/imgs/laptop2.jpg"
                                    alt="laptop"
                                    style={{ width: "100%" }}
                                />
                                <p
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        left: "22px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    LAPTOPS
                                </p>
                            </div>
                        </Link>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <div>
                        <Link to="monitors">
                            <div
                                style={{
                                    border: "2px solid #b3b3b3",
                                    overflow: "hidden",
                                    width: "100%",
                                    borderRadius: "20px ",
                                    position: "relative",
                                    cursor: "pointer",
                                }}
                                className="page-category"
                            >
                                <img
                                    src="/imgs/CB_Gaming_Laptops_copyJPG.jpg"
                                    alt="laptop"
                                    style={{ width: "100%" }}
                                />
                                <p
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        left: "22px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    MONITORS
                                </p>
                            </div>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
