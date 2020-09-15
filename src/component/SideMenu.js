import React from "react";
import {useDispatch} from 'react-redux'
import {sideMenu} from '../redux/Action'

function SideMenu() {
   const dispatch = useDispatch()

    const menuWidth = {
        width:"100%",
        height:"100px"        
    }
    const textPadding={
        paddingTop:"30%"
    }
  return (
     <div className="w3-container w3-gray">
         <div style={menuWidth} className="w3-card" onClick={()=>dispatch(sideMenu("sales"))} >
            <h5 className="w3-center" style={textPadding}>Sales</h5>
         </div>
         <div style={menuWidth} className="w3-card" onClick={()=>dispatch(sideMenu("purches"))} >
            <h5 className="w3-center" style={textPadding}>Purches</h5>
         </div>
         <div style={menuWidth} className="w3-card" onClick={()=>dispatch(sideMenu("stock"))} >
            <h5 className="w3-center" style={textPadding}>Stock</h5>
         </div>
         <div style={menuWidth} className="w3-card" onClick={()=>dispatch(sideMenu("profit"))} >
            <h5 className="w3-center" style={textPadding}>Profit</h5>
         </div>
     </div>
    );
}

export default SideMenu;
