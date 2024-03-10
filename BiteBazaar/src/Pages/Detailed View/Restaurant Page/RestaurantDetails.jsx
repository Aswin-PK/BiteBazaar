// import React from 'react'
import { useParams } from 'react-router-dom';
import restaurants_details from '../../../Services/restaurant-data';
import RatingStars from '../../../Components/ui/RatingStars';


import vegetarian_symbol from '../../../assets/img/vegetarian_symbol.png'
import non_vegetarian_symbol from '../../../assets/img/non_vegetarian_symbol.png'

function RestaurantDetails() {

  const {id} = useParams()

  return (
    <div className="p-5 lg:px-[9.5rem]">
      <div className="h-[15rem] lg:h-[20rem]">
        <img src={restaurants_details[id].image} alt="" className='w-full h-full object-fill' />
      </div>
      <div className="restaurant-info mt-2">
        <div className="head">
          <span>{restaurants_details[id].name}</span>
          <div className="rating"></div>
        </div>
        <div className="food-types-and-location">
            <span>{restaurants_details[id].location}, </span>
            <span>3 Km</span>
        </div>
      </div>
      <div className="food-info mt-6">
        <div className="food-card-container grid lg:grid-cols-2 gap-[1rem] lg:gap-[5rem]">
        
        {/* May contain the filter options here.........*/}

        {/* card container */}
          {
            restaurants_details[0].food_details.map((foodItem, index) => (
          
              <div key={index} className="food-card w-full flex gap-5 p-2 pr-4 border rounded-lg shadow-md">
                <div className="image-box h-[6rem] min-w-[6rem] lg:h-[9rem] lg:min-w-[9rem] bg-cyan-800 rounded-md overflow-hidden">
                  <img src={foodItem.dish_image} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="relative detail-box w-full flex flex-col">
                  <span className='text-base lg:text-[1.1rem] flex justify-between items-center'>
                    <strong>{foodItem.dish}</strong>
                    <img 
                      src={foodItem.type === 'Veg' ? vegetarian_symbol : non_vegetarian_symbol}
                      className='h-[1rem] aspect-square float-right'
                    />
                  </span>
                  <span className='text-yellow-500 text-lg lg:text-xl'>{<RatingStars currentRating={foodItem.rating}/> }</span>
                  <span>&#8377; {foodItem.price}</span>
                  <span className='hidden lg:inline text'>{foodItem.description}</span>
                  <div className="absolute bottom-0 right-0 mt-2">
                    <button className="px-6 py-1 rounded-lg border-[0.08rem] text-green-500 border-current shadow-md">ADD</button>
                  </div>
                </div>
              </div>

            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails