import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function PrevArrow(props) {
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
