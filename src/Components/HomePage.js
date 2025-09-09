import LaptopsSwiper from "./LaptopsSwiper";
import PageCategories from "./PageCategories";
import SilderImages from "./SilderImages";
import MonitorsSwiper from "./MonitorsSwiper";
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    return (
        <>
            <SilderImages />
            <PageCategories />
            <LaptopsSwiper />
            <MonitorsSwiper />
        </>
    );
}
