import React, { useState } from 'react'

const defaultTheme = 'dark';

export const Context = React.createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: JSX.Element;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Context.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </Context.Provider>
  )
}