// import React from 'react'
import { useState, useEffect } from "react";
import details from "./data.js";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/Components/ui/select"

function RestaurantCards() {

  // to make a shadow for the filter section, when scrolled to a particular distance  
    const [scrollY, setScrollY] = useState(0)

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    },[])
    
  return (
    <div className="">
      <div
        className="heading
        text-xl font-bold mt-10
        px-5 xl:px-[10rem]
        ">Top Restaurants in Bangalore
      </div>
      <div
        className={`filters sticky top-0 h-[4rem] w-full bg-white px-5 xl:px-[10rem] mb-4 z-20 flex items-center ${
          scrollY > 100 && "shadow-md"
        }`}
      >
        <ul className="flex items-center gap-3">
          <li className="cursor-pointer">
            <Select>
              <SelectTrigger className="px-4 h-[2rem] rounded-full flex gap-2">
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
          <li className="px-4 py-[0.2rem] border rounded-full cursor-pointer">
            Fast Delivery
          </li>
          <li className="px-4 py-[0.2rem] border rounded-full cursor-pointer">
            Rating 4.0+
          </li>
          <li className="px-4 py-[0.2rem] border rounded-full cursor-pointer">
            Pure Veg
          </li>
          <li className="px-4 py-[0.2rem] border rounded-full cursor-pointer">
            Online Delivery
          </li>
        </ul>
      </div>

      <div className="item-grid 
        px-5
        xl:px-[10rem]
        grid grid-cols-1 gap-3
        xl:grid xl:grid-cols-4 xl:gap-8
      ">
        {details && details.length > 0
          ? details.map((item) => (
              <div className="group item-card cursor-pointer" key={item.id}>
                <div className="img-box w-full relative overflow-hidden rounded-2xl
                    h-[8rem]
                    xl:h-[12rem]
                ">
                  <div className="shadow absolute w-full h-full z-10
                    bg-gradient-to-t from-gray-800 from-5% via-transparent to-transparent"></div>
                  <img src={item.image} alt=""
                    className="h-full w-full object-cover z-0
                    group-hover:scale-105 transition delay-100 ease-in-out
                  "/>
                </div>

                <div className="content-box">
                  <div className="name-and-rating flex items-center justify-between">
                    <h3>{item.name}</h3>
                    <span>{item.rating} <i></i></span>
                  </div>
                  <span>Price: {item.food_types}</span>
                  <span>Rating: {item.location}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default RestaurantCards;
