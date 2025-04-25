"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchQuery.length) {
            router.push(`/products/${searchQuery}`);
        } else {
            alert("Campo vacio");
        }

        setSearchQuery("");
    };

    return (
        <div className="flex justify-center w-full px-2 sm:px-4 pt-20">
            <form
                className="flex w-full max-w-2xl bg-white border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-gray-400"
                onSubmit={handleSubmit}
            >
                <input
                    value={searchQuery}
                    type="text"
                    placeholder="Search for products..."
                    className="flex-grow py-2 px-3 sm:px-4 text-gray-800 focus:outline-none text-sm sm:text-base text-center"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-black text-white px-3 sm:px-4 py-2 text-sm font-semibold hover:bg-gray-900 focus:outline-none">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
