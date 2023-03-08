import React from "react";
import FoodReviewDetails from "./Get";
import Nav from "./NavBar";
import "./1.css";
const Get = () => {
    return(
        <div>
            <div>
                <Nav/>
            </div>
            <div className="a">
                <FoodReviewDetails/>
            </div>
            
        </div>  
    )
};
export default Get;