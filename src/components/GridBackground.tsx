import { useTheme } from "../context/ThemeContext";

function GridBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const lineColor = isDark ? "#262626" : "#e0e0e0";

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
      style={{
        backgroundImage: `
        linear-gradient(to right, ${lineColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
      `,
        backgroundSize: "35px 35px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      }}
    />
  );
}

export default GridBackground;
