import React from "react";


function Banner() {
    const style = {
        width: "100%",
        height: "100px"
    }
    return(
        <div className="w3-container w3-teal" style={style}>
            <h2 className="w3-center" style={{paddingTop:"20px"}}>Billing Software</h2>
        </div>
    );
}

export default Banner;
