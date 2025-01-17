import React from "react";
import type { Metadata } from "next";
import { DrawerDemo } from "@/components/index.js";

export const metadata: Metadata = {
  title: "Drawer",
  description: "description for drawer page",
};

const page = () => {
  return (
    <main>
      <section className="min-h-[200vh]">
        <div className="container">
          <h2 className="text-4xl">Drawer</h2>
          <br />
          <br />

          <DrawerDemo />
        </div>
      </section>
    </main>
  );
};

export default page;
