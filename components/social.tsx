import { XIcon } from "@/components/icons/x";
import { GithubIcon } from "@/components/icons/github";
import { InstagramIcon } from "@/components/icons/instagram";
import Link from "next/link";

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
        <InstagramIcon />
      </Link>
    </div>
  );
}
