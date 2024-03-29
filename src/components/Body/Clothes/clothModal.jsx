import { useState } from "react";
import Button from "../../../reusable/Button";
import Modal from "../../../reusable/Modal";
import { AddShoppingCart } from "@mui/icons-material";
function ClothModal({ d,handleClose,OpenMoreInfo,openInfo }) {
  
  // const actionBar = (
  //   <div>
  //     <Button onClick={handleClose}>Close</Button>
  //   </div>
  // );
  return ( 
    <div className="cursor-pointer hover:font-bold">
      <p onClick={OpenMoreInfo}>{d.name}</p>
      {openInfo && (
        <Modal openInfo={openInfo} onClose={handleClose}>
          <div className="flex">
            <p>{d.size}</p>
            <p>{d.color}</p>
            <p>{d.description}</p>
            <AddShoppingCart/>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default ClothModal;
