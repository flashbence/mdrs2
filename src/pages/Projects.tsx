import { useLanguage } from "@/contexts/LanguageContext";

const placeholderProjects = [
  { name: "Projekt Alpha", category: "projects.category.residential" },
  { name: "Projekt Beta", category: "projects.category.commercial" },
  { name: "Projekt Gamma", category: "projects.category.industrial" },
  { name: "Projekt Delta", category: "projects.category.public" },
  { name: "Projekt Epsilon", category: "projects.category.residential" },
  { name: "Projekt Zeta", category: "projects.category.commercial" },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10 text-center">
          {t("projects.title")}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderProjects.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded bg-muted overflow-hidden flex items-end"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              <div className="relative z-10 p-4 w-full">
                <h3 className="font-semibold text-sm text-foreground">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t(project.category)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
