import { WorkIntro } from "@/app/work/work-intro";
import { ProjectList } from "@/app/work/project-list";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export default function page() {
  return (
    <>
      <NavBar />
      <WorkIntro />
      <ProjectList />
      <Footer />
    </>
  );
}
