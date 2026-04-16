import { useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme }>({ theme: "light" });

// Auto-switch: dark from 6PM (18) to 6AM (6); light otherwise.
const computeTheme = (): Theme => {
  const h = new Date().getHours();
  return h >= 18 || h < 6 ? "dark" : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window !== "undefined" ? computeTheme() : "light"
  );

  useEffect(() => {
    const apply = () => {
      const next = computeTheme();
      setTheme(next);
      document.documentElement.classList.toggle("dark", next === "dark");
    };
    apply();
    // Re-check every minute to handle the 6AM/6PM transitions.
    const id = setInterval(apply, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
