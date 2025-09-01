import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResponsiveSlider.css";
import React, { useEffect, useState } from "react";

function NextArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;
    const screenWidth = window.innerWidth;
    let lastSlide = 0;
    if (screenWidth < 600) {
        lastSlide = currentSlide;
    } else if (screenWidth < 1024) {
        lastSlide = currentSlide + 3;
    } else {
        lastSlide = currentSlide + 5;
    }
    // console.log(showCurrent);
    return lastSlide >= slideCount - 1 ? null : (
        <div
            className={className}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon
                style={{ color: "var(--main-color)", fontSize: 22 }}
            />
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick, currentSlide } = props;
    return currentSlide <= 0 ? null : (
        <div
            className={className}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <ArrowBackIosNewIcon
                style={{ color: "var(--main-color)", fontSize: 22 }}
            />
        </div>
    );
}

function ResponsiveSliderMonitors() {
    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: false,
        speed: 500,

        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    useEffect(() => {
        const updateSettingsBasedOnScreen = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 600) {
                setSliderSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }));
            } else if (screenWidth < 1024) {
                setSliderSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }));
            } else {
                setSliderSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }));
            }
        };

        updateSettingsBasedOnScreen();
        window.addEventListener("resize", updateSettingsBasedOnScreen);

        return () => {
            window.removeEventListener("resize", updateSettingsBasedOnScreen);
        };
    }, []);

    return (
        <div
            className="slider-container"
            style={{ padding: "20px", minHeight: "120px" }}
        >
            <Slider {...sliderSettings}>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX2712.png"
                            alt="laptop"
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                background: "#e7e7e7",
                            }}
                        />
                        <div>
                            <h4 style={{ color: "var(--main-color)" }}>
                                10,500 EGP
                            </h4>
                        </div>
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 ...
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ResponsiveSliderMonitors;
