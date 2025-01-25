"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
//   DialogClose,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogDemoProps = {
  contentClassName?: string;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode | ((closeDialog: () => void) => ReactNode);
};

export function DialogDemo({
  contentClassName = "",
  trigger = null,
  title = "",
  description = "",
  children = null,
}: DialogDemoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || <Button variant="outline">Open Dialog</Button>}</DialogTrigger>
      <DialogContent className={`${contentClassName} sm:max-w-[425px]`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="dialog-body">{typeof children === "function" ? children(closeDialog) : children}</div>
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
