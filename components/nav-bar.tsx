"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex justify-between items-center font-semibold mb-20 sm:text-base text-sm"
      )}
    >
      <div>RX</div>
      <div className={cn("flex gap-4")}>
        <Link
          href="/"
          className={cn(
            pathname === "/" &&
              "underline underline-offset-4 decoration-2 decoration-[#f28c38]"
          )}
        >
          Who Am I
        </Link>
        <Link
          href="/writings"
          className={cn(
            pathname === "/writings" &&
              "underline underline-offset-4 decoration-2 decoration-[#f28c38]",
            "pointer-events-none opacity-50"
          )}
        >
          Writings
        </Link>
        <Link
          href="/work"
          className={cn(
            pathname === "/work" &&
              "underline underline-offset-4 decoration-2 decoration-[#f28c38]"
          )}
        >
          Work
        </Link>
      </div>
    </div>
  );
}
