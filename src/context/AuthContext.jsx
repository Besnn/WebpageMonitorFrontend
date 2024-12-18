import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  // Login function - you can replace this with actual API call
  const login = async (username, password) => {
    // TODO: Replace this with actual API authentication
    // For now, this is a simple mock implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock authentication - accept any non-empty credentials
        if (username && password) {
          const user = {
            username: username,
            // Add other user properties as needed
          }
          setCurrentUser(user)
          localStorage.setItem('user', JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 500) // Simulate network delay
    })
  }

  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
