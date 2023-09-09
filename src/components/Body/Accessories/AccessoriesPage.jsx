import { useLocation } from "react-router";
import { data } from "./data";
import { useState } from "react";
import EachItem from "./EachItem";


function AccessoriesPage(){
    
    const {search} = useLocation();
    const query = new URLSearchParams(search);

   

    const filteredAccessories = data.filter((d)=>d.type === query.get("accessories"));

    const accessData = query.get('accessories')? filteredAccessories: data;
    const accessories = accessData.map((d,index)=>(
        <div key={index} className="p-2"><h1 className="font-bold">{d.type} </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 p-3 mx-2 gap-2">
            {d.things.map((thing,i)=>(
                
                <EachItem key={i} thing={thing}/>
                
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