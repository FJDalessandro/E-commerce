"use client";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import { createOrder } from "@/utils/orders.helper";
import React, { useEffect, useState } from "react";

const CartView = () => {
    const { userData } = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [finalPrice, setFinalPrice] = useState<number>(0);

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        if (cartStorage) {
            const total = cartStorage.reduce((acc: number, item: IProduct) => acc + item.price, 0);
            setCart(cartStorage);
            setFinalPrice(total);
        }
    }, []);

    const handleCheckout = async () => {
        if (userData?.token) {
            const idProducts = cart?.map((product) => product.id);
            await createOrder(userData?.token, idProducts);
            localStorage.setItem("cart", "[]");
            setCart([]);
            setFinalPrice(0);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lista de productos */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.length ? (
                        cart.map((product) => (
                            <div key={product.id} className="flex items-center gap-4 p-4 border rounded-xl shadow-sm">
                                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-semibold">{product.name}</h2>
                                    <p className="text-gray-700">${product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No tienes ningún producto seleccionado.</p>
                    )}
                </div>

                {/* Resumen de compra */}
                <div className="p-6 border rounded-xl shadow-md flex flex-col justify-between h-fit">
                    <h2 className="text-xl font-bold mb-4">Resumen</h2>
                    <p className="text-gray-700 mb-6">
                        Total: <span className="font-semibold">${finalPrice}</span>
                    </p>
                    <button onClick={handleCheckout} className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors" disabled={cart.length === 0}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartView;
