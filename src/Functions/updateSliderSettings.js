export const LgSildeCount = 5;
export const MdSildeCount = 3;
export const SmSildeCount = 1;

export default function updateSettingsBasedOnScreen(setSliderSettings) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        setSliderSettings((prevSettings) => ({
            ...prevSettings,
            slidesToShow: SmSildeCount,
            slidesToScroll: 1,
        }));
    } else if (screenWidth < 1024) {
        setSliderSettings((prevSettings) => ({
            ...prevSettings,
            slidesToShow: MdSildeCount,
            slidesToScroll: 3,
        }));
    } else {
        setSliderSettings((prevSettings) => ({
            ...prevSettings,
            slidesToShow: LgSildeCount,
            slidesToScroll: 3,
        }));
    }
}
