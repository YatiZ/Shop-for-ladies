import { useContext, useState } from "react";
import { BiHeartCircle, BiLogInCircle } from "react-icons/bi";
import Input from "../../../reusable/Input";
import { Link } from "react-router-dom";
import NavDrops from "./NavDrops";
import { ShoppingBag } from "@mui/icons-material";
import { ShopContext } from "../../../context/useShopContext";
import SearchItem from "./SearchItem";
import { Badge } from "@mui/material";

function NavigateDrops({ navigateData }) {
  const [openDrops, setOpenDrops] = useState(false);

  const { cart } = useContext(ShopContext);

  const handleOpenDrops = (id) => {
    setOpenDrops(id);
  };
  const handleMouseLeave = () => {
    setOpenDrops("");
  };

  const renderedData = navigateData.map((data) => (
    <div key={data.id} onMouseEnter={() => handleOpenDrops(data.id)}>
      <Link
        to={data.path}
        key={data.id}
        className="hover:text-pink-600 md:my-0"
      >
        <p className="my-3 md:my-0">{data.title}</p>
      </Link>

      {openDrops === data.id && (
        <div className="md:ml-0 ml-0 md:mt-0 ">
          <NavDrops data={data} />
        </div>
      )}
    </div>
  ));

  const totalQty = cart.reduce((prev, c) => {
    return prev + c.qty;
  }, 0);

  return (
    <div
      className="block md:flex gap-4 lg:gap-8 items-center lg:text-sm text-xs"
      onMouseLeave={handleMouseLeave}
    >
      {renderedData}
      <div className="md:py-2 py-0 w-fit">
        <SearchItem />
      </div>

      <div className="py-4">
        <Link to="/login">
          <BiLogInCircle className="text-2xl " />
        </Link>
      </div>
      <div>
        <Link to="/favorite-collections">
          <BiHeartCircle className="text-2xl mb-3 lg:my-1" />
        </Link>
      </div>
      <Badge
        badgeContent={totalQty}
        className=" outline-pink-500 outline rounded-full"
        color="primary"
      >
        <Link to="/shopping-bag">
          <div className="px-1 py-1">
            <ShoppingBag className="text-2xl" />
          </div>
        </Link>
      </Badge>
    </div>
  );
}
export default NavigateDrops;
