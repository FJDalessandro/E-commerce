import Link from "next/link";

export default function Custom404() {
    return (
        <div className=" flex flex-col items-center justify-center text-gray-600 bg-white text-center p-8 m-auto h-auto rounded-2xl shadow-2xl">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! Page not found.</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
