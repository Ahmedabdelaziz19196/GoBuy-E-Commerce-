import Carousel from "react-bootstrap/Carousel";
function SilderImages() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <div style={{ width: "100%", cursor: "pointer" }}>
                    <img
                        src="/imgs/silder/xasus_banner_home_en.webp.pagespeed.ic.fliD9pYqmj.jpg"
                        alt="banner"
                        style={{ width: "100%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div style={{ width: "100%", cursor: "pointer" }}>
                    <img
                        src="/imgs/silder/msi_vector_banner_en.jpg"
                        alt="banner"
                        style={{ width: "100%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div style={{ width: "100%", cursor: "pointer" }}>
                    <img
                        src="/imgs/silder/intel_core_ultra_en.jpg"
                        alt="banner"
                        style={{ width: "100%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div style={{ width: "100%", cursor: "pointer" }}>
                    <img
                        src="/imgs/silder/CB_Gaming_Laptops_copyJPG.jpg"
                        alt="banner"
                        style={{ width: "100%" }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div style={{ width: "100%", cursor: "pointer" }}>
                    <img
                        src="/imgs/silder/msi-us-flate-banner.jpg"
                        alt="banner"
                        style={{ width: "100%" }}
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default SilderImages;
