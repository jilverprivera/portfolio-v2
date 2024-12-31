import { getAllArticles } from "@/utils/lib/article";
import { getAllProjects } from "@/utils/lib/projects";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default async function Home() {
  const projects = (await getAllProjects()).slice(0, 4).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <Hero />
      <Projects projects={projects} />
    </main>
  );
}
