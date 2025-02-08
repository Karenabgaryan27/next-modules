"use client";

import React from "react";
import localData from "@/localData";
import { ModeToggle, ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";

const { logo } = localData.images;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Products", href: "/products" },
  { title: "Polygon", href: "/polygon" },
  { title: "Dashboard", href: "/dashboard" },
];

export const dropdownLinksModules: { title: string; href: string; description: string }[] = [
  {
    title: "Button",
    href: "/modules/button",
    description: "",
  },
  {
    title: "Dropdown Menu",
    href: "/modules/dropdown-menu",
    description: "",
  },
  {
    title: "Accordion",
    href: "/modules/accordion",
    description: "",
  },
  {
    title: "Drawer",
    href: "/modules/drawer",
    description: "",
  },
  {
    title: "Sheet",
    href: "/modules/sheet",
    description: "",
  },
  {
    title: "Dialog",
    href: "/modules/dialog",
    description: "",
  },
  {
    title: "Carousel",
    href: "/modules/carousel",
    description: "",
  },
  {
    title: "Form",
    href: "/modules/form",
    description: "",
  },
  {
    title: "Table",
    href: "/modules/table",
    description: "",
  },
  {
    title: "Sonner",
    href: "/modules/sonner",
    description: "",
  },
  {
    title: "Tabs",
    href: "/modules/tabs",
    description: "",
  },
  {
    title: "Tooltip",
    href: "/modules/tooltip",
    description: "",
  },
];

export const dropdownLInksHelpers: { title: string; href: string; description: string }[] = [
  {
    title: "Responsive",
    href: "/helpers/responsive",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Lazy Load",
    href: "/helpers/lazy-load",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Pending",
    href: "/helpers/pending",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Pending",
    href: "/helpers/pending",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Pending",
    href: "/helpers/pending",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container  py-3 flex items-center justify-between ">
        <img src={logo} alt="" className="max-w-[50px] h-auto " />

        <NavigationMenuDemo />

        <SidebarNavigationMenuDemo />

        <div className="btn-group  gap-2 hidden lg:flex">
          <ButtonDemo variant="outline" text="Button" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
