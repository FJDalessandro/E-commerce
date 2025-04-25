import Card from "@/components/Cards/Card";
import { getProductBySearch } from "@/utils/products.helper";
import Link from "next/link";
import React from "react";

const CategoryOrName = async ({ params }: { params: Promise<{ categoryOrName: string }> }) => {
    const { categoryOrName } = await params;
    const products = await getProductBySearch(categoryOrName);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length ? (
                    products.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Card {...product} />
                        </Link>
                    ))
                ) : (
                    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer text-black">
                        <p>No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryOrName;
