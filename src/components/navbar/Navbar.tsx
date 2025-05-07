"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Navbar = () => {
    const { userData, logout } = useAuth();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                        Tech Store
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="/products/iphone" className="text-gray-700 text-sm font-semibold hover:text-black transition">
                        Smartphones
                    </Link>
                    <Link href="/products/ipad" className="text-gray-700 text-sm font-semibold hover:text-black transition">
                        Ipads
                    </Link>
                    <Link href="/products/mac" className="text-gray-700 text-sm font-semibold hover:text-black transition">
                        Macbooks
                    </Link>
                    <Link href="/products/airpod" className="text-gray-700 text-sm font-semibold hover:text-black transition">
                        Airpods
                    </Link>
                    <Link href="/products/homepod" className="text-gray-700 text-sm font-semibold hover:text-black transition">
                        Homepod
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    {!userData?.token ? (
                        <>
                            <Link href="/register" className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition">
                                Sign in
                            </Link>
                            <Link href="/login" className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition">
                                Login
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/cart" className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition">
                                Cart
                            </Link>
                            <Link href="/dashboard" className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition">
                                Profile
                            </Link>
                            <button onClick={logout} className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
