const APIURL = process.env.NEXT_PUBLIC_API_URL;
import { IProduct } from "@/types";

export async function getProducts(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`, {
            next: { revalidate: 180 },
        });

        const products: IProduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getProductById(id: string): Promise<IProduct> {
    try {
        const response = await getProducts();
        const productFiltred = response.find((product) => product.id.toString() === id);
        if (!productFiltred) throw new Error("No se encontro el producto seleccionado");
        return productFiltred;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getProductBySearch(categoryOrName: string): Promise<IProduct[]> {
    try {
        const response = await getProducts();

        let productFiltred = response.filter((product) => product.categoryId.toString() === categoryOrName);

        if (!productFiltred.length) {
            productFiltred = response.filter((product) => product.name.toLocaleLowerCase().includes(categoryOrName.toLocaleLowerCase()));
            if (!productFiltred.length) {
                productFiltred = [];
            }
        }

        return productFiltred;
    } catch (error: any) {
        throw new Error(error);
    }
}
