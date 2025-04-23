"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "@/utils/auth.helper";
import { useRouter } from "next/navigation";

const RegisterView = () => {
    const router = useRouter();

    const validationSchemaRegister = Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
        phone: Yup.string().required("El teléfono es obligatorio"),
        address: Yup.string().required("La dirección es obligatoria"),
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Crear cuenta</h1>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        name: "",
                        phone: "",
                        address: "",
                    }}
                    validationSchema={validationSchemaRegister}
                    onSubmit={async (values) => {
                        await register(values);
                        router.push("/login");
                    }}
                >
                    {({ errors }) => (
                        <Form className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Tu nombre"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Contraseña */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="111 111 111"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Dirección */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                <Field
                                    type="text"
                                    name="address"
                                    placeholder="Calle falsa 123"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                disabled={errors.email || errors.password || errors.phone || errors.address || errors.name ? true : false}
                                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                            >
                                Registrarme
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterView;
