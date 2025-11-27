import { SocialLinks } from "@/components/social";

export function About() {
  return (
    <>
      <div className="flex gap-2 items-center mb-8">
        <h1 className="text-xl font-medium">
          Hi, I&apos;m Saul Perez - Software Developer
        </h1>
      </div>
      <div className="space-y-4 sm:text-base text-sm mb-6">
        <p>
          I&apos;m a software developer who loves bringing ideas to life through
          code, always exploring new ways to solve problems.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll likely find me exploring my love
          for photography and art, capturing moments and drawing inspiration
          from the world around me.
        </p>
        <p>
          I focus on crafting seamless and intuitive user experiences that make
          technology a joy to use.
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
