import "./App.css";
import Header from "./Components/Header";
import LaptopsSwiper from "./Components/LaptopsSwiper";
import PageCategories from "./Components/PageCategories";
import SilderImages from "./Components/SilderImages";
import MonitorsSwiper from "./Components/MonitorsSwiper";
import ServiceFeatures from "./Components/ServiceFeatures";

function App() {
    return (
        <>
            <Header />
            <SilderImages />
            <PageCategories />
            <LaptopsSwiper />
            <MonitorsSwiper />
            <ServiceFeatures />
        </>
    );
}

export default App;
