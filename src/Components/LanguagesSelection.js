import { useContext } from "react";
import "./LanguagesSelection.css";
import LanguageContext from "../Context/LanguageContext";
export default function LanguagesSelection({ langClick }) {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <>
            <div
                className={`lang-selection ${language} ${
                    langClick ? "lang-clicked" : ""
                }`}
            >
                <div
                    className="d-flex align-items-center justify-content-around gap-1 lang"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        const language = "EN";
                        setLanguage(language);
                        localStorage.setItem("language", language);
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
                    onClick={() => {
                        const language = "AR";
                        setLanguage(language);
                        localStorage.setItem("language", language);
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
