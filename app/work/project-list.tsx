import { projects, Project } from "@/lib/work";
import { ArrowUpRight } from "lucide-react";

export function ProjectList() {
  return (
    <div>
      <h2 className="font-bold text-foreground mb-4">Personal Projects</h2>

      <ul className="mt-4 space-y-1">
        {projects.map((project: Project) => (
          <li
            key={project.name}
            className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1  hover:bg-gray-200/40 rounded-xl p-2 hover:opacity-65"
          >
            <ArrowUpRight className="size-5 text-foreground" />
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-foreground/80 transition-colors"
            >
              <div>
                <span className="font-bold text-foreground group-hover:underline group-hover:underline-offset-4">
                  {project.name}
                </span>
                <p className="text-foreground group-hover:underline group-hover:underline-offset-4">
                  {project.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
