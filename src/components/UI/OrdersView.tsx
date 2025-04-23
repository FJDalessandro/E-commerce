"use client";
import { useAuth } from "@/context/AuthContext";
import { IOrder, IProduct } from "@/types";
import { getOrders } from "@/utils/orders.helper";
import React, { useEffect, useState } from "react";

const OrdersView = () => {
    const { userData } = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);

    const handleGetOrders = async () => {
        if (userData?.token) {
            const response = await getOrders(userData?.token);
            setOrders(response);
        }
    };

    useEffect(() => {
        handleGetOrders();
    }, [userData]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-black">
            <h1 className="text-3xl font-bold mb-8">Mis pedidos</h1>

            {orders.length ? (
                <div className="space-y-8">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-xl shadow-md p-6 space-y-4"
                        >
                            <div className="text-gray-800">
                                <p className="font-semibold">
                                    Pedido N°: {order.id}
                                </p>
                                <p>
                                    Fecha de compra:{" "}
                                    {new Date(order.date).toLocaleDateString()}
                                </p>
                                <p>Estado: {order.status}</p>
                            </div>

                            {/* Productos en línea */}
                            <div className="flex flex-wrap gap-4">
                                {order.products.map((product: IProduct) => (
                                    <div
                                        key={product.id}
                                        className="w-40 flex-shrink-0 border rounded-lg p-3 shadow-sm bg-gray-50"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-24 object-cover rounded mb-2 border-amber-50"
                                        />
                                        <p className="text-sm font-medium truncate">
                                            {product.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No realizaste ningún pedido.</p>
            )}
        </div>
    );
};

export default OrdersView;
