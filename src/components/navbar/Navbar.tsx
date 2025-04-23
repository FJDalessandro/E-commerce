"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Navbar = () => {
    const { userData, logout } = useAuth();
    console.log("userData:", userData);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between rounded-full">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link className="text-xl font-semibold tracking-tight text-gray-900" href="/">
                        Tech Store
                    </Link>
                </div>

                {!userData?.token ? (
                    <div className="flex items-center justify-end gap-3">
                        <Link href="/register" className="items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white">
                            Sign in
                        </Link>
                        <Link href="/login" className="items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white">
                            Login
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center justify-end gap-3">
                        <Link href="/cart" className="items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white">
                            Cart
                        </Link>
                        <Link href="/dashboard" className="items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white">
                            Profile
                        </Link>
                        <button onClick={logout} className="items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white">
                            Log out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
