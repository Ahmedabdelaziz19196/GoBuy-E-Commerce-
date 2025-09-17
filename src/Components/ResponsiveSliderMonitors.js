import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResponsiveSlider.css";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import sliderDefaultSettings from "../Functions/sliderDefaultSettings";
import updateSettingsBasedOnScreen from "../Functions/updateSliderSettings";
import { monitorsProductsList } from "../monitorsProductsList";

function ResponsiveSliderMonitors() {
    const [sliderSettings, setSliderSettings] = useState(sliderDefaultSettings);
    useEffect(() => {
        updateSettingsBasedOnScreen(setSliderSettings);
        window.addEventListener("resize", () =>
            updateSettingsBasedOnScreen(setSliderSettings)
        );
        return () => {
            window.removeEventListener("resize", () =>
                updateSettingsBasedOnScreen(setSliderSettings)
            );
        };
    }, []);

    const slicedMonitorsToShow = useMemo(() => {
        const theList = monitorsProductsList.slice(0, 8);
        return theList;
    }, []);
    return (
        <div
            className="slider-container"
            style={{ padding: "20px", minHeight: "120px" }}
        >
            {slicedMonitorsToShow?.length > 0 ? (
                <Slider {...sliderSettings}>
                    {slicedMonitorsToShow.map((ele) => (
                        <Link
                            key={ele.productid}
                            to="/monitors"
                            className="slider-link"
                        >
                            <div
                                style={{
                                    border: "1px solid #b3b3b3",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    background: "#fff",
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                                }}
                            >
                                <div>
                                    <img
                                        src={ele.productImageOne}
                                        alt="laptop"
                                        style={{
                                            width: "100%",
                                            borderRadius: "10px",
                                            boxShadow: "#0000001a 0px 0px 10px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontSize: "18px",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {ele.price}
                                        </h5>
                                        <img
                                            src={ele.brandImage}
                                            alt="brand"
                                            style={{
                                                height: "15px",
                                                background: "#f6f8fa",
                                            }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            fontSize: "14px",
                                            transition: "0.2s",
                                        }}
                                    >
                                        {ele.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            ) : (
                <p style={{ textAlign: "center" }}>No products available</p>
            )}
        </div>
    );
}

export default ResponsiveSliderMonitors;
