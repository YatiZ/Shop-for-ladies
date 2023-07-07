import { useLocation } from "react-router";
import { issues } from "./EachIssues";
import {Routes, Route, Link} from "react-router-dom";
import Button from "../../../reusable/Button";
import { useState } from "react";
import DetailReview from "../Review/DetailReview";
import DetailPage from "./DetailPage";

function HelpCenter(){
    
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    
   
    const filteredIssues = issues.filter((issue)=>
        issue.name === query.get("issues"));

    const finalIssues = (query.get("issues")? filteredIssues: issues)
    
    const renderedIssues = finalIssues.map((issue)=>(
            <DetailPage issue={issue} key={issue.id}/>
    ));
    return (
        <div>
            <h1>Helo</h1>
            
          {renderedIssues}
          
        </div>
    )
}
export default HelpCenter;