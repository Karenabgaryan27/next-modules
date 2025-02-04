"use client";

import React, { useState, useEffect, ReactElement } from "react";
// import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

import {
  Command,
  CommandEmpty,
  // CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
  // CommandShortcut,
} from "@/components/ui/command";

type ItemsProps = {
  label: string;
  value: string;
  isSelected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

type CommandDemoProps = {
  className?: string;
  placeholder?: string;
  defaultItems: ItemsProps[];
  callback?: (item: ItemsProps) => void;
};

export function CommandDemo({
  className = "",
  placeholder = "Type a command or search...",
  defaultItems = [],
  callback = () => {},
}: CommandDemoProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [, setSelectedItem] = useState<ItemsProps | null>(null);

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) setSelectedItem(selectedItem);
  }, [defaultItems]);

  return (
    <Command className={`rounded-lg border shadow-md  w-[280px] ${className}`}>
      <CommandInput placeholder={placeholder}  onFocus={() => setOpen(true)} onBlur={handleClose} />
      {open && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {items.map((item, index) => {
            return (
              <CommandItem
                key={index}
                onSelect={() => {
                  setSelectedItem(item);
                  callback(item);
                }}
              >
                {item.startIcon && <span className="w-[16px] ">{item.startIcon}</span>}
                <span className="command-demo-text flex-1">{item.label}</span>
                {item.endIcon && <span className="ml-auto w-[16px] ">{item.endIcon}</span>}
              </CommandItem>
            );
          })}
        </CommandList>
      )}
    </Command>
  );
}
