// import DelieverIssues from "./deliever";
import { Outlet } from "react-router";
import DelieverIssues from "./deliever";
import ProductIssues from "./productIssues";
import { Link } from "react-router-dom";

function HelpCenter(){
    return (
        <div>
            <h1>Helo</h1>
            
            {/* <Link to="/help-center/deliever-issues">DelieverIssues </Link>
            <Link to="/help-center/product-issues">ProductIssues</Link> */}
        
          <Outlet />
        </div>
    )
}
export default HelpCenter;