import { Link } from 'react-router-dom';
import restaurants_details from '../../../Services/restaurant-data';
import useScrollLevel from "../../../Hooks/useScrollLevel";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/Components/ui/select"

function RestaurantCards() {

  // to make a shadow for the filter section, when scrolled to a particular distance  
  const scrollY = useScrollLevel()
    
  return (
    <div className="">
      <div
        className="heading
        text-xl font-bold mt-6 lg:mt-10
        px-5 xl:px-[10rem]
        ">Top Restaurants in Bangalore
      </div>
      <div className={`filters sticky top-[6rem] lg:top-[4rem] h-[4rem] w-full bg-white px-0 xl:px-[10rem] mb-43 z-20 flex items-center 
        ${scrollY > 370 && "shadow-md" }`} >
        <ul className="flex items-center gap-3 overflow-x-scroll">
          <li className="cursor-pointer ml-5 lg:ml-0">
            <Select>
              <SelectTrigger className="text-[0.85rem] lg:text-base px-2 lg:px-4 w-[5.5rem] lg:w-auto h-[1.8rem] lg:h-[2rem] flex gap-2 rounded-full">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance" selected>Relevance</SelectItem>
                <SelectItem value="rating" selected>Rating</SelectItem>
                <SelectItem value="lowtohigh">Cost: Low to High</SelectItem>
                <SelectItem value="hightolow">Cost: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </li>
          <li className="text-[0.85rem] lg:text-base px-4 py-[0.2rem] border rounded-full cursor-pointer whitespace-nowrap">
            Fast Delivery
          </li>
          <li className="text-[0.85rem] lg:text-base px-4 py-[0.2rem] border rounded-full cursor-pointer whitespace-nowrap">
            Rating 4.0+
          </li>
          <li className="text-[0.85rem] lg:text-base px-4 py-[0.2rem] border rounded-full cursor-pointer whitespace-nowrap">
            Pure Veg
          </li>
          <li className="text-[0.85rem] lg:text-base px-4 py-[0.2rem] mr-5 border rounded-full cursor-pointer whitespace-nowrap">
            Online Delivery
          </li>
        </ul>
      </div>

      <div className="item-grid 
        px-5 grid grid-cols-1 gap-8
        sm:grid sm:grid-cols-2 sm:gap-8
        lg:grid lg:grid-cols-3 lg:gap-8
        xl:grid xl:grid-cols-4 xl:gap-8 xl:px-[10rem]
      ">
        {restaurants_details && restaurants_details.length > 0
          ? restaurants_details.map((item) => (
            <Link to={`/restaurant/${item.id}`} key={item.id}>
            
              <div className="group item-card cursor-pointer">
                <div className="img-box w-full relative overflow-hidden rounded-2xl
                    h-[11rem]
                    xl:h-[12rem]
                ">
                  <div className="shadow absolute w-full h-full z-10
                    bg-gradient-to-t from-gray-800 from-5% via-transparent to-transparent"></div>
                  <img src={item.image} alt=""
                    className="h-full w-full object-cover z-0
                    group-hover:scale-105 transition duration-500 ease-in-out
                  "/>
                </div>

                <div className="content-box flex flex-col py-1">
                  <div className="name-and-rating flex items-center justify-between">
                    <span className="font-bold text-lg lg:text-lg">{item.name}</span>
                    <span className="px-2 text-white bg-green-500 rounded-sm">{item.rating} <i className="ri-star-fill"></i></span>
                  </div>
                  <span className="text-gray-400 text-sm lg:text-md">{item.food_types.join(', ')}</span>
                  <span className="text-gray-400 text-sm lg:text-md">{item.location}</span>
                </div>
              </div>
            </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default RestaurantCards;
