import React from "react";
import { notFound } from "next/navigation";
import Redirect from "./Redirect.jsx";
import { BreadcrumbDemo } from "@/components/index.js";

const fetchData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const data = await fetchData(id);

  return {
    title: `single product page ${data.id}`,
    description: data.body,
  };
};

const breadcrumbItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/not-found",
    label: "Not Found",
  },
  {
    href: '/products',
    label: "Products",
  },
  {
    label: "Product",
  },
];

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  if (Number(id) > 3) notFound();

  const data = await fetchData(id);

  return (
    <main className="product-page">
      <section>
        <div className="container">
          <BreadcrumbDemo items={breadcrumbItems} />
          <br />
          <br />

          Product id is {data.id}
          <br />
          <br />
          <h1>
            <strong>title:</strong>
            <br />
            {data.title}
          </h1>
          <br />
          <p>
            <strong>description:</strong>
            <br />
            {data.body}
          </p>
          <br />
          <Redirect />
        </div>
      </section>
    </main>
  );
}
