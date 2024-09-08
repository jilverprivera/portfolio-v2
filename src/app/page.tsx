import { getAllArticles } from "@/lib/article";
import { getAllProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
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
