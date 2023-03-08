import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./table.css";
 
function FoodReviewDetails() {
 
    const [FoodReview, setFoodReview] = useState([]);
    
 
    useEffect(() => {
        axios.get('http://localhost:8080/Food/get')
            .then(response => {
                setFoodReview(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            <h1>FOOD REVIEW DETAILS</h1>
            <table>
                <thead>
                    <tr>
                        <th>RestaurantName</th>
                        <th>Name</th>
                        <th>FoodName</th>
                        <th>Review</th>
                        <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    {FoodReview.map(FoodReview => (
                        <tr key={FoodReview.restaurantName}>
                            <td>{FoodReview.restaurantName}</td>
                            <td>{FoodReview.name}</td>
                            <td>{FoodReview.foodName}</td>
                            <td>{FoodReview.ratings}</td>
                            <td>{FoodReview.review}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default FoodReviewDetails;
