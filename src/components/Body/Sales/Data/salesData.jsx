import SummerSales from "../SumerSales";
import WinterSales from "../WinterSales";
import summerImg from "../images/summer13.jpg";
import winterImg from "../images/realistic-winter-sale-banner-template.jpg";
const salesData = [
    {id:1, name:'Summer Sales',img:summerImg,component:<SummerSales/>},
    {id:2, name:'Winter Sales',img:winterImg, component:<WinterSales/>}
]
export {salesData};