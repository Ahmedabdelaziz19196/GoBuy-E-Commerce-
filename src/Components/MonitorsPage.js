import PageCategoryHeader from "./PageCategoryHeader";
import { useContext, useEffect } from "react";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";

export default function MonitorsPage() {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    useEffect(() => {
        setSideCategoriesShow(false);
    }, [setSideCategoriesShow]);
    return (
        <>
            <PageCategoryHeader />
        </>
    );
}
