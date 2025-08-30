import Offcanvas from "react-bootstrap/Offcanvas";
import "./AllGategories.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AllGategories({ showCategories, setShowCategories }) {
    const handleClose = () => setShowCategories(false);

    return (
        <>
            <Offcanvas show={showCategories} onHide={handleClose}>
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
                    <div className="laptop ">
                        <img src="/imgs/laptop.webp" alt="laptop" />
                        <p>Laptops</p>
                    </div>
                    <div className=" monitor">
                        <img src="/imgs/monitors.webp" alt="monitor" />
                        <p>monitors</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AllGategories;
