import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#FFFFFF] bg-opacity-15 backdrop-blur-sm rounded-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
