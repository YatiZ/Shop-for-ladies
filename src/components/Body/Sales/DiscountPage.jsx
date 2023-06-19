import { Outlet, useLocation } from "react-router";
import { salesData } from "./Data/salesData";
// import SummerSales from "./SumerSales";
// import WinterSales from "./WinterSales";


function DiscountPage(){
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    console.log(search)
    
    console.log('hhhh',query.get("saletype"));

    const filteredSales = salesData.filter((sale)=> sale.name === query.get("saletype"));

    const checkingSales = (query.get("saletype")? filteredSales: salesData);
    console.log(checkingSales)
    const sales = checkingSales.map((sale,index)=>(
        <div key={index}>
            <h1>{sale.name}</h1>
            <img src={sale.img} alt="sales"/>
        </div>
    ))
    return (
        <div className="p-10">
            <h1>Sales</h1>
            {sales}
        </div>
    )
}
export default DiscountPage;
