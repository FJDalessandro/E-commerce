export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id?: number;
    name: string;
}

enum Role {
    ADMIN = "admin",
    USER = "user",
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    addres: string;
    phone: number;
    role: Role;
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface ILoginErrors {
    email?: string;
    password?: string;
}

export interface IRegister {
    email: string;
    name: string;
    password: string;
    phone: string;
    address: string;
}

export interface IUserSession {
    token: string;
    user: IUser;
}

export interface IAuthContextProps {
    userData: IUserSession | null;
    setUserData: (userData: IUserSession | null) => void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[];
}
