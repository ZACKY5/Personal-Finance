import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={cn("eyebrow", inverse && "text-copper")}>{children}</p>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="site-container grid min-h-[68vh] items-end gap-10 py-20 sm:py-28 lg:grid-cols-[1.45fr_0.55fr] lg:py-36">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-5xl font-editorial text-hero leading-[0.96] text-balance">{title}</h1>
      </div>
      <div className="max-w-md border-t border-copper pt-6 text-base leading-7 text-muted-foreground lg:mb-2">{children}</div>
    </section>
  );
}

export function ClarityLines({ className }: { className?: string }) {
  return (
    <div className={cn("clarity-lines" , className)} aria-hidden="true">
      <span /><span /><span /><span /><span /><i />
    </div>
  );
}

export function SectionNumber({ children }: { children: ReactNode }) {
  return <span className="font-display text-xs font-semibold tracking-[0.18em] text-copper">{children}</span>;
}