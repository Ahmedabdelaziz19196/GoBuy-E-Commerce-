import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResponsiveSlider.css";
import { useEffect, useState } from "react";

import sliderDefaultSettings from "../Functions/sliderDefaultSettings";
import updateSettingsBasedOnScreen from "../Functions/updateSliderSettings";

function ResponsiveSliderLaptops() {
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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
                            src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
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

export default ResponsiveSliderLaptops;
