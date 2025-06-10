import React, { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { parseCookies, destroyCookie } from "nookies";
import { api } from "../services/api";
import { setTokensCookie } from "../services/setTokensCookie";

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  roles: string[];
  permissions: string[];
}

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

interface IAuthProvider {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies()

    if (token) {
      api.get("/me").then(({ data }) => {
        const { email, permissions, roles } = data as IUser;

        setUser({
          email,
          permissions,
          roles
        })
      }).catch(() => {
        destroyCookie(undefined, "nextauth.token")
        destroyCookie(undefined, "nextauth.refreshToken")

        Router.push("/")
      })
    }
  }, [])

  const signIn = async ({ email, password }: ISignInCredentials) => {
    try {
      const { data } = await api.post("sessions", {
        email,
        password
      });

      const { token, refreshToken } = data;

      setTokensCookie({ token, refreshToken })

      api.defaults.headers["Authorization"] = `Bearer ${token}`

      Router.push("/dashboard");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      signIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}