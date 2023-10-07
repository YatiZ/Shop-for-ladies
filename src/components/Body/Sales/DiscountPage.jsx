import { Outlet, useLocation } from "react-router";
import { salesData } from "./Data/salesData";
// import SummerSales from "./SumerSales";
// import WinterSales from "./WinterSales";


function DiscountPage(){
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    console.log(search)
    
    // console.log('hhhh',query.get("saletype"));

    const filteredSales = salesData.filter((sale)=> sale.name === query.get("saletype"));

    const checkingSales = (query.get("saletype")? filteredSales: salesData);
   
    const sales = checkingSales.map((sale,index)=>(
        <div key={index} className="mt-8">
            <h1 className="font-Serif text-3xl outline-dashed flex justify-center bg-yellow-300">{sale.name}</h1>
            {sale.component}
            <hr className="h-10"/>
        </div>
    ))
    return (
        <div className="p-10">
            <h1 className="font-Serif text-3xl underline">Special Sales</h1>
            {sales}
        
        </div>
    )
}
export default DiscountPage;
