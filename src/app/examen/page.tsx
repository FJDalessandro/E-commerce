import React from "react";
import { getProducts } from "@/utils/products.helper";
import { IProduct } from "@/types";

const page = async () => {
    const producto1: IProduct[] = await getProducts();
    const products: IProduct = producto1[0];
    return (
        <div>
            <h1>{products.name}</h1>
        </div>
    );
};

export default page;
