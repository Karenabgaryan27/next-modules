'use client'

import React from "react";
import { useGlobalContext } from "@/context";

export default function Home() {
  const context = useGlobalContext()

  if (!context) return <p>Loading...</p>;

  // const { state } = context;
  // console.log(state)
  
   return (
    <main className="home-page">
      <section className="showcase">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h2>Hello world</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
