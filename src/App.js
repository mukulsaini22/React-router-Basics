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

import DocumentLink from "./documentLink";
import Budget from "./Budget";
import OverviewLink from "./overview";

const Overview = () =>
(
<div>
    <OverviewLink/>
  </div>
)
const Project = () =>
(
<div>
    <Budget />
  </div>
)

const Document = () =>
(
<div>
    <DocumentLink />
  </div>
)

const Shop = () =>
(
<div>
    Shop
  </div>
)


const Links = () =>(

// Navlinks

<div className="navlinks">
  
 <NavLink to="/Overview">
    <span className = "navlinkss">
    Overview
   </span>
 </NavLink>
 <NavLink to="/Project">
    <span  className = "navlinkss">
    Project
    </span>
 </NavLink>
 <NavLink to="/Document">
    <span className = "navlinkss">
    Document
    </span>
</NavLink>
<NavLink to="/Shop">
    <span  className = "navlinkss">
    Shop
    </span>
</NavLink>
  </div>
)
const App = () =>(
<Router>
  <div className ="Header">
   <section>
     <img src=""/>
      <h1> " Welcome Here ,  This is Dashboard ! " </h1>
<h2> Hi , Name</h2>
     </section>

     <section>
       <Router>
         <Links />
       <Route exact path="/Overview" component={Overview} />
       <Route exact path="/Project" component={Project} />
       <Route exact path="/Document" component={Document} />
       <Route exact path="/Shop" component={Shop} />
        </Router>                        
       </section>
</div>



  </Router>

)
export default App;