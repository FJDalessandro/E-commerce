import { ILoginForm, IRegister } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegister) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            return response.json();
        } else {
            alert("Error al registrarse");
            throw new Error("Fallo el servidor al registrar el usuario");
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function login(userData: ILoginForm) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            return response.json();
        } else {
            alert("Error en el login");
            throw new Error("Fallo el servidor al loguear el usuario");
        }
    } catch (error: any) {
        throw new Error(error);
    }
}
