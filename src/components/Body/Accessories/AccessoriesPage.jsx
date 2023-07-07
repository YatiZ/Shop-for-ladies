import { useLocation } from "react-router";
import { data } from "./data";


function AccessoriesPage(){
    const {search} = useLocation();
    const query = new URLSearchParams(search);

    const filteredAccessories = data.filter((d)=>d.type === query.get("accessories"));

    const accessData = query.get('accessories')?filteredAccessories: data;
    const accessories = accessData.map((d)=>(
        <div key={d.id} className="p-8"><h className="font-bold">{d.type} </h>
        <div className="grid grid-cols-4 p-3">
            {d.things.map((thing)=>(
                <div key={thing.id}>
                    <p className="text-center">{thing.name}</p>
                    <img src={thing.img} alt="thing" className="w-56 h-full"/>
                </div>
            ))}
        </div>
        <p className="text-end">More....</p>
        </div>
    ))
    return (
        <div>This is Accessories Page

            {accessories}
            
        </div>
    )
}

export default AccessoriesPage;