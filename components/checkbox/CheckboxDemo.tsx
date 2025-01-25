"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { v4 as uuidv4 } from "uuid";

type CheckboxProps = {
  className?: string;
  label?: string;
  color?: "primary" | "success" | "warning" | "danger" | "dark";
  checked?: boolean;
  disabled?: boolean;
  callback?: (isChecked: boolean, id: string) => void;
};

export function CheckboxDemo({
  className = "",
  label = "",
  color = "primary",
  checked = false,
  disabled = false,
  callback = () => {},
}: CheckboxProps) {
  const [id, setId] = useState("");
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    callback(checked, id);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  useEffect(() => setId(uuidv4()), []);

  return (
    <div className={`checkbox flex items-center space-x-2 ${className}`} data-color={color}>
      <Checkbox
        checked={isChecked}
        id={`${id}`}
        disabled={disabled}
        className={`border `}
        onCheckedChange={handleChange}
      />
      {label && (
        <label
          htmlFor={`${id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  );
}
