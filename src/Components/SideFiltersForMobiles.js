import Offcanvas from "react-bootstrap/Offcanvas";
import SideFilterUIComp from "./SideFilterUIComp";

export default function SideFiltersForMobiles({
    sideFiltersShown,
    setSideFiltersShown,
}) {
    const handleClose = () => setSideFiltersShown(false);
    return (
        <>
            <Offcanvas
                show={sideFiltersShown}
                onHide={handleClose}
                style={{ width: "75%" }}
            >
                <Offcanvas.Header
                    style={{ backgroundColor: "#f7f7f8" }}
                    className="d-flex align-items-center justify-content-between p-0 ps-3 pe-3"
                >
                    <Offcanvas.Title>All Categories</Offcanvas.Title>
                    <span
                        style={{ fontSize: "40px", cursor: "pointer" }}
                        onClick={handleClose}
                        className="closeButton"
                    >
                        ×
                    </span>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SideFilterUIComp />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
