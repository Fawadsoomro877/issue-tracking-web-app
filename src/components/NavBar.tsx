"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";

const navLinks = [
  { id: 0, label: "Dashbaord", href: "/" },
  { id: 1, label: "Issues", href: "/issues" },
];

const NavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex items-center gap-6 p-6 mb-4 border-b">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className={`${
                link.href === currentPath && "text-zinc-900"
              } text-zinc-500 hover:text-zinc-800 transition-colors`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
