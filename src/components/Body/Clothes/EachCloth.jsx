import Panel from "../../../reusable/Panel";

import ClothModal from "./clothModal";

function EachCloth({ cloth }) {
  const renderedOpenModal = cloth.data.map((d) => (
    <Panel className="text-center m-3 ml-2">
      <p>{d.clothName}</p>

      <ClothModal d={d} />
    </Panel>
  ));
  return <>{renderedOpenModal}</>;
}
export default EachCloth;
