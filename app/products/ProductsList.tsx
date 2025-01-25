import React from "react";
import { CardWithForm } from "@/components/cards/card-with-form/CardWithForm";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const getProductsList = async (): Promise<Product[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10", {
    cache: "no-store",
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("fdf");
    }, 3000);
  });
  return await res.json();
};

const ProductsList = async () => {
  const products: Product[] = await getProductsList();
  return (
    <div className="card-group products-card-group">
      {products.map((product: Product, index) => {
        return (
          <div key={index}>
            <CardWithForm {...{ title: "Photo", description: product.title, image: product.thumbnailUrl }} />
            <Link href={`products/${product.id}`} className="p-3 mt-2 block bg-slate-100 hover:bg-slate-200 rounded" >
              Go to
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
