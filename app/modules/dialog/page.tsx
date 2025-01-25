import React from "react";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Dialog",
  description: "description for dialog page",
};

const Dialog = () => {
  return (
    <main>
        <Content/>
    </main>
  );
};

export default Dialog;
