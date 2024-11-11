import { Project, ProjectWithSlug } from "@/interfaces/projects";
import glob from "fast-glob";

async function fetchProject(projectFilename: string): Promise<ProjectWithSlug> {
  let { project } = (await import(`../../app/works/${projectFilename}`)) as {
    default: React.ComponentType;
    project: Project;
  };
  return {
    slug: projectFilename.replace(/(\/page)?\.mdx$/, ""),
    ...project,
  };
}

export async function getAllProjects() {
  let projectPageFiles = await glob("*/page.mdx", {
    cwd: "./src/app/works",
  });
  let projectPages = await Promise.all(projectPageFiles.map(fetchProject));
  return projectPages.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
