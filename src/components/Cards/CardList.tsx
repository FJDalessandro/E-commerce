import Link from "next/link";
import Card from "./Card";
import { getProducts } from "@/utils/products.helper";

const CardList = async () => {
    const productsToPreLoad = await getProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsToPreLoad &&
                    productsToPreLoad.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Card {...product} />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default CardList;
