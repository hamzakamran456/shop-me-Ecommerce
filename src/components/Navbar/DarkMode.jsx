import { useEffect, useState } from "react";
import LightBtn from "../../assets/website/light-mode-button.png"; 
import DarkBtn from "../../assets/website/dark-mode-button.png";  

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative flex items-center justify-center h-16 w-16">
      <img
        src={theme === "light" ? LightBtn : DarkBtn}
        alt="Toggle Theme"
        onClick={toggleTheme}
        className="w-12 cursor-pointer transition-all duration-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
};

export default DarkMode;
