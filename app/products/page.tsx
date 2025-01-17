import React from "react";
import { Suspense } from "react";
import ProductsList from "@/app/products/ProductsList";
import { SkeletonCard } from "@/components/index";

const Products = () => {
    return (
        <main className="products-page">
            <section className="showcase">
                <div className="container">
                    <br />
                    <h2 className="text-3xl">Products</h2>
                    <br />
                    {/* <SkeletonCard/> */}
                    <Suspense
                        fallback={
                            <div className="products-card-group">
                                {[...Array(8)].map((_, index) => (
                                    <SkeletonCard key={index} />
                                ))}
                            </div>
                        }
                    >
                        <ProductsList />
                    </Suspense>
                </div>
            </section>
        </main>
    );
};

export default Products;
