import React from "react";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Dropdown Menu",
  description: "description for dropdown menu page",
};

const DropdownMenu = () => {
  return (
    <main className="dropdown-menu-page">
      <Content/>
    </main>
  );
};

export default DropdownMenu;
