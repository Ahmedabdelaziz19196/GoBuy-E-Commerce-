import LaptopsSwiper from "./LaptopsSwiper";
import PageCategories from "./PageCategories";
import SilderImages from "./SilderImages";
import MonitorsSwiper from "./MonitorsSwiper";

export default function HomePage() {
    return (
        <>
            <SilderImages />
            <PageCategories />
            <LaptopsSwiper />
            <MonitorsSwiper />
        </>
    );
}
