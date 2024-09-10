"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", href: "/" },
  { name: "achievements", href: "/achievements" },
  { name: "projects", href: "/projects" },
  { name: "skills", href: "/skills" },
  { name: "education", href: "/education" },
  { name: "contact", href: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map(({ name, href }, index) => {
        return (
          <Link
            key={index}
            href={href}
            className={`${
              href === pathname && "text-accent border-accent border-b-2 "
            } capitalize font-medium hover:text-accent transition-all`}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
