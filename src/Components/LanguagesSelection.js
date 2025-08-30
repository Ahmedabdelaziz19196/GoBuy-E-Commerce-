import "./LanguagesSelection.css";
export default function LanguagesSelection({ langClick }) {
    return (
        <>
            <div
                className={`lang-selection ${langClick ? "lang-clicked" : ""}`}
            >
                <div
                    className="d-flex align-items-center justify-content-around gap-1 lang"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        console.log(e.target.textContent);
                    }}
                >
                    <img
                        src="/imgs/usa-flag.webp"
                        alt="usa-flag"
                        style={{ width: "20px" }}
                    />
                    <p style={{ fontWeight: "bold" }}>EN</p>
                </div>
                <div
                    className="d-flex align-items-center justify-content-around gap-1 lang"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        console.log(e.target.textContent);
                    }}
                >
                    <img
                        src="/imgs/egypt-flag.png"
                        alt="EG-flag"
                        style={{ width: "20px" }}
                    />
                    <p style={{ fontWeight: "bold" }}>AR</p>
                </div>
            </div>
        </>
    );
}
