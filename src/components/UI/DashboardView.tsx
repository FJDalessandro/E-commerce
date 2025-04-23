"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";

const DashboardView = () => {
    const { userData } = useAuth();

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-black">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h1 className="text-3xl font-bold">
                    Bienvenido, {userData?.user.name}
                </h1>

                <div className="border-t pt-4">
                    <h2 className="text-lg font-semibold mb-1 text-black">
                        Dirección de facturación / envío
                    </h2>
                    <p className="text-black">{userData?.user.addres}</p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-lg font-semibold mb-1 text-black">
                        Información de contacto
                    </h2>
                    <p className="text-black">Correo: {userData?.user.email}</p>
                    <p className="text-black">
                        Teléfono: {userData?.user.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
