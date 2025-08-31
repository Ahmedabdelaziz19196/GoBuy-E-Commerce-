import { ReactTyped } from "react-typed";

export default function SearchForMobile({ showSerachBarForMobile }) {
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
                    className="sreach-bar w-75 "
                    // className={`sreach-input ${mobileSreach ? "clicked" : ""}`}
                    // placeholder="Search..."
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    // onKeyDown={handleEnterFormSearch}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    <ReactTyped
                        style={{ color: "var(--main-color)" }}
                        strings={["Search Here..."]}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={1000}
                        startDelay={500}
                        loop
                    />
                </div>
            </div>
        </div>
    );
}
