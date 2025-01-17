"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      label: "داشبورد",
      href: "/",
    },
    {
      label: "اشکالات",
      href: "/bugs",
    },
  ];
  return (
    <header className="flex justify-center py-3 bg-yellow-100">
      <div className="flex justify-between max-w-7xl w-full items-center">
        <nav className="flex gap-5 items-center">
          <Link href="/" className="font-bold text-lg">
            مدیر
          </Link>
          <ul className="flex gap-3 items-center text-sm">
            {navLinks.map((link) => (
              <li
                className={classNames({
                  "text-zinc-800 font-bold": pathname === link.href,
                  "text-zinc-600": pathname !== link.href,
                  "hover:text-zinc-800 transition": true,
                })}
                key={link.label}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
