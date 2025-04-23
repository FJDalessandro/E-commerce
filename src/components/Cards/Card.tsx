import React from "react";
import { IProduct } from "@/types";

const Card: React.FC<IProduct> = ({ name, image, price }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer text-black">
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 truncate">{name}</h2>
                <p className="text-gray-700 font-medium">Precio: ${price}</p>
            </div>
        </div>
    );
};

export default Card;
