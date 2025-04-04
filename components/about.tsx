import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/social";

export function About() {
  return (
    <>
      <div className="flex gap-2 items-center mb-8">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>RX</AvatarFallback>
        </Avatar>
        <div className="flex flex-col font-medium">
          <span>Robin</span>
          <span className="text-sm opacity-75">Software Developer</span>
        </div>
      </div>
      <div className="space-y-4 sm:text-base text-sm">
        <p>
          A minimalist passionate about the digital realm, diving into coding
          with endless curiosity.
        </p>
        <p>
          A street photographer in real life, also known as a skilled baker.
        </p>
        <p>
          I care about seamless user experiences and aim to streamline efforts
          for innovation and creativity.
        </p>
        <p>
          <span className="font-bold">@robinxpfp</span> is my alias on the
          internet.
        </p>
      </div>

      <SocialLinks />
    </>
  );
}
