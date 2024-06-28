import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { navData } from "@/data/navData";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <section className={className}>
      <nav className="absolute flex justify-between items-center px-8 py-2 top-0 w-full z-10">
        <Link href="/">
          <h1 className="font-extrabold text-[48px]">
            A<span className="text-[#28D84F] hover:text-[#1a5727]">.</span>
          </h1>
        </Link>
        <div className="flex items-center space-x-10">
          {navData.map(({ id, title, link }) => (
            <div
              key={id}
              className={cn(
                pathname === link ? "border-b-2 border-[#28D84F]" : ""
              )}
            >
              <Link
                key={id}
                href={link}
                className={cn(pathname !== link && "hover:text-[#24BE46]")}
              >
                {title}
              </Link>
            </div>
          ))}
          <Button className="px-4 py-0.5 bg-gradient-to-r from-[#24BE46] to-[#15722A] text-white hover:bg-[#1a5727]">
            <h1>HIRE ME</h1>
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
