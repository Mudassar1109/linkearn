import Link from "next/link";
import { cn } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";
import { BRAND } from "@/constants";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <div className="flex size-9 items-center justify-center rounded-lg bg-[#2563eb] text-white transition-transform duration-200 hover:scale-105">
        <LinkIcon className="size-5" />
      </div>
      <span className="text-lg font-bold tracking-tight text-[#0f172a]">
        {BRAND.name}
      </span>
    </Link>
  );
}

export { Logo };
