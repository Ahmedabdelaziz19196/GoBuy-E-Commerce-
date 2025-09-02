import { Link } from "react-router-dom";
// import { useState } from "react";
import "./LaptopsPage.css";

export default function CategoriesForLaptops({
    selectedCat,
    setSelectedCat,
    categories,
}) {
    // const [selectedCat, setSelectedCat] = useState(null);

    const handleClick = (index) => {
        setSelectedCat(index);
    };
    // const categories = [
    //     "Gaming Laptops",
    //     "Business Laptops",
    //     "Personal Laptops",
    //     "Graphic & Design Laptops",
    // ];
    return (
        <div
            style={{
                width: "100%",
                padding: "15px",
                border: "2px solid #e7e7e7",
                borderRadius: "20px",
            }}
        >
            <div
                style={{
                    border: "1px solid #e7e7e7",
                    width: "100%",
                    borderRadius: "15px",
                    padding: "10px 0px",
                }}
            >
                <h4
                    style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderBottom: "1px solid #e7e7e7",
                        paddingBottom: "5px",
                        margin: "0px 10px",
                    }}
                >
                    Categories
                </h4>
                <ul style={{ margin: 0 }}>
                    {categories.map((cat, index) => (
                        <Link
                            to={`/laptops/${cat}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            key={index}
                        >
                            <li
                                className={`categoty-list ${
                                    selectedCat === index ? "icon-clicked" : ""
                                }`}
                                onClick={() => handleClick(index)}
                            >
                                {cat}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
