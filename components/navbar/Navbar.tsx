"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenuDemo, ModeToggle, ButtonDemo, SheetDemo, AccordionDemo } from "@/components/index.js";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Mail, UserPlus, Users, ChevronDown, Menu } from "lucide-react";
import localData from "@/localData";

const componentLinks = [
  {
    name: "Button",
    href: "/modules/button",
  },
  {
    name: "Dropdown Menu",
    href: "/modules/dropdown-menu",
  },
  {
    name: "Accordion",
    href: "/modules/accordion",
  },
  {
    name: "Drawer",
    href: "/modules/drawer",
  },
  {
    name: "Sheet",
    href: "/modules/sheet",
  },
  {
    name: "Dialog",
    href: "/modules/dialog",
  },
  {
    name: "Carousel",
    href: "/modules/carousel",
  },
  {
    name: "Form",
    href: "/modules/form",
  },
];

const { logo } = localData.images;

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "products", href: "/products" },
  { name: "polygon", href: "/polygon" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar p-3 flex items-center justify-between ">
      <img src={logo} alt="" className="max-w-[50px] h-auto " />
      <ul className=" gap-2 items-center hidden md:flex">
        {navLinks.map((item) => {
          const activeLink =
            (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <li key={item.name} className="">
              <Link
                href={item.href}
                className={`py-2 px-4 hover:bg-slate-100 rounded-md ${activeLink ? "text-green-700" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <DropdownMenuDemo
          defaultItems={[]}
          trigger={
            <Button variant="ghost" className="font-normal text-[16px]">
              Modules
              <ChevronDown />
            </Button>
          }
        >
          {componentLinks.map((item, index) => {
            const activeLink = pathname.startsWith(item.href);
            return (
              <DropdownMenuItem key={index} asChild className="cursor-pointer">
                <Link href={item.href} className={`flex w-[100%] ${activeLink ? "text-green-700" : ""}`}>
                  {item.name}
                </Link>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Submenu Trigger</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail />
                  <span>Subitem 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users />
                  <span>Subitem 2</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>Static link 1</DropdownMenuItem>
            <DropdownMenuItem disabled>Static link 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuDemo>
      </ul>
      <div className="btn-group  gap-2 hidden md:flex">
        <ButtonDemo variant="outline" />
        <ModeToggle />
      </div>
      <SheetDemo
        title="Menu"
        description="Lorem ipsum dolor."
        side="left"
        contentClassName=" overflow-y-auto "
        trigger={
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu />
          </Button>
        }
      >
        {(onClose) => (
          <nav className="navbar">
            <ul className="mt-[20px]">
              {navLinks.map((item) => {
                const activeLink =
                  (item.href === "/" && pathname === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.name} className="list-none">
                    <Link
                      href={item.href}
                      className={`block py-2 px-4 hover:bg-slate-100 rounded-md ${
                        activeLink ? "text-green-700" : ""
                      }`}
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <AccordionDemo
              triggerClassName="text-[16px] font-normal !no-underline py-2 px-4 hover:bg-slate-100 rounded-md"
              items={[
                {
                  trigger: "Modules",
                  content: (
                    <ul>
                      {componentLinks.map((item, index) => {
                        const activeLink = pathname.startsWith(item.href);
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            className={`block py-2 px-4 hover:bg-slate-100 rounded-md ${
                              activeLink ? "text-green-700" : ""
                            }`}
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </ul>
                  ),
                },
              ]}
            />
          </nav>
        )}
      </SheetDemo>
    </nav>
  );
}
