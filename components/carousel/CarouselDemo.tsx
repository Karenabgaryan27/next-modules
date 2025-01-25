"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ReactElement } from "react";

type ItemProps = {
  cover?: ReactElement;
  name?: string;
};

type CarouselDemoProps = {
  className?: string;
  itemClassName?: string;
  orientation?: "horizontal" | "vertical" | undefined;
  loop?: boolean;
  align?: "start" | "center";
  autoplay?: boolean;
  items?: ItemProps[];
};

export function CarouselDemo({
  className = "",
  itemClassName = "md:basis-1/2 lg:basis-1/3",
  orientation = "horizontal",
  loop = false,
  align = "start",
  autoplay = false,
  items = [{}, {}, {}, {}],
}: CarouselDemoProps) {
  const carouselRef = useRef(null);

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
      console.log("trigger");
    });
  }, [api]);

  return (
    <Carousel
      ref={carouselRef}
      setApi={setApi}
      className={`${className} mb-[100px]`}
      opts={{
        align: align,
        loop: loop,
      }}
      orientation={orientation}
      plugins={autoplay ? [Autoplay({ delay: 2000 })] : []}
    >
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  {!Object.keys(item).length && <span className="text-2xl font-semibold">{index + 1}</span>}
                  {item.cover}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <div className="carousel-angles absolute md:static left-[50%] md:left-[none] translate-x-[-50%] md:translate-x-[none] bottom-[-30px] md:bottom-[none]">
        <CarouselPrevious className="" />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
