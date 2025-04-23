"use client";
import { AuthProviderProps, IAuthContextProps, IUserSession } from "@/types";
import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserSession | null>(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userSession")!);
        setUserData(userData);
    }, []);

    useEffect(() => {
        if (userData) {
            localStorage.setItem(
                "userSession",
                JSON.stringify({
                    token: userData.token,
                    user: userData.user,
                }),
            );
            Cookies.set("userSession", JSON.stringify({ token: userData.token, user: userData.user }));
        }
    }, [userData]);

    const logout = () => {
        setUserData(null);
        localStorage.removeItem("userSession");
        Cookies.remove("userSession");
    };

    return <AuthContext.Provider value={{ userData, setUserData, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
