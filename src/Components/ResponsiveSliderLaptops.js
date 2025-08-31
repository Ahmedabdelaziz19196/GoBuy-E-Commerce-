import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResponsiveSlider.css";
// أسهم مخصصة
function NextArrow(props) {
    const { className, onClick } = props;
    return (
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
    const { className, onClick } = props;
    return (
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

function ResponsiveSliderLaptops() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
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
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            className="slider-container"
            style={{ padding: "20px", minHeight: "120px" }}
        >
            {/* <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} style={{ padding: "0 10px" }}>
                        <h3
                            style={{
                                background: "#eee",
                                padding: "40px",
                                textAlign: "center",
                                borderRadius: "10px",
                                margin: "0px 10px",
                            }}
                        >
                            {num}
                        </h3>
                    </div>
                ))}
            </Slider> */}
            <Slider {...settings}>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100%",
                            border: "1px solid #b3b3b3",
                            padding: "10px",
                            borderRadius: "20px",
                            cursor: "pointer",
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
                            title={
                                'MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™ 5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black'
                            }
                        >
                            MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core
                            Ultra 9 285HX 4TB SSD 64GB Ram Nvidia GeForce RTX™
                            5090 24GB 18" Inch UHD 120Hz Win. 11 - Core Black
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ResponsiveSliderLaptops;
