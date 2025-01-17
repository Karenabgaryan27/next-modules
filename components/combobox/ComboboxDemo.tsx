"use client";

import React, {  ReactElement, useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type ItemsProps = {
  label: string;
  value: string;
  isSelected: boolean;
  startIcon: ReactElement;
  endIcon: ReactElement;
};

type ComboboxDemoProps = {
  triggerClassName: string;
  contentClassName: string;
  defaultItems: ItemsProps[];
  callback?: (value: object) => void;
};

export function ComboboxDemo({
  triggerClassName = "",
  contentClassName = "",
  defaultItems = [],
  callback = () => {},
}: ComboboxDemoProps) {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemsProps | null>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) {
      setValue(selectedItem?.value);
      setSelectedItem(selectedItem);
    }
  }, [defaultItems]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={`w-[280px] combobox-demo-trigger ${triggerClassName}`}>
        <Button variant="outline" role="combobox" aria-expanded={open} className=" justify-between">
          {selectedItem?.startIcon && <span className="w-[16px] ">{selectedItem.startIcon}</span>}
          <span className="truncate flex-1 text-left">
            {value ? items.find((item) => item.value === value)?.label : "Select"}
          </span>
          {selectedItem?.endIcon && <span className="ml-auto w-[16px] ">{selectedItem.endIcon}</span>}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        // side="bottom"
        align="start"
        className={` p-0 combobox-demo-content w-full  max-w-[92vw] ${{ contentClassName }}`}
      >
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedItem(item);
                    callback(item);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("ml-auto", value === item.value ? "opacity-100" : "opacity-0")} />
                  {item.startIcon && <span className="w-[16px] ">{item.startIcon}</span>}
                  <span className="combobox-demo-text flex-1">{item.label}</span>
                  {item.endIcon && <span className="ml-auto w-[16px] ">{item.endIcon}</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
