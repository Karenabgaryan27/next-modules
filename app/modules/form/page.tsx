import React from "react";
import type { Metadata } from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Form",
  description: "description for form page",
};



const page = () => {
  return (
    <main>
      <Content />
    </main>
  );
};

export default page;
