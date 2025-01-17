import React from "react";
import type { Metadata } from "next";
import { SheetDemo } from "@/components/index.js";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sheet",
  description: "description for sheet page",
};

const page = () => {
  return (
    <main>
      <section className="min-h-[200vh]">
        <div className="container">
          <h2 className="text-4xl">Sheet</h2>
          <br />
          <br />
          <SheetDemo title="Title" description="Sheet description.">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam dicta necessitatibus
              incidunt qui veritatis sequi vel eos saepe obcaecati hic soluta officia, maxime blanditiis
              exercitationem quaerat, neque totam reiciendis enim dolorem. Repellendus nesciunt commodi et
              possimus eius officia maxime id sequi, quis dignissimos nostrum dolorum. Suscipit aspernatur
              voluptatibus doloremque voluptatum autem.
            </div>
          </SheetDemo>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="sheet-group flex items-center gap-2">
            <SheetDemo side="top" trigger={<Button variant="outline">Top</Button>} />
            <SheetDemo side="right" trigger={<Button variant="outline">Right</Button>} />
            <SheetDemo side="bottom" trigger={<Button variant="outline">Bottom</Button>} />
            <SheetDemo side="left" trigger={<Button variant="outline">Left</Button>} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
