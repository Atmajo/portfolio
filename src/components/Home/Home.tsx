import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-5">
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          alt="Hero Image"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div className="">
        <GlassCard className="flex flex-col justify-center shadow-lg md:w-[450px] md:h-[250px] lg:w-[645px] lg:h-[375px] px-8 py-10">
          <div className="space-y-10">
            <h1
              className={cn(
                "text-[42px] lg:text-[64px] leading-tight",
                roboto.className
              )}
            >
              ATMAJO CHOWDHURY
            </h1>
            <h1 className="text-[18px] lg:text-[24px] text-[#28D84F] tracking-widest">
              WEB DEVELOPER
            </h1>
          </div>
        </GlassCard>
        <Link href="/contact">
          <button className="mt-5 bg-gradient-to-r from-[#24BE46] to-[#15722A] py-2 px-4 rounded-[30px] max-xl:">
            <h1 className="text-[18px] tracking-wide">LET'S CONNECT</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
