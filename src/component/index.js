import React from "react";
// import Main from './Main'
import Body from "./Body";
import SideMenu from "./SideMenu";
import Banner from "./Banner";

function index() {
  return (
    <div className="w3-container">
      <Banner />
      <div className="row">
        <div className="col-2">
          <SideMenu />
        </div>
        <div className="col-10">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default index;
