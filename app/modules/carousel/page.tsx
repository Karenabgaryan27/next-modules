import React from "react";
import type { Metadata } from "next";
import { CarouselDemo } from "@/components/index.js";
import localData from "@/localData";

export const metadata: Metadata = {
  title: "Carousel",
  description: "description for carousel page",
};

const { galleryImage1, galleryImage2, galleryImage4, galleryImage5, galleryImage6 } = localData.images;

const page = () => {
  return (
    <main>
      <section className="min-h-[200vh]">
        <div className="container">
          <h2 className="text-4xl">Carousel</h2>
          <br />
          <br />

          <CarouselDemo
            className="custom-carousel"
            autoplay={true}
            items={[
              { cover: <img className="h-full w-full object-cover rounded-md" src={galleryImage1} /> },
              { cover: <img className="h-full w-full object-cover rounded-md" src={galleryImage2} /> },
              { cover: <img className="h-full w-full object-cover rounded-md" src={galleryImage4} /> },
              { cover: <img className="h-full w-full object-cover rounded-md" src={galleryImage5} /> },
              { cover: <img className="h-full w-full object-cover rounded-md" src={galleryImage6} /> },
            ]}
          />
          {/* <CarouselDemo className="custom-carousel" itemClassName="md:basis-1/2 lg:basis-1/4"/> */}
        </div>
      </section>
    </main>
  );
};

export default page;
