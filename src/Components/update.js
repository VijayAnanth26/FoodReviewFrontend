import React, { useState } from "react";
import axios from "axios";
import "./update.css";

function UpdateFoodReview() {
  const [FoodReview, setFoodReview] = useState({
    restaurantName: "",
    foodName: "",
    name: "",
    review:"",
    ratings:""
  });

  const handleChange = (event) => {
    setFoodReview({ ...FoodReview, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/Food/update",FoodReview).then((res) => {
      console.log(res.data);
      setFoodReview({ restaurantName: "", foodName: "", name: "",review:"",ratings:"" });
    });
  };

  return (
    <div>
      <h1 className="a">UPDATE FOOD REVIEW DETAILS</h1>
      <form className="b" onSubmit={handleSubmit}>
        <label>
          RestaurantName:
          <input type="text" name="restaurantName" style={{width:200,height:20}} value={FoodReview.restaurantName} onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Name:
          <input type="text" name="name" style={{width:200,height:20}} value={FoodReview.name} onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Food Name:
          <input type="text" name="foodName" style={{width:200,height:20}} value={FoodReview.foodName} onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Review:
          <input type="text" name="review" style={{width:200,height:20}} value={FoodReview.review} onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Ratings:
          <input type="number" name="ratings" style={{width:200,height:20}} value={FoodReview.ratings} onChange={handleChange} />
        </label>
        <br/><br/>
        <button style={{width:70,height:30,borderRadius:10}} type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateFoodReview;
