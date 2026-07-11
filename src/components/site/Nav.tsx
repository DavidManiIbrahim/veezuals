import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/veezuals-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/policies", label: "Policies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
        <div className="container-x flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-1 font-display text-sm tracking-tight">
            <img
              src={logo}
              alt="Veezuals logo"
              className="h-8 md:h-10 w-auto flex-shrink-0 object-contain"
            />
            <span className="clash-grotesk-bold text-lg md:text-2xl font-bold whitespace-nowrap">
              Veezuals
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#64aee0] text-lg hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          {/* Only show open button when menu is closed */}
          {!open && (
            <button
              className="md:hidden cursor-pointer text-foreground"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center md:hidden">
          {/* Close button inside the overlay */}
          <button
            className="absolute cursor-pointer top-4 right-4 text-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-4xl font-medium font-display text-[#64aee0] hover:text-foreground transition-colors"
                activeProps={{ className: "text-4xl font-display text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}