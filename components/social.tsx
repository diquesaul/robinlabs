import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <Link
        href="https://twitter.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        <Twitter size={20} />
        <span className="sr-only">X (Twitter)</span>
      </Link>
      <Link
        href="https://github.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        <Github size={20} />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://instagram.com/robinxpfp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        <Instagram size={20} />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  );
}
