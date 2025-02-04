"use client";

import React from "react";
import { ButtonDemo } from "@/components/index.js";
import useAlert from "@/hooks/alert/useAlert";

const Content = () => {
  const { alert, successAlert, warningAlert, errorAlert } = useAlert();
  return (
    <section className="min-h-[200vh]">
      <div className="container">
        <h2 className="text-4xl">Sonner</h2>
        <br />
        <br />

        <ButtonDemo text="Show Toast" variant="outline" onClick={() => alert("Event has been created")} />
        <br />
        <br />

        <ButtonDemo
          text="Success Alert"
          variant="outline"
          color="success"
          onClick={() => successAlert("Event has been created successfully.")}
        />
        <br />
        <br />

        <ButtonDemo
          text="Warning Alert"
          color="warning"
          variant="outline"
          onClick={() => warningAlert("Something went wrong. Please try again.")}
        />
        <br />
        <br />

        <ButtonDemo
          text="Error Alert"
          variant="destructive"
          onClick={() => errorAlert("Something went wrong. Please try again.")}
        />
      </div>
    </section>
  );
};

export default Content;
