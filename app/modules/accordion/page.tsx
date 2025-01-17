import React from "react";
import type { Metadata } from "next";
import { AccordionDemo } from "@/components/index.js";
import localData from "@/localData";

export const metadata: Metadata = {
  title: "Accordion",
  description: "description for accordion page",
};

const { exampleImageSVG } = localData.images;

const items = [
  {
    trigger: "trigger 1",
    content: "lorem ipsum dolor samet",
  },
  {
    trigger: "trigger 2",
    content: "lorem ipsum dolor samet",
  },
  {
    trigger: "trigger 3",
    content: "lorem ipsum dolor samet",
  },
  {
    trigger: "trigger 4",
    content: "lorem ipsum dolor samet",
  },
  {
    trigger: "trigger 5",
    content: (
      <div>
        <h2 className="text-2xl">Title</h2>
        <p>React Node content</p>
        <img width={100} src={exampleImageSVG} alt="" />
      </div>
    ),
  },
];

const page = () => {
  return (
    <main className="accorion-page">
      <section>
        <div className="container">
          <h2 className="text-4xl">Accordion</h2>
          <br />
          <br />
          <strong>Single:</strong>
          <AccordionDemo className="accordion-demo-custom max-w-[600px]" items={items} />
          <br />
          <br />
          <br />
          <strong>Multiple:</strong>
          <AccordionDemo type="multiple" className="accordion-demo-custom max-w-[600px]" items={items} />
        </div>
      </section>
    </main>
  );
};

export default page;
