import React from "react";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Lazy Load",
  description: "description for lazy load page",
};

const page = () => {
  return (
    <main>
      <Content />
    </main>
  );
};

export default page;
