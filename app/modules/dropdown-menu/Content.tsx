"use client";
import { Mail, Plus } from "lucide-react";
import localData from "../../../localData";
import React, { useState, ReactElement, useEffect } from "react";
import { DropdownMenuCheckboxes, DropdownMenuDemo, SelectScrollable, ComboboxDemo } from "@/components/index.js";
import useFetch from "@/hooks/useFetch";

const { home } = localData.svgs;
const { exampleImageSVG } = localData.images;

const DropdownMenuDemoSection = () => {
  const data = [
    { name: "item 1", isChecked: true, startIcon: <Mail />, shortcut: "⇧⌘P", id: "1" },
    {
      name: "item 2",
      isChecked: false,
      shortcut: "⇧⌘P",
      disabled: true,
      id: "2",
    },
    {
      name: "item 3",
      isChecked: false,
      startIcon: <img className="w-[16px]" src={exampleImageSVG} alt="" />,
      endIcon: <Plus />,
      disabled: false,
      id: "3",
    },
    { name: "item 4", isChecked: false, startIcon: home, shortcut: "⇧⌘P", id: "4" },
  ];

  type ItemsProps = {
    name?: string;
    isChecked?: boolean;
    disabled?: boolean;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    shortcut?: string;
    id: string;
  };

  const [fetchedItems] = useState(data);

  const callback = (items: ItemsProps[]) => {
    console.log(items);
  };

  return (
    <section className="dropdown-menu-demo-section">
      <div className="container">
        <h2 className="text-4xl">Dropdown Menu Demo</h2>
        <br />
        <DropdownMenuDemo
          defaultItems={fetchedItems}
          title="My Account"
          callback={callback}
          triggerClassName={`dropdown-menu-demo-trigger-custom`}
          contentClassName={`dropdown-menu-demo-content-custom`}
        />
      </div>
    </section>
  );
};

const DropdownMenuCheckboxesSection = () => {
  const data = [
    { name: "item 1", isChecked: false, startIcon: <Mail />, id: "1" },
    { name: "item 2", isChecked: true, disabled: false, id: "2" },
    {
      name: "item 3",
      isChecked: false,
      startIcon: <img className="w-[16px]" src={exampleImageSVG} alt="" />,
      endIcon: <Plus />,
      disabled: true,
      id: "3",
    },
    { name: "item 4", isChecked: true, startIcon: home, disabled: false, id: "4" },
  ];

  type ItemsProps = {
    name?: string;
    isChecked?: boolean;
    disabled?: boolean;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    id: string;
  };

  const [fetchedItems] = useState(data);

  const callback = (items: ItemsProps[]) => {
    console.log(items);
  };

  return (
    <section className="dropdown-menu-checkboxes-section">
      <div className="container ">
        <h2 className="text-4xl">Dropdown Menu Checkboxes</h2>
        <br />

        <DropdownMenuCheckboxes
          defaultItems={fetchedItems}
          callback={callback}
          triggerClassName={`dropdown-menu-checkboxes-trigger-custom`}
          contentClassName={`dropdown-menu-checkboxes-content-custom`}
        />
      </div>
    </section>
  );
};

const SelectSection = () => {

  type FetchedItemsProps = {
    id: number,
    title: string;
    thumbnailUrl: string;
  };

  const [fetchedItems, setFetchedItems] = useState([]);

  const { getProducts } = useFetch();

  useEffect(() => {
    const _getProducts = async () => {
      try {
        const data = await getProducts();
        const filteredData = data.map((item: FetchedItemsProps, index: number) => ({
          id: item.id,
          label: item.title,
          value: item.title,
          startIcon:  <img className="w-[16px]" src={exampleImageSVG} alt=""  /> ,
          endIcon:  home,
          isSelected: index == 3
        }));
        setFetchedItems(filteredData);
      } catch (err) {
        // errorAlert(err?.response?.data?.res_msg || "Internal Server Error");
        console.error(err, "=getProducts= request error");
      }
    };
    _getProducts();
  }, []);

  const callback = (value: object) => {
    console.log(value);
  };

  return (
    <section className="select-section">
      <div className="container ">
        <h2 className="text-4xl">Select Scrollable</h2>
        <br />
    
        <SelectScrollable
          defaultItems={fetchedItems}
          callback={callback}
          triggerClassName={`selectScrollable-trigger-custom`}
          contentClassName={`selectScrollable-content-custom`}
        />
      </div>
    </section>
  );
};

const ComboboxSection = () => {

  type FetchedItemsProps = {
    id: number,
    title: string;
    thumbnailUrl: string;
  };

  const [fetchedItems, setFetchedItems] = useState([]);

  const { getProducts } = useFetch();

  useEffect(() => {
    const _getProducts = async () => {
      try {
        const data = await getProducts();
        const filteredData = data.map((item: FetchedItemsProps, index: number) => ({
          id: item.id,
          label: item.title,
          value: item.title,
          startIcon:  <img className="w-[16px]" src={exampleImageSVG} alt=""  /> ,
          endIcon:  home,
          isSelected: index == 3
        }));
        setFetchedItems(filteredData);
      } catch (err) {
        // errorAlert(err?.response?.data?.res_msg || "Internal Server Error");
        console.error(err, "=getProducts= request error");
      }
    };
    _getProducts();
  }, []);

  const callback = (value: object) => {
    console.log(value);
  };

  return (
    <section className="combobox-section">
      <div className="container ">
        <h2 className="text-4xl">Combobox</h2>
        <br />
    
        <ComboboxDemo
          defaultItems={fetchedItems}
          callback={callback}
          triggerClassName={`combobox-demo-trigger-custom`}
          contentClassName={`combobox-demo-content-custom`}
        />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <>
      <DropdownMenuDemoSection />
      <hr />
      <DropdownMenuCheckboxesSection />
      <hr />
      <SelectSection />
      <hr />
      <ComboboxSection/>
    </>
  );
};

export default Content;
