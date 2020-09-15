import React from "react";
// import Main from './Main'
import Body from "./Body";
import SideMenu from "./SideMenu";
import Banner from "./Banner";

function index() {
  return (
    <div className="w3-container">
      <Banner />
      <div className="row p-0">
        <div className="col-2 pr-0">
          <SideMenu />
        </div>
        <div className="col-10 pl-0">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default index;
