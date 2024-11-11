import { MainLayout } from "@/components/layout";
import { Experience } from "@/components/sections/Experience";

const AboutPage = () => {
  return (
    <MainLayout
      title="Hey, I'm Jilver."
      intro="I am energized by exploring, creating and always hungry for the unknown. I love being able to provide solutions to personally challenging problems that push me out of my comfort zone."
    >
      <Experience />
    </MainLayout>
  );
};

export default AboutPage;
