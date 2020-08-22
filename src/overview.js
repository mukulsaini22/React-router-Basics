import React from "react";
import "./styles.css";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink /* we can use class name now finally this */,
 
  
} from "react-router-dom";
//import { prompt } from "react-router";

class OverviewLink extends React.Component {
  render() {
    return (
      <div> 
       <div className="BudgetHeader">
         <div className="Headerfirst">
           <h1> Welcome Name </h1>
           <h2> Your Budget Monthly Calculator </h2>
             </div>
<div className="BudgetContainer">
  <div className="fixbudgetContainer">
    <span>
  ' Do not save what is left after spending, but spend what is left after saving. '
  – Warren Buffett
  </span>
    <h1> Your Budget </h1>


    <h2> 
    {/* H2 is for Total budget we will take 
           a state and fix it const */}45454 </h2>
    </div>
     <div className="totalAnount">
       <h1> Total Amount spend</h1>
      <img src="" />
      <h2> slfdk</h2>

   
    </div>

    <div className="listitems">
     
    </div>
    <div className="showstatus">
      <h1 className="showstatushead"> </h1>
      </div>

  </div>


         </div>
        </div>
    )}}


    
    export default OverviewLink ;