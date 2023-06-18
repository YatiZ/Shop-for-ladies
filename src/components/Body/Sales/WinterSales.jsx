import Panel from "../../../reusable/Panel";
import winterImg from "../Sales/images/realistic-winter-sale-banner-template.jpg";

function WinterSales(){
    return (
        <Panel>
           <img className="h-80 w-full" src={winterImg} alt="winterImg"/>
        </Panel>
    )
}
export default WinterSales;