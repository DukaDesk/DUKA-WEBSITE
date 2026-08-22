import { createContext, useCallback, useContext, useState } from "react";

export const THEMES = ["white"];

const STORAGE_KEY = "dukadesk-theme";

export function initTheme() {
  let theme;
  try {
    theme = localStorage.getItem(STORAGE_KEY);
  } catch {
    theme = null;
  }
  if (!theme || !THEMES.includes(theme)) {
    theme = "white";
  }
  document.documentElement.dataset.theme = theme;
  return theme;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof document !== "undefined") return document.documentElement.dataset.theme || "white";
    return "white";
  });

  const setTheme = useCallback((next) => {
    setThemeState((prev) => {
      const value = next || prev;
      document.documentElement.dataset.theme = value;
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        /* private mode — ignore */
      }
      return value;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}