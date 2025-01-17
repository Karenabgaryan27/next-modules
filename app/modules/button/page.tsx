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
            <ButtonDemo name="Button" />
            <ButtonDemo color="warning" />
            <ButtonDemo color="success" />
          </div>
          <br />
          <div className="btn-group flex gap-2 items-center">
            <strong>Secondary:</strong>
            <ButtonDemo variant="secondary" />
            <ButtonDemo variant="secondary" color="warning" />
            <ButtonDemo variant="secondary" color="success" />
          </div>
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Outline:</strong>
            <ButtonDemo variant="outline" />
            <ButtonDemo variant="outline" color="warning" />
            <ButtonDemo variant="outline" color="success" />
          </div>
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Ghost:</strong>
            <ButtonDemo variant="ghost" />
            <ButtonDemo variant="ghost" color="warning" />
            <ButtonDemo variant="ghost" color="success" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="btn-group flex gap-2 items-center">
            <strong>Sizes:</strong>
            <ButtonDemo startIcon={<Mail/>} size="sm" name="Button" />
            <ButtonDemo startIcon={<Mail/>}  name="Button" />
            <ButtonDemo startIcon={<Mail/>} size="lg" name="Button" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <ButtonDemo variant="destructive" />
          <br />
          <br />

          <ButtonDemo variant="link" />
          <br />
          <br />

          <ButtonDemo variant="outline" size="icon" name="" icon={<ChevronRight />} />
          <br />
          <br />
          <ButtonDemo startIcon={<Mail />} />
          <br />
          <br />

          <ButtonDemo startIcon={<img className="w-[16px]" src={exampleImage} alt="" />} />
          <br />
          <br />

          <ButtonDemo startIcon={home} />
          <br />
          <br />

          <ButtonDemo startIcon={<Loader2 className="animate-spin" />} disabled={true} />
          <br />
          <br />
        </div>
      </section>
    </main>
  );
};

export default page;
