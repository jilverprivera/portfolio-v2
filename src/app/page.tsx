import { getAllArticles } from "@/utils/lib/article";
import { getAllProjects } from "@/utils/lib/projects";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 3);
  let projects = (await getAllProjects()).slice(0, 4);

  return (
    <main>
      <Hero />
      <Projects projects={projects} />
    </main>
  );
}
