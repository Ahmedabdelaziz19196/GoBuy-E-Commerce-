import "./SearchResult.css";
import { Link } from "react-router-dom";

export default function SearchResult({
    searchResults,
    setShowSerachBarForMobile,
}) {
    return (
        <div className="search-result-container">
            {searchResults.map((ele, index) => (
                <Link
                    to={
                        ele.type === "laptop"
                            ? `/laptops/${ele.productid}`
                            : "/monitors"
                    }
                    style={{ color: "inherit", textDecoration: "none" }}
                    key={ele.productid}
                    onClick={(e) => {
                        e.stopPropagation(); // منع انتشار الحدث
                        setShowSerachBarForMobile(false); // إغلاق الـ SearchBar
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                                padding: "5px",
                                borderRadius: "10px",
                            }}
                            className="search-result"
                        >
                            <img
                                src={ele.productImageOne}
                                alt="product-img"
                                style={{ height: "30px" }}
                            />
                            <p
                                style={{
                                    fontSize: "11px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {ele.description}
                            </p>
                        </div>
                        {index < searchResults.length - 1 && (
                            <div
                                style={{
                                    background: "#b3b3b3",
                                    height: "1px",
                                    width: "100%",
                                }}
                            ></div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
