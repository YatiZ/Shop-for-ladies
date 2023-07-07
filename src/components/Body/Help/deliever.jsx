import ColorData from "../Clothes/ColorData";

function DelieverIssues({color}){
    // const colors = [
    //     'bg-blue-500 w-6 h-6 rounded-full',
    //     'bg-pink-500 w-6 h-6 rounded-full',
    //     'bg-yellow-500 w-6 h-6 rounded-full',
    //    'bg-red-500 w-6 h-6 rounded-full',
    //     'bg-green-500 w-6 h-6 rounded-full',
    //     'bg-white w-6 h-6 rounded-full',
    // ]
    
    const style = color.map((color,index)=>(
       <div key={index} className={color}>
        {/* {color} */}
       </div>
       
    ))
    console.log(style)
    return (
        <div>
            Deliever Problem
            <div>{style}</div>
        </div>
    )
}
export default DelieverIssues;