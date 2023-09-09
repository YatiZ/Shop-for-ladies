import { useContext, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import Input from "../../../reusable/Input";
import { Link } from "react-router-dom";
import NavDrops from "./NavDrops";
import { ShoppingBag } from "@mui/icons-material";
import { ShopContext } from "../../../context/useShopContext";

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
        <div className="md:ml-0 ml-36 mt-0">
          <NavDrops data={data} />
        </div>
      )}
    </div>
  ));

  const totalQty = cart.reduce((prev, c) => {
    return prev + c.qty;
  }, 0);
  
  return (
    <div className={`md:flex gap-8`}>
      {/* <div className="absolute right-8 top-5 text-xl cursor-pointer md:hidden" onClick={handleOpenMenu}>
        {openMenu? <IoMdClose/> :<FcMenu/> }
      </div> */}
      <div
        className="block md:flex gap-8 items-center"
        onMouseLeave={handleMouseLeave}
      >
        {renderedData}
      </div>
      <div className="md:py-2 py-0 w-fit">
        <Input type="text" placeholder="search items ..." />
      </div>
      <div className="py-4">
        <Link to="/login">
          <BiLogInCircle className="text-2xl " />
        </Link>
      </div>
      <div className="mt-2 mr-10">
        <Link to="/shopping-bag">
          <div className="outline-pink-500 outline rounded-full px-2 py-2">
            <ShoppingBag className="text-2xl" />
            <div className="bg-red-500 px-2 py-1 mr-6 rounded-full absolute top-1 right-10">
              <p className="text-xs">{totalQty}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default NavigateDrops;
