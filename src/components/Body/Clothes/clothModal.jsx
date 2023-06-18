import { useState } from "react";
import Button from "../../../reusable/Button";
import Modal from "../../../reusable/Modal";
function ClothModal({ d }) {
  const [openInfo, setOpenInfo] = useState(false);

  const OpenMoreInfo = () => {
    setOpenInfo(true);
  };
  const handleClose = () => {
    setOpenInfo(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
  return (
    <>
      <div className="px-10">
        <img
          src={d.img}
          alt={d.clothName}
          className="w-56 h-72 pt-4"
          onClick={OpenMoreInfo}
        />
      </div>
      {openInfo && (
        <Modal openInfo={openInfo} actionBar={actionBar} onClose={handleClose}>
          <div className="flex">
            <p>{d.size}</p>
            <p>{d.color}</p>
          </div>
        </Modal>
      )}
    </>
  );
}
export default ClothModal;
