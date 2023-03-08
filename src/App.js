import FoodReviewDelete from './Components/2';
import FoodReviewDetails from './Components/1';
import Post from './Components/4';
import UpdateFoodReview from './Components/3';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Get" element={<FoodReviewDetails/>}/> 
        <Route path="/post" element={<Post/>}/>
        <Route path="/update" element={<UpdateFoodReview/>}/>
        <Route path="/Delete" element={<FoodReviewDelete/>}/>
      </Routes>
    </div>
  );
}
export default App;

