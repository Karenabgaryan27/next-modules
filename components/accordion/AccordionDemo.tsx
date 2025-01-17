import React, { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type ItemsProps = {
  trigger: string;
  content: string | ReactNode;
};

type AccordionDemoProps = {
  className?: string;
  items: ItemsProps[];
  type?: "single" | "multiple";
};

export function AccordionDemo({ className = "", items = [], type = "single" }: AccordionDemoProps) {
  /* for multiple type remove collapsible attribute*/
  return (
    <Accordion
      type={type}
      {...(type === "single" ? { collapsible: true } : {})}
      className={`accordion-demo ${className}`}
    >
      {items.map((item, index) => {
        return (
          <AccordionItem value={`item-${uuidv4()}`} key={index}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
