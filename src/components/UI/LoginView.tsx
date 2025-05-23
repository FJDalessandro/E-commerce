"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ValidateLoginForm } from "@/utils/validate";
import { login } from "@/utils/auth.helper";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";

const LoginView = () => {
    const { setUserData } = useAuth();
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h1>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={ValidateLoginForm}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            Swal.fire({
                                title: "Iniciando sesión...",
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                },
                            });

                            const response = await login(values);
                            const { token, user } = response;

                            setUserData({ token, user });

                            Swal.fire({
                                icon: "success",
                                title: "¡Bienvenido!",
                                text: "Has iniciado sesión correctamente",
                                timer: 2000,
                                showConfirmButton: false,
                            });

                            router.push("/");
                        } catch (error: any) {
                            Swal.fire({
                                icon: "error",
                                title: "Error de inicio de sesión",
                                text: error?.message || "Verifica tus credenciales e intenta de nuevo",
                            });
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors }) => (
                        <Form className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={errors.email || errors.password ? true : false}
                                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginView;
