import navContext from "../context/navigation";

import { useContext } from "react";

function useNavigation(){
    return useContext(navContext)
}

export default useNavigation;