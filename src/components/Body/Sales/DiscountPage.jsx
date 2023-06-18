import { Outlet } from "react-router";
import SummerSales from "./SumerSales";
import WinterSales from "./WinterSales";


function DiscountPage(){
    return (
        <div className="p-10">
            <h1>Sales</h1>
        <Outlet />
        </div>
    )
}
export default DiscountPage;
