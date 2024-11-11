import { MainLayout } from "@/components/layout";
import { ParallaxScroll } from "@/components/playground";

const playgroundData = [
  {
    title: "",
    releasedAt: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    title: "",
    releasedAt: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    title: "",
    releasedAt: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    title: "",
    releasedAt: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    title: "",
    releasedAt: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

const PlaygroundPage = () => {


  return (
    <MainLayout
      title="Where imagination plays a leading role."
      intro="As an electronics engineer and programmer, I enjoy exploring various ways to develop my creativity. Mouse over to play some of my hobbies ranging from my work in web development, 3d development to animation and design."
    >
      <ParallaxScroll images={playgroundData} />
    </MainLayout>
  );
};

export default PlaygroundPage;
