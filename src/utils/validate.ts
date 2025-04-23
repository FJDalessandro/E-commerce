import { ILoginErrors, ILoginForm } from "@/types";
import * as Yup from "yup";

export const ValidateLoginForm = (values: ILoginForm) => {
    const errors: ILoginErrors = {};
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    return errors;
};

export const validationSchemaRegister = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    phone: Yup.string().required("El telefono es obligatorio"),
    address: Yup.string().required("La direccion es obligatoria"),
});
