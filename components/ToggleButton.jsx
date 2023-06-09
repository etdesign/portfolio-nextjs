import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="transition-all duration-100"
    >
      {mounted &&
        (resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />)}
    </button>
  );
};

export default ToggleButton;
