"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavLinkProps {
  link: {
    url: string;
    title: string;
  };
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathnameFromHook = usePathname();
  const [pathName, setPathName] = useState("/");

  useEffect(() => {
    if (pathnameFromHook) {
      setPathName(pathnameFromHook);
    }
  }, [pathnameFromHook]);

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;

