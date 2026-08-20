"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/call", label: "Live Call" },
  { href: "/industries", label: "Industries" },
  { href: "/lanes", label: "Lanes" },
  { href: "/objections", label: "Objections" },
  { href: "/method", label: "Method" },
  { href: "/compliance", label: "Compliance" },
];

export function Shell() {
  const pathname = usePathname();
  return (
    <header className="shell-header">
      <div className="shell-header__inner">
        <Link href="/" className="brand">
          <span className="brand__dot" aria-hidden />
          Capital&nbsp;Infusion
          <span className="brand__tag">playbook v3</span>
        </Link>
        <nav className="shell-nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              data-active={pathname === n.href || pathname.startsWith(n.href + "/")}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
