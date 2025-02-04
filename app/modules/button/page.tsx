import React from "react";
import type { Metadata } from "next";
import { ButtonDemo } from "@/components/index.js";
import { ChevronRight, Mail, Loader2 } from "lucide-react";
import localData from "@/localData";

export const metadata: Metadata = {
  title: "Button",
  description: "description for button page",
};

const { exampleImage } = localData.images;
const { home } = localData.svgs;

const page = () => {
  return (
    <main className="button-page">
      <section>
        <div className="container">
          <h2 className="text-4xl">Button</h2>
          <br />
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Default:</strong>
            <ButtonDemo text="Button" />
            <ButtonDemo text="Button" color="warning" />
            <ButtonDemo text="Button" color="success" />
          </div>
          <br />
          <div className="btn-group flex gap-2 items-center">
            <strong>Secondary:</strong>
            <ButtonDemo text="Button" variant="secondary" />
            <ButtonDemo text="Button" variant="secondary" color="warning" />
            <ButtonDemo text="Button" variant="secondary" color="success" />
          </div>
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Outline:</strong>
            <ButtonDemo text="Button" variant="outline" />
            <ButtonDemo text="Button" variant="outline" color="warning" />
            <ButtonDemo text="Button" variant="outline" color="success" />
          </div>
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Ghost:</strong>
            <ButtonDemo text="Button" variant="ghost" />
            <ButtonDemo text="Button" variant="ghost" color="warning" />
            <ButtonDemo text="Button" variant="ghost" color="success" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Sizes:</strong>
            <ButtonDemo startIcon={<Mail />} size="sm" name="Button" />
            <ButtonDemo startIcon={<Mail />} name="Button" />
            <ButtonDemo startIcon={<Mail />} size="lg" name="Button" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <ButtonDemo text="Button" variant="destructive" />
          <br />
          <br />

          <ButtonDemo text="Button" variant="link" />
          <br />
          <br />

          <ButtonDemo variant="outline" size="icon" name="" icon={<ChevronRight />} />
          <br />
          <br />
          <ButtonDemo text="Button" startIcon={<Mail />} />
          <br />
          <br />

          <ButtonDemo text="Button" startIcon={<img className="w-[16px]" src={exampleImage} alt="" />} />
          <br />
          <br />

          <ButtonDemo text="Button" startIcon={home} />
          <br />
          <br />

          <ButtonDemo text="Button" startIcon={<Loader2 className="animate-spin" />} disabled={true} />
          <br />
          <br />
        </div>
      </section>
    </main>
  );
};

export default page;
