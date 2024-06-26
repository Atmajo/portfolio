"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navData } from "@/data/navData";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavbarProps {
  className?: string;
}

const MobileNavbar = ({ className }: MobileNavbarProps) => {
  const pathname = usePathname();

  return (
    <section className={className}>
      <nav className="absolute flex justify-between items-center px-8 py-2 top-0 w-screen z-10">
        <Link href="/">
          <h1 className="font-extrabold text-[32px]">
            A<span className="text-[#28D84F] hover:text-[#1a5727]">.</span>
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Menu size="32" />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-r to-[#040525] from-[#666666] bg-opacity-75 border-0">
            <div className="flex flex-col justify-start">
              <div>
                {navData.map(({ id, title, link }) => (
                  <div
                    key={id}
                    className={cn(
                      "p-4",
                      pathname === link
                        ? "border-l-4 border-[#28D84F]"
                        : ""
                    )}
                  >
                    <Link key={id} href={link}>
                      {title}
                    </Link>
                  </div>
                ))}
              </div>
              <Button className="px-4 py-0.5 bg-[#28D84F] hover:bg-[#1a5727]">
                <h1>HIRE ME</h1>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </section>
  );
};

export default MobileNavbar;
