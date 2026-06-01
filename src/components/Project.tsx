import { Target } from "lucide-react";
import { projectData } from "../data/project";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="space-y-4 mb-10">
      <div className="border-b border-neutral-800 pb-4 mb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <Target size={24} className="text-red-500" /> Projects
        </h2>
        <p className="text-neutral-400 text-sm mt-2">
          Showing selected projects that I have built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))} 
      </div>
    </section>
  );
};

export default Project;
