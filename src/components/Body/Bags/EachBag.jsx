
import Panel from "../../../reusable/Panel";
import BagSwip from "./BagSwip";

function EachBag({data}){
    
    const renderedData = data.data.map((bag)=>(
        <Panel className='text-center' key={bag.id}>
        <p>{bag.name}</p>
        <BagSwip bag={bag}/>
        </Panel>
     ))
    return (
        <>{renderedData}</>
    )
}
export default EachBag;