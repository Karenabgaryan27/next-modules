"use client";

// import * as React from "react";
import React, { useState, ReactElement, useEffect } from "react";
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ItemsProps = {
  label: string;
  value: string;
  isSelected: boolean;
  startIcon: ReactElement;
  endIcon: ReactElement;
};

type SelectScrollableProps = {
  contentClassName?: string;
  triggerClassName?: string;
  placeholder?: string;
  defaultItems?: ItemsProps[];
  callback?: (value: object) => void;
};

export function SelectScrollable({
  contentClassName = "",
  triggerClassName = "",
  placeholder = "Select",
  defaultItems = [],
  callback = () => {},
}: SelectScrollableProps) {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) setValue(selectedItem?.value);
  }, [defaultItems]);

  return (
    <Select
      value={value}
      onValueChange={(value) => {
        setValue(value);
        const selectedItem = items.find((item) => item.value === value);
        if (selectedItem) callback(selectedItem);
      }}
      // open={true}
    >
      <SelectTrigger className={`select-scrollable-trigger w-[280px]  ${triggerClassName}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={`select-scrollable-content max-w-[95vw]  ${contentClassName}`}>
        {items.length ? (
          items.map((item, index) => {
            return (
              <SelectItem key={index} value={item.value} className="select-scrollable-item">
                <div className="select-scrollable-item-inner flex items-center gap-2 ">
                  {item.startIcon && <span className="w-[16px]">{item.startIcon}</span>}
                  <span className="select-scrollable-text flex-1">{item.label}</span>{" "}
                  {/* max-w-[180px] truncate */}
                  {item.endIcon && <span className="ml-auto w-[16px]">{item.endIcon}</span>}
                </div>
              </SelectItem>
            );
          })
        ) : (
          <SelectItem value="empty" disabled>
            Empty
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}
