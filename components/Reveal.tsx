"use client";

import { useEffect, useRef } from "react";

// IO-gated entrance. Paint-first: CSS starts at opacity .35, never 0,
// and reduced-motion disables entirely (see globals §15).
export function Reveal({
  children,
  i = 0,
  as: Tag = "div",
  className,
}: {
  children: React.ReactNode;
  i?: number;
  as?: "div" | "section" | "article" | "li";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.setAttribute("data-revealed", "true");
            io.disconnect();
          }
        });
      },
      { rootMargin: "-40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag ref typing
    <Tag ref={ref} data-reveal style={{ ["--i" as string]: i }} className={className}>
      {children}
    </Tag>
  );
}
