// import * as React from "react"
import brands from "../../../Services/brand-data";

import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

function TopBrands() {
  return (
    <>
      <div
        className="heading
        text-xl font-bold mt-6 lg:mt-10
        px-5 xl:px-[10rem]
        ">Top Brands
      </div>
      <div className="flex items-center justify-center px-4 lg:px-[10rem]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/4 lg:basis-1/6">
                <div className="p-1 rounded-full">
                  <Card className="">
                    <CardContent className="h-[5rem] lg:h-[10rem] w-[5rem] lg:w-[10rem] flex items-center justify-center border aspect-square rounded-full overflow-hidden cursor-pointer">
                      <div className="brand-image w-[70%] h-[70%] ">
                        <img src={brand.brand_image} alt="" className="w-full h-full object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default TopBrands;
