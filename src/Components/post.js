import React, { useState } from "react";
import axios from "axios";
import "./post.css";

function Post() {
  const [restaurantName, setRestaurantName] = useState('');
  const [name, setName] = useState('');
  const [foodName, setFoodName] = useState('');
  const [review, setReview] = useState('');
  const [ratings, setRatings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      restaurantName: restaurantName,
      name: name,
      foodName: foodName,
      review: review,
      ratings: ratings
    };
    axios.post("http://localhost:8080/Food/post", data)
    .then((response) => {
      console.log(response.data);
    })
  .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <h1 className="a">ADD FOOD REVIEW DETAILS</h1>
    <form className="b" onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="RestaurantName">RestaurantName:</label>
        <input type="text" id="id" name="RestaurantName" value={restaurantName} style={{width:200,height:20}} onChange={event => setRestaurantName(event.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="Name" value={name} style={{width:200,height:20}} onChange={event => setName(event.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="FoodName">FoodName:</label>
        <input type="text" id="FoodName" name="FoodName" value={foodName} style={{width:200,height:20}} onChange={event => setFoodName(event.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="Review">Review:</label>
        <input type="text" id="Review" name="Review" value={review} style={{width:200,height:20}} onChange={event => setReview(event.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="Ratings">Ratings:</label>
        <input type="number" id="Ratings" name="Ratings" value={ratings} style={{width:200,height:20}} onChange={event => setRatings(event.target.value)} />
      </div>
      <br/>
      <button style={{width:70,height:30,borderRadius:10}} type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Post;
