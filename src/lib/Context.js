import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [value, setValue] = useState(null)

  return <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
}

export default Provider
