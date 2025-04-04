import { XIcon } from "@/components/icons/x";
import { GithubIcon } from "@/components/icons/github";
import Link from "next/link";
import { Instagram } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <Link
        href="https://twitter.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XIcon />
      </Link>
      <Link
        href="https://github.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://instagram.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={24} />{" "}
      </Link>
    </div>
  );
}
