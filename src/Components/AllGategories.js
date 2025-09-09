import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./AllGategories.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import { useContext } from "react";

function AllGategories() {
    const { sideCategoriesShow, setSideCategoriesShow } = useContext(
        SideCategoriesContext
    );

    const handleClose = () => setSideCategoriesShow(false);

    return (
        <>
            <Offcanvas show={sideCategoriesShow} onHide={handleClose}>
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
                    <Link
                        to="laptops"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="laptop ">
                            <img src="/imgs/laptop.webp" alt="laptop" />
                            <p>Laptops</p>
                        </div>
                    </Link>
                    <Link
                        to="monitors"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className=" monitor">
                            <img src="/imgs/monitors.webp" alt="monitor" />
                            <p>monitors</p>
                        </div>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AllGategories;
