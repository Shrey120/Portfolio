"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", href: "/" },
  { name: "achievements", href: "/achievements" },
  { name: "projects", href: "/projects" },
  { name: "skills", href: "/skills" },
  { name: "education", href: "/education" },
  { name: "contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-centre items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1>
              Shreyash<span className='text-accent'></span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
