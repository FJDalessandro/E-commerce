import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 mt-16 rounded-t-xl">
            {/* Contenido centrado */}
            <footer className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
                {/* Compañía */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Compañía</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/about" className="hover:underline">
                                Acerca de nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/careers" className="hover:underline">
                                Empleos
                            </a>
                        </li>
                        <li>
                            <a href="/press" className="hover:underline">
                                Prensa
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Soporte */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Soporte</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/help" className="hover:underline">
                                Centro de ayuda
                            </a>
                        </li>
                        <li>
                            <a href="/shipping" className="hover:underline">
                                Envíos y devoluciones
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/terms" className="hover:underline">
                                Términos y condiciones
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Política de privacidad
                            </a>
                        </li>
                        <li>
                            <a href="/cookies" className="hover:underline">
                                Cookies
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Twitter / X
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

            {/* Línea inferior */}
            <div className="bg-gray-200 py-4 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} TuMarca. Todos los derechos
                reservados.
            </div>
        </div>
    );
};

export default Footer;
