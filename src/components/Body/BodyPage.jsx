import { useContext } from "react";
import FooterPage from "../Footer/FooterPage";
import Content from "./Content";
import MainImg from "./MainImg";
import SliderPage from "./SliderPage";
import { UserContext } from "../../context/useInfoUser";
// import User from "./User";

function BodyPage() {
  const userInfo = useContext(UserContext);
  return (
    <div className="mb-12">
      <div className="mt-8">
        {userInfo ? <p>{userInfo.username}</p> : <p className="5xl">Noo</p>}
      </div>
      <Content />
      {/* <MainImg/> */}
      {/* <User/> */}
      <SliderPage />
    </div>
  );
}
export default BodyPage;
