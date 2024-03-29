import Panel from "../../../reusable/Panel";
import { FaHeart } from "react-icons/fa";
import ClothModal from "./clothModal";
import ColorData from "./ColorData";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "../Shopping/Cart";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/useShopContext";
import { SearchContext } from "../../../context/useGlobalSearch";
import { FavoriteContext } from "../../../context/useFavorite";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../Clothes/images/white-blazer.jpg";

function EachCloth({ cloth }) {
  const { globalSearch } = useContext(SearchContext);
  const { cart, handleClick } = useContext(ShopContext);
  const { favorites, addToFav, removeFav } = useContext(FavoriteContext);
  const [openInfo, setOpenInfo] = useState(false);

  //for picked color fun
  const [pickedColor, setPickedColor] = useState("bg-blue-500");
  const handleSelectedColor = (color) => {
    setPickedColor(color);
  };
  console.log(pickedColor);

  // const colorImgMap = {
  //   "bg-blue-500":"img1"
  // };

  // const imageUrl = colorImgMap[pickedColor]

  const OpenMoreInfo = () => {
    setOpenInfo(true);
  };
  const handleClose = () => {
    setOpenInfo(false);
  };

  const isFavorite = (d) => favorites.includes(d);

  // const isFavorite = (itemId)=> favorites.some((favItem)=> favItem.id === itemId)

  const toggleFavorite = (itemId) => {
    if (isFavorite(itemId)) {
      // console.log(`Removing item ${itemId}`)
      removeFav(itemId);
    } else {
      addToFav(itemId);
    }
  };

  const searchItem = cloth.data.filter((item) =>
    item.name.toLowerCase().includes(globalSearch.toLowerCase())
  );

  const renderedOpenModal = searchItem.map((d) => {
    const productInCart = cart.find((item) => item.id === d.id);

    const quantityInCart = productInCart ? productInCart.qty : 0;

    return (
      <Panel key={d.id} className="text-center w-fit h-full p-5 mx-3 ">
        <div className="overflow-hidden relative">
          <div className="w-[250px]">
            <img
              src={d.img}
              alt={d.name}
              className={`w-full h-full object-contain`}
              onClick={OpenMoreInfo}
            />
            <div
              className={`${pickedColor} w-14 h-14 m-10`}
              // style={{
              //   mixBlendMode: "multiply",

              // }}
            >
              hello
            </div>
          </div>
          <div className="absolute inset-0 translate-y-[85%] bg-pink-400 py-3 text-white">
            <AddShoppingCart
              onClick={() => handleClick(d)}
              className="hover:cursor-pointer"
            />
            {/* <Cart products={d}/> */}

            {quantityInCart > 0 ? <span>{quantityInCart}</span> : 0}
          </div>
        </div>
        <div className="py-3">
          <div>
            <ClothModal
              d={d}
              handleClose={handleClose}
              OpenMoreInfo={OpenMoreInfo}
              openInfo={openInfo}
            />
            <div className="flex justify-between">
              <p className="text-blue-500 font-black">${d.price}</p>
              <button onClick={() => toggleFavorite(d.id)} className="text-xl">
                {isFavorite(d.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </div>
            <div className="flex justify-start">
              {/* <ColorData colors={d.color} sizes={d.size} /> */}
              <div className="flex justify-start gap-x-10">
                <div className="flex gap-x-1">
                  {Array.isArray(d.color) &&
                    d.color.map((selectedColor, index) => (
                      <button
                        key={index}
                        className={`${selectedColor} w-6 h-6 rounded-full`}
                        onClick={() => handleSelectedColor(selectedColor)}
                      ></button>
                    ))}
                </div>
                <div className="flex justify-center">
                  {Array.isArray(d.size) &&
                    d.size.map((s, index) => (
                      <div
                        key={index}
                        className="border bg-slate-300 rounded-full px-2 mx-1"
                      >
                        {s}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    );
  });
  return (
    <>
      {!!searchItem.length && <h1 className="font-bold mt-10">{cloth.type}</h1>}
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center mx-10 mt-4 gap-y-5">
        {renderedOpenModal}
      </div>
    </>
  );
}
export default EachCloth;
