import React from "react";
import type { Metadata } from "next";
import { TooltipDemo, ButtonDemo } from "@/components/index.js";

export const metadata: Metadata = {
  title: "Tooltip",
  description: "description for tooltip page",
};

const page = async () => {
  return (
    <main>
      <section className="min-h-[200vh]">
        <div className="container">
          <h2 className="text-4xl">Tooltip</h2>
          <br />
          <br />
          <TooltipDemo
            trigger={<ButtonDemo text="trigger" variant="outline"></ButtonDemo>}
            content={<div>content here</div>}
          />
          <br />
          <br />

          <TooltipDemo trigger={<ButtonDemo text="trigger" variant="outline"></ButtonDemo>}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat eius provident ut, dolore,
            repellat esse qui atque tenetur eaque nam itaque deleniti dignissimos quo? Quia esse accusamus
            repellendus quam. 
            <br />
            <br />
            <ButtonDemo text="Button" value="outline" />
          </TooltipDemo>
        </div>
      </section>
    </main>
  );
};

export default page;
