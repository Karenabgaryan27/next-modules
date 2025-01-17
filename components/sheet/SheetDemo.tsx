import { Button } from "@/components/ui/button";
import {
  Sheet,
//   SheetClose,
  SheetContent,
  SheetDescription,
//   SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

type SheetDemoProps = {
  contentClassName?: string;
  title?: string;
  description?: string;
  side?: "right" | "top" | "bottom" | "left" | null | undefined;
  trigger?: ReactNode;
  children?: ReactNode,
};

export function SheetDemo({
  contentClassName = "",
  title = "",
  description = "",
  side='right',
  trigger = null,
  children
}: SheetDemoProps) {
  return (
    <Sheet >
      <SheetTrigger asChild>{trigger ? trigger : <Button variant="outline">Open</Button>}</SheetTrigger>
      <SheetContent className={contentClassName} side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="sheet-body">
           {children}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" size="sm">
              Button
            </Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
