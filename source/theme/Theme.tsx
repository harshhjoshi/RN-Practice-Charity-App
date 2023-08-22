import React, { useState, createContext } from 'react';
const ThemeContext = createContext<any>({} as any);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme]: any = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
