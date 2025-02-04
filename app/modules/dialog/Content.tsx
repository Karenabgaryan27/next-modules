"use client";

import React from "react";
import { DialogDemo, ButtonDemo } from "@/components/index.js";

const Content = () => {
  return (
    <section className="min-h-[200vh]">
      <div className="container">
        <h2 className="text-4xl">Dialog</h2>
        <br />
        <br />
        <DialogDemo title="Title" description="Description" />
        <br />
        <br />

        <DialogDemo trigger={<ButtonDemo text="Open dialog with children" variant="outline" />}>
          {(closeDialog) => (
            <div>
              <h2 className="text-2xl">Title</h2>
              <p>Dialog discription</p>
              <br />
              <ButtonDemo className="ml-auto flex" onClick={closeDialog} text="Close" variant="outline" />
            </div>
          )}
        </DialogDemo>
        <br />  
        <br />  

        <DialogDemo contentClassName='min-h-[400px]' trigger={<ButtonDemo text="Open dialog with nested Dialog children" variant="outline" />}>
          <DialogDemo title="Title" description="Nested Dialog description" ></DialogDemo>
        </DialogDemo>

      </div>
    </section>
  );
};

export default Content;
