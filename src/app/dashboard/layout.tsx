import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Navegación */}
            <nav className="flex flex-wrap items-center gap-4 border-b pb-4 mb-6">
                <Link
                    href="/dashboard"
                    className="text-sm font-medium text-black hover:text-black hover:underline"
                >
                    Perfil
                </Link>
                <Link
                    href="/dashboard/orders"
                    className="text-sm font-medium text-black hover:text-black hover:underline"
                >
                    Pedidos
                </Link>
            </nav>

            {/* Contenido */}
            <section className="bg-white rounded-xl shadow-md p-6">
                {children}
            </section>
        </div>
    );
}
