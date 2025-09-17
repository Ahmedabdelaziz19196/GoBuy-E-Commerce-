import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function SilderImages() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <Link to="/laptops?filters=1-25-0---------12-300-0">
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        <img
                            src="/imgs/silder/xasus_banner_home_en.webp.pagespeed.ic.fliD9pYqmj.jpg"
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Link to="/laptops?filters=1-25-0-3--------12-300-0">
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        <img
                            src="/imgs/silder/msi_vector_banner_en.jpg"
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Link to="/laptops?filters=1-25---012345678-------12-300-0">
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        <img
                            src="/imgs/silder/intel_core_ultra_en.jpg"
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Link to="/laptops?filters=1-25-0---------12-300-0">
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        <img
                            src="/imgs/silder/CB_Gaming_Laptops_copyJPG.jpg"
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Link to="/monitors">
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        <img
                            src="/imgs/silder/msi-us-flate-banner.jpg"
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default SilderImages;
