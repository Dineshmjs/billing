import React from "react";

function SideMenu() {
    const menuWidth = {
        width:"100%",
        height:"100px"
    }
    const textPadding={
        marginTop:"45%"
    }
  return (
     <div className="w3-container w3-gray">
         <div style={menuWidth} className="w3-container">
            <h5 className="w3-center" style={textPadding}>Sales</h5>
         </div>
         <div style={menuWidth} className="w3-container">
            <h5 className="w3-center" style={textPadding}>Purches</h5>
         </div>
         <div style={menuWidth} className="w3-container">
            <h5 className="w3-center" style={textPadding}>Stock</h5>
         </div>
         <div style={menuWidth} className="w3-container">
            <h5 className="w3-center" style={textPadding}>Profit</h5>
         </div>
     </div>
    );
}

export default SideMenu;
