import NextArrow from "../Components/NextArrow";
import PrevArrow from "../Components/PrevArrow";

const sliderDefaultSettings = {
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
};

export default sliderDefaultSettings;
