"use client";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

const ProductDetail: React.FC<IProduct> = ({ name, image, description, price, stock, id, categoryId }) => {
    const router = useRouter();
    const { userData } = useAuth();
    const handleAddToCart = () => {
        if (!userData?.token) {
            alert("Debes iniciar sesion");
            router.push("/login");
        } else {
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
            const repeatedProduct = cart.some((item: IProduct) => {
                if (item.id === id) return true;
                return false;
            });
            if (repeatedProduct) {
                alert("El producto ya fue añadido al carrito");
                router.push("/cart");
            } else {
                cart.push({
                    name,
                    image,
                    description,
                    price,
                    stock,
                    id,
                    categoryId,
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Añadido con exito");
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Imagen del producto */}
                <div className="w-full aspect-square overflow-hidden rounded-xl shadow-sm">
                    <img src={image} alt={`Imagen de ${name}`} className="w-full h-full object-cover" />
                </div>

                {/* Información del producto */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{name}</h1>
                        <p className="text-xl font-semibold mb-4">${price}</p>
                        <p className="text-gray-700 mb-2">{description}</p>
                        <p className="text-sm text-gray-500">Stock disponible: {stock}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <input type="number" min="1" defaultValue="1" className="w-16 px-2 py-1 border rounded-md text-center" />
                        <button onClick={handleAddToCart} className="px-6 py-2 rounded-md text-white bg-black hover:bg-gray-800 transition-colors">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
