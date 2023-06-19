import Button from "../../reusable/Button";
import Modal from "../../reusable/Modal";
import Panel from "../../reusable/Panel";
import EachCloth from "./Clothes/EachCloth";
import { clothes } from "./Clothes/clothData";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

function ClothesPage() {
  //   let query = useQuery();

  const { search } = useLocation();

  const query = new URLSearchParams(search);
  

  console.log(query.get("category"));
//   (condition)?(statement):(statement)
const filteredClothes = clothes.filter((cloth) => cloth.type === query.get("category"));
const newCloth = (query.get("category")?filteredClothes: clothes);
console.log(newCloth)
  const clothData = newCloth.map((cloth, index) => (
    <div key={index}>
      <h1 className="font-bold">{cloth.type}</h1>
      <div className="grid grid-cols-3 p-8">
        {/* {cloth.data.map((d) => (
        
          <Panel className="text-center m-3 ml-2">
            <p>{d.clothName}</p>
            <div className="px-10">
              <img
                src={d.img}
                alt={d.clothName}
                className="w-56 h-56"
                onClick={OpenMoreInfo}
              />
            </div>

            {openInfo && (
              <Modal
                openInfo={openInfo}
                actionBar={actionBar}
                onClose={handleClose}
              >
                <div className="flex">
                  <p>{d.size}</p>
                  <p>{d.color}</p>
                </div>
              </Modal>
            )}
          </Panel>
        ))} */}
        <EachCloth cloth={cloth} />
      </div>
    </div>
  ));
  return (
    <div>
      <h1 className="text-center mt-2">Clothes Fashion</h1>
      {clothData}
    </div>
  );
}

export default ClothesPage;
