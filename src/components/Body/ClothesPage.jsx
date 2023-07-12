
import EachCloth from "./Clothes/EachCloth";
import { clothes } from "./Clothes/clothData";
import { useLocation } from "react-router-dom";

function ClothesPage() {


  const { search } = useLocation();

  const query = new URLSearchParams(search);
  

  // console.log(query.get("category"));
//   (condition)?(statement):(statement)
const filteredClothes = clothes.filter((cloth) => cloth.type === query.get("category"));
const newCloth = (query.get("category")?filteredClothes: clothes);
  const clothData = newCloth.map((cloth, index) => (
    <div key={index}>
      <h1 className="font-bold mt-10">{cloth.type}</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center mx-10 mt-4 gap-y-5">
        
        <EachCloth cloth={cloth} />
      </div>
    </div>
  ));
  return (
    <div>
      {/* <h1 className="text-center mt-2">Clothes Fashion</h1> */}
      <div>
      {clothData}
      </div>
    </div>
  );
}

export default ClothesPage;
