import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const LgSildeCount = 5;
const MdSildeCount = 3;

export default function NextArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;
    const screenWidth = window.innerWidth;
    let lastSlide = 0;
    if (screenWidth < 600) {
        lastSlide = currentSlide;
    } else if (screenWidth < 1024) {
        lastSlide = currentSlide + MdSildeCount;
    } else {
        lastSlide = currentSlide + LgSildeCount;
    }
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
