import React from "react";
import { CardWithForm } from "@/components/cards/card-with-form/CardWithForm";

type Product = {
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
            {products.map((product, index) => {
                return (
                    <CardWithForm
                        key={index}
                        {...{ title: "Photo", description: product.title, image: product.thumbnailUrl }}
                    />
                );
            })}
        </div>
    );
};

export default ProductsList;
