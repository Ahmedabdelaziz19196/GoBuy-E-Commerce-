import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function ThePagination({
    perPageValue,
    currentPage,
    setCurrentPage,
    FilteredLapstopsProductsList,
}) {
    function setThePage(e) {
        if (
            e.target.closest("[aria-label]").getAttribute("aria-label") ===
            "Go to next page"
        ) {
            return setCurrentPage(+currentPage + 1);
        }
        if (
            e.target.closest("[aria-label]").getAttribute("aria-label") ===
            "Go to previous page"
        ) {
            return setCurrentPage(+currentPage - 1);
        }
        return setCurrentPage(+e.target.textContent);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            }}
        >
            <Pagination
                page={currentPage}
                onChange={setThePage}
                count={Math.ceil(
                    FilteredLapstopsProductsList.length / perPageValue
                )}
                variant="outlined"
                shape="rounded"
                sx={{
                    "& .MuiButtonBase-root": {
                        border: "none",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "var(--main-color)",
                        color: "white",
                        borderColor: "#e7e7e7",
                    },
                }}
            />
        </div>
    );
}
