import type { Project } from "../data/project";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
      className="group relative bg-[#181818] border border-neutral-800/60 rounded-3xl overflow-hidden hover:border-neutral-700/80 transition-all duration-500 flex flex-col"
    >
      {/* Image Container with Hover Zoom */}
      {project.type === "mobile" ? (
        <div className="flex justify-center items-center gap-4 h-64 bg-neutral-950 rounded-2xl py-6">
          {project.image.map((img, idx) => (
            <div
              key={idx}
              className="relative h-full aspect-9/19 rounded-2xl border-4 border-neutral-700 overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : (
        //   <div className="relative h-56 sm:h-64 overflow-hidden rounded-2xl">
        //     <div className="absolute inset-0 bg-neutral-900 animate-pulse -z-10" />
        <img
          src={project.image[0]}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-[#181818] via-transparent to-transparent opacity-80" />
      {/* </div> */}

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="p-2 bg-neutral-800/50 hover:bg-red-500 text-neutral-300 hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags Area */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-800/60 border border-neutral-700/50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
