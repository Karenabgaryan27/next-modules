import React from "react";
import type { Metadata } from "next";
import { AccordionDemo } from "@/components/index.js";
import localData from "@/localData";

export const metadata: Metadata = {
  title: "Responsive",
  description: "description for responsive page",
};

const { purp, blue, black } = localData.images;


const FlexSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Responsive blocks flex</h2>
        <br />
        <div className="card-group illustration-card-group flex flex-wrap justify-center gap-[20px]">
          <div className="card  illustration-card bg-[#9e8fc7] sm:w-[calc(100%/2-20px/2)] lg:w-[calc(100%/3-(20px*2)/3)] rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={purp} alt="" />
          </div>
          <div className="card  illustration-card bg-[#4f8cdd] sm:w-[calc(100%/2-20px/2)] lg:w-[calc(100%/3-(20px*2)/3)] rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={blue} alt="" />
          </div>
          <div className="card  illustration-card bg-[#3b2c41] sm:w-[calc(100%/2-20px/2)] lg:w-[calc(100%/3-(20px*2)/3)] rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={black} alt="" />
          </div>
    
        </div>
      </div>
    </section>
  );
};

const GridSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Responsive blocks grid</h2>
        <br />
        <div className="card-group illustration-card-group grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px]">
          <div className="card  illustration-card bg-[#9e8fc7]  rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={purp} alt="" />
          </div>
          <div className="card  illustration-card bg-[#4f8cdd]  rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={blue} alt="" />
          </div>
          <div className="card  illustration-card bg-[#3b2c41]  rounded-[15px] p-[20px] shadow-[1px_1px_15px_rgba(0,0,0,0.4)]">
            <h4 className="card-title text-white font-medium text-[20px]">Responsive Block</h4>
            <img className="card-image" src={black} alt="" />
          </div>
     
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <main>
      <FlexSection />
      <br />
      <br />
      <br />
      <GridSection/>
    </main>
  );
};

export default page;
