import React from "react";
import "./styles.css";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink /* we can use class name now finally this */
} from "react-router-dom";

/*

this component is for Document click

*/

class DocumentLink extends React.Component {
  render() {
    return (
      <div>
        <div className=" Documentss">
          <div className="documentschild">
            <img src="https://www.gstatic.com/webp/gallery/1.jpg" />
            <h1>Proposals</h1>

            <h4>
              {" "}
              This is the brief description of the documents please download
              this.
            </h4>
            <p>27.Janauray.2018</p>
          </div>
          <div className="documentschild">
            <img src="https://www.gstatic.com/webp/gallery/5.webp" />
            <h1>Terms</h1>

            <h4>
              {" "}
              This is the brief description of the documents please download
              this.
            </h4>
            <p>27.Janauray.2018</p>
          </div>
          <div className="documentschild">
            <img src="https://www.gstatic.com/webp/gallery3/2_webp_ll.png" />
            <h1>Budgets</h1>
            <h4>
              This is the brief description of the documents please download
              this.{" "}
            </h4>
            <p>27.Janauray.2018</p>
          </div>
          <div className="documentschild">
            <img src="https://www.gstatic.com/webp/gallery3/3_webp_ll.png" />
            <h1>Contract</h1>

            <h4>
              {" "}
              This is the brief description of the documents please download
              this.
            </h4>
            <p>27.Janauray.2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentLink;
