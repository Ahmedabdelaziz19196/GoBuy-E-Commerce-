import "./LaptopsSwiper.css";
import Container from "@mui/material/Container";
import ResponsiveSliderLaptops from "./ResponsiveSliderLaptops";

export default function LaptopsSwiper() {
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
            </Container>
        </div>
    );
}
