"use client";

import React,{useState} from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type DrawerDemoProps = {
  triggerClassName?: string;
  contentClassName?: string;
};

export function DrawerDemo({ triggerClassName = "", contentClassName = "" }: DrawerDemoProps) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className={`${triggerClassName}`}>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent  className={`${contentClassName}`}>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>title</DrawerTitle>
            <DrawerDescription>Description.</DrawerDescription>
          </DrawerHeader>
          <div className="">content</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
