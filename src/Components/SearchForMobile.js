import { ReactTyped } from "react-typed";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

export default function SearchForMobile({ showSerachBarForMobile, products }) {
    const [querySearch, setQuerySearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const debouncedSearch = debounce((query) => {
        if (query !== "") {
            const words = query.toLowerCase().split(" ");
            const results = products.filter((product) =>
                words.every((word) =>
                    JSON.stringify(product).toLowerCase().includes(word)
                )
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, 500);

    useEffect(() => {
        debouncedSearch(querySearch);
        return () => debouncedSearch.cancel();
    }, [querySearch, debouncedSearch]);

    // Close results dropList
    function handleCloseResultsDropList() {
        setShowSearchResults(false);
    }
    useEffect(() => {
        if (showSearchResults) {
            window.addEventListener("click", handleCloseResultsDropList);
        }
        return () =>
            window.removeEventListener("click", handleCloseResultsDropList);
    }, [showSearchResults]);

    return (
        <div
            style={{
                background: "white",
                height: "calc(100vh - 98px)",
                width: "100%",
                position: "absolute",
                top: "98px",
                left: 0,
                transition: "transform 0.5s ease",
                transform: showSerachBarForMobile
                    ? "translateY(0)"
                    : "translateY(-200%)",
                zIndex: "-1",
            }}
            className="d-block d-md-none"
        >
            <div
                style={{
                    position: "relative",
                    top: "20px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <input
                    type="text"
                    className="sreach-bar w-75"
                    value={querySearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowSearchResults(true);
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    {!querySearch && (
                        <ReactTyped
                            style={{ color: "var(--main-color)" }}
                            strings={["Search Here..."]}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={1000}
                            startDelay={500}
                            loop
                        />
                    )}
                </div>
            </div>
            {searchResults.length > 0 && showSearchResults ? (
                <div
                    style={{
                        position: "absolute",
                        top: "70px",
                        left: "0px",
                        height: "fit-content",
                        width: "100%",
                        background: "white",
                        borderRadius: "10px",
                        boxShadow:
                            "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.05), 0 0 24px 0 rgba(0, 0, 0, 0.07)",
                        padding: "5px",
                    }}
                >
                    <SearchResult searchResults={searchResults} />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
