"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode, ReactElement, useState, useEffect } from "react";

type ItemsProps = {
  name?: string;
  isChecked?: boolean;
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  shortcut?: string;
  id: string;
};

type DropdownProps = {
  buttonName?: string;
  title?: string;
  contentClassName?: string;
  triggerClassName?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  defaultItems: ItemsProps[];
  children?: ReactNode;
  callback?: (items: ItemsProps[]) => void;
};

export function DropdownMenuDemo({
  buttonName = "Open",
  title = "",
  contentClassName = "",
  triggerClassName = "",
  variant = "outline",
  defaultItems = [],
  children = null,
  callback = () => {},
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (openState: boolean) => {
    setOpen(openState);
  };

  const [items, setItems] = useState<ItemsProps[]>([]);

  useEffect(() => {
    setItems([...defaultItems]);
  }, [defaultItems]);

  const onSelect = (id: string) => {
    let tempItems = [...items];
    tempItems = tempItems.map((item) => ({ ...item, isChecked: item.id === id }));
    setItems(tempItems);
    callback(tempItems);
  };

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild className={`dropdown-menu-demo-trigger ${triggerClassName}`}>
        <Button variant={variant} size="sm">
          {buttonName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-56 mx-3 dropdown-menu-demo-content ${contentClassName}`}>
        {title && <DropdownMenuLabel>{title}</DropdownMenuLabel>}
        {/* <DropdownMenuSeparator /> */}

        {items.length
          ? items.map((item, index) => {
              return (
                <DropdownMenuItem
                  key={index}
                  disabled={item.disabled}
                  onSelect={() => {
                    // e.preventDefault();
                    onSelect(item.id);
                  }}
                  className={`${item.isChecked ? "!text-green-700" : ""}`}
                >
                  {item.startIcon && <span>{item.startIcon}</span>}
                  <span>{item.name}</span>
                  {item.shortcut && <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>}
                  {item.endIcon && <span className="ml-auto">{item.endIcon}</span>}
                </DropdownMenuItem>
              );
            })
          : ""}
        {children}
        {!items.length && !children && <div className="text-slate-400 text-sm px-2">Empty</div>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
