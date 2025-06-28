"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: number
  name: string
  email: string
  isVerified: boolean
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem("traveltrust_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call your API
    const mockUser = {
      id: 1,
      name: "Sarah Johnson",
      email: email,
      isVerified: true,
    }
    setUser(mockUser)
    localStorage.setItem("traveltrust_user", JSON.stringify(mockUser))
  }

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - in real app, this would call your API
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email,
      isVerified: false,
    }
    setUser(mockUser)
    localStorage.setItem("traveltrust_user", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("traveltrust_user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export { AuthContext }
