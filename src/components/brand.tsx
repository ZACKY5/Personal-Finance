import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="Annuitee home" className="group inline-flex items-baseline text-foreground">
      <span className={cn("font-display font-semibold uppercase tracking-[0.22em]", compact ? "text-sm" : "text-base")}>
        Annuit<span className="relative">e<span className="absolute -bottom-1 left-0 h-px w-full bg-copper transition-transform group-hover:scale-x-50" />e</span>
      </span>
    </Link>
  );
}

const navigation = [
  { label: "What We Do", to: "/what-we-do" as const },
  { label: "Vision", to: "/vision" as const },
  { label: "People", to: "/people" as const },
  { label: "Tools", to: "/tools" as const },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("annuitee-theme");
    const nextDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("annuitee-theme", nextDark ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"} title={dark ? "Use light theme" : "Use dark theme"}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="site-container flex h-18 items-center justify-between">
        <Wordmark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild variant="brand" className="hidden sm:inline-flex">
            <Link to="/" hash="plan-preview">Build My Plan <ArrowUpRight /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="site-container flex flex-col py-5">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-2xl text-foreground">
                {item.label}
              </Link>
            ))}
            <Button asChild variant="brand" className="mt-6 w-full">
              <Link to="/" hash="plan-preview" onClick={() => setOpen(false)}>Build My Plan <ArrowUpRight /></Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-porcelain">
      <div className="site-container py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-sm font-editorial text-3xl leading-tight">Your money deserves better thinking.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="footer-label">Explore</p>
              {navigation.map((item) => <Link key={item.to} to={item.to} className="block text-periwinkle transition-colors hover:text-copper">{item.label}</Link>)}
            </div>
            <div className="space-y-3">
              <p className="footer-label">Future</p>
              {['Privacy', 'Terms', 'Disclosures', 'Contact'].map((item) => <span key={item} className="block text-periwinkle/65">{item}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-periwinkle/20 pt-6 text-xs leading-relaxed text-periwinkle/65 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl">Annuitee is currently a brand and product prototype. Regulatory, advisory and compliance information will be added before any financial service becomes available.</p>
          <p>© 2026 Annuitee</p>
        </div>
      </div>
    </footer>
  );
}

export function ArrowLink({ children, to }: { children: React.ReactNode; to: "/" | "/vision" | "/what-we-do" }) {
  return <Link to={to} className="inline-flex items-center gap-2 border-b border-copper pb-1 text-sm font-semibold text-foreground transition-colors hover:text-copper">{children}<ArrowUpRight className="size-4" /></Link>;
}