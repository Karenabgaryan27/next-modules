"use client";

import React, { useState, useEffect, ReactElement } from "react";
import { CreditCard, Settings, User, Laptop, Moon, Sun } from "lucide-react";
// import { type DialogProps } from "@radix-ui/react-dialog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ButtonDemo } from "@/components/index";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { DialogTitle } from "@/components/ui/dialog";

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

export function CommandDialogDemo({
  className = "",
  placeholder = "Type a command or search...",
  defaultItems = [],
  callback = () => {},
}: CommandDemoProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [, setSelectedItem] = useState<ItemsProps | null>(null);

  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) setSelectedItem(selectedItem);
  }, [defaultItems]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <ButtonDemo
        className="text-slate-500 flex w-full justify-between max-w-[280px]"
        text={
          <>
            Search...
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>J
            </kbd>
          </>
        }
        variant="outline"
        endIcon={<Search />}
        onClick={() => setOpen(true)}
      />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Sheet</DialogTitle>
        <CommandInput placeholder={placeholder} />
        <CommandList className={`${className}`}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {items.map((item, index) => {
              if (index > 3) return;
              return (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    setSelectedItem(item);
                    callback(item);
                    setOpen(false);
                  }}
                >
                  {item.startIcon && <span className="w-[16px] ">{item.startIcon}</span>}
                  <span className="command-demo-text flex-1">{item.label}</span>
                  {item.endIcon && <span className="ml-auto w-[16px] ">{item.endIcon}</span>}
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
