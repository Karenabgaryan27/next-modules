"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuDemo } from "@/components/index.js";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Mail, UserPlus, Users } from "lucide-react";

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
];

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "products", href: "/products" },
  { name: "polygon", href: "/polygon" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar p-3">
      <ul className="flex gap-2 items-center">
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
        <DropdownMenuDemo buttonName="Modules" title="" variant="ghost" defaultItems={[]} >
          {componentLinks.map((item, index) => {
            const activeLink = pathname.startsWith(item.href);
            return (
              <DropdownMenuItem key={index} asChild className="cursor-pointer">
                <Link
                  href={item.href}
                  className={`d-flex w-[100%] ${activeLink ? "text-green-700" : ""}`}
                >
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
    </nav>
  );
}
