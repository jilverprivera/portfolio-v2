enum ProjectCategory {
  "Work project" = "Work project",
  "Personal project" = "Personal project",
  "Open source project" = "Open source project",
  "University project" = "University project",
  "Other" = "Other",
}

export interface Project {
  title: string;
  subTitle?: string | null;
  thumbnail: string;
  category: ProjectCategory;
  company?: string | null;
  position?: string[];
  description: string;
  date: string;
  tags: string[];
  technologies: string[];
  collaborators?: string[];
}

export interface ProjectWithSlug extends Project {
  slug: string;
}
