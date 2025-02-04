import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { TabsDemo, ButtonDemo } from "@/components/index.js";

export const metadata: Metadata = {
  title: "Tabs",
  description: "description for tabs page",
};

type ItemsProps = {
  label: string;
  value: string;
  content?: ReactNode;
};

const items: ItemsProps[] = [
  {
    label: "Examples",
    value: "examples",
    content: "Lorem ipsum dolor samet.",
  },
  {
    label: "Mail",
    value: "mail",
    content: "Lorem ipsum dolor samet."
  },
  {
    label: "Dashboard",
    value: "dashboard",
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
        <br />
        <br />
        <ButtonDemo text="Button" variant="outline" />
      </div>
    ),
  },
  {
    label: "Tasks",
    value: "tasks",
    content: "Lorem ipsum dolor samet.",
  },
  {
    label: "Playground",
    value: "playground",
    content: "Lorem ipsum dolor samet.",
  },
  {
    label: "Forms",
    value: "forms",
    content: "Lorem ipsum dolor samet.",
  },
];

const page = async () => {
  return (
    <main>
      <section className="min-h-[200vh]">
        <div className="container">
          <h2 className="text-4xl">Tabs</h2>
          <br />
          <br />
          <TabsDemo items={items}  />
    
        </div>
      </section>
    </main>
  );
};

export default page;
