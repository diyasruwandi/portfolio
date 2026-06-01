import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, LineChart, User } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Home", icon: Home, to: "/" },
  { label: "About", icon: User, to: "/about" },
  { label: "Projects", icon: LineChart, to: "/projects" },
];

const MOBILE_LABEL_WIDTH = 72;

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="fixed inset-x-0 bottom-4 mx-auto z-20 w-fit
        bg-neutral-900/60 backdrop-blur-md border border-neutral-700/50 rounded-full
        flex items-center p-2 shadow-xl space-x-1
        min-w-50 max-w-[95vw] h-13"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.to;

        return (
          <NavLink key={item.to} to={item.to} end>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className={cn(
                "flex items-center px-3 py-2 rounded-full transition-colors duration-200 h-10 min-w-11",
                isActive
                  ? "bg-white/10 text-white gap-2"
                  : "text-neutral-400 hover:bg-neutral-800",
              )}
              type="button"
              aria-label={item.label}
            >
              <Icon size={22} strokeWidth={2} aria-hidden />

              <motion.div
                initial={false}
                animate={{
                  width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                  opacity: isActive ? 1 : 0,
                  marginLeft: isActive ? "8px" : "0px",
                }}
                transition={{
                  width: { type: "spring", stiffness: 350, damping: 32 },
                  opacity: { duration: 0.19 },
                }}
                className="overflow-hidden flex items-center"
              >
                <span className="font-medium text-xs whitespace-nowrap text-white">
                  {item.label}
                </span>
              </motion.div>
            </motion.button>
          </NavLink>
        );
      })}
    </motion.nav>
  );
}
