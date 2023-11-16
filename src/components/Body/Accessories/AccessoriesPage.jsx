import { useLocation } from "react-router";
import { data } from "./data";
import { useState } from "react";
import EachItem from "./EachItem";
import { SearchContext } from "../../../context/useGlobalSearch";
import { useContext } from "react";

function AccessoriesPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const filteredAccessories = data.filter(
    (d) => d.type === query.get("accessories")
  );

  const accessData = query.get("accessories") ? filteredAccessories : data;

  const accessories = accessData.map((d, index) => (
    <div key={index} className="p-2">
      <EachItem thing={d} />
    </div>
  ));
  return <div className="mt-20">{accessories}</div>;
}

export default AccessoriesPage;
