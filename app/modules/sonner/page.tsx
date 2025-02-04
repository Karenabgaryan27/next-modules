import React from "react";
import type { Metadata } from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Sonner",
  description: "description for sonner page",
};

const page = () => {
  return (
    <main>
          <Content />
     
    </main>
  );
};

export default page;
