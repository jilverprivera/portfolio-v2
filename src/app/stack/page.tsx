import { MainLayout } from "@/components/layout";

const STACK_DATA = [
  {
    title: "Development",
    items: [
      {
        title: "Next.js",
        type: "Web Framework",
        icon: "",
      },
      {
        title: "Tailwind CSS",
        type: "Styling",
        icon: "",
      },
      {
        title: "Stripe",
        type: "Payments",
        icon: "",
      },
      {
        title: "Vercel",
        type: "Hosting",
        icon: "",
      },
      {
        title: "Supabase",
        type: "Database",
        icon: "",
      },
      {
        title: "Firebase",
        type: "Database",
        icon: "",
      },
      {
        title: "Expo",
        type: "Mobile Development",
        icon: "",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        title: "Spoify",
        type: "Music",
        icon: "",
      },
      {
        title: "Zen",
        type: "Browser",
        icon: "",
      },
      {
        title: "Google Calendar",
        type: "Calendar",
        icon: "",
      },
      {
        title: "Notion",
        type: "Notes",
        icon: "",
      },
      {
        title: "Chat GPT",
        type: "AI assistant",
        icon: "",
      },
    ],
  },
];

const StackPage = () => {
  return (
    <MainLayout
      title="Hey, I'm Jilver."
      intro="I am energized by exploring, creating and always hungry for the unknown. I love being able to provide solutions to personally challenging problems that push me out of my comfort zone."
    >
      <div className="space-y-4">
        {STACK_DATA.map((element, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4">
            <h2 className="text-4xl">{element.title}</h2>
            <div className="grid grid-cols-6 gap-4">
              {element.items
                ?.sort((a, b) => a.title.localeCompare(b.title))
                .map((item, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <div>
                      <p>{item.icon}</p>
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-xs">{item.type}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default StackPage;
