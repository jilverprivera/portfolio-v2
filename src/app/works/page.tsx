import { type Metadata } from "next";
import { getAllProjects } from "@/utils/lib/projects";
import { MainLayout } from "@/components/layout";
import { WorkCard } from "@/components/sections/projects/Work.card";
import { ProjectWithSlug } from "@/interfaces/projects";

export const metadata: Metadata = {
  title: "Works",
  description: "Things I’ve made trying to put my dent in the universe.",
};

export default async function ProjectPage() {
  let projects = await getAllProjects();

  return (
    <MainLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <section className=" mx-auto flex flex-col items-start justify-start">
        {projects.map((project: ProjectWithSlug) => (
          <WorkCard key={project.slug} {...project} />
        ))}
      </section>
    </MainLayout>
  );
}
