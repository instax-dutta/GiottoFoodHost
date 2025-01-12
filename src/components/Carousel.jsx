import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import img2 from "../images/oil-bottle-with-new-label-w.jpg";
import img3 from "../images/shutterstock_674598577.jpg";
const CarouselDemo = () => {
  const imageArray = [img2, img3, img2, img3, img2, img3];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="flex justify-center py-2 mt-16 w-screen">
        <Carousel
          className="w-full max-w-screen"
          plugins={[plugin.current]}
          onMouseEnter={()=>plugin.current.stop()}
          onMouseLeave={()=>plugin.current.play()}
        >
          <CarouselContent>
            {imageArray.map((image,index) => (
              <CarouselItem key={index}>
                <div>
                  <img
                    className="w-screen h-96 rounded-md object-cover"
                    src={image}
                    alt=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselDemo;
