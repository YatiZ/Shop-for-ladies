// import { clothes } from "./clothData";

// function ClothTypeFashion (){
//     const clothData = clothes.map((cloth) => (
//         <div key={cloth.type}>
//           <h1 className="font-bold">{cloth.type}</h1>
//           <div className="grid grid-cols-3 p-8">
//             {cloth.data.map((d) => (
            
//               <Panel className="text-center m-3 ml-2">
//                 <p>{d.clothName}</p>
//                 <div className="px-10">
//                   <img
//                     src={d.img}
//                     alt={d.clothName}
//                     className="w-56 h-56"
//                     onClick={OpenMoreInfo}
//                   />
//                 </div>
    
//                 {openInfo && (
//                   <Modal
//                     openInfo={openInfo}
//                     actionBar={actionBar}
//                     onClose={handleClose}
//                   >
//                     <div className="flex">
//                       <p>{d.size}</p>
//                       <p>{d.color}</p>
//                     </div>
//                   </Modal>
//                 )}
//               </Panel>
//             ))}
//           </div>
//         </div>
//       ));
// }