import { MapPin } from "lucide-react";
import type { Work } from "../data/work";
import { motion } from "framer-motion";

type Props = {
  working: Work;
};

const WorkCard = ({ working }: Props) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="flex gap-4 sm:gap-6 relative"
    >
      {/* Left Side: periode */}
      <div className="hidden sm:block w-32 pt-6 text-right shrink-0">
        <span className="text-sm text-neutral-400">{working.period}</span>
      </div>

      {/* Middle: Timeline */}
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-px bg-red-600" />
        <div className="relative z-10 w-8 rounded-full flex items-center justify-center mt-5">
          {working.image && (
            <img
              src={working.image}
              alt={working.company}
              className="rounded-full"
            />
          )}
        </div>
      </div>

      {/* Right Side: Card */}
      <div className="flex-1 pb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 sm:p-6 text-center hover:border-neutral-700 transition duration-300">
          <span className="block sm:hidden text-xs text-neutral-400 mb-2">
            {working.period}
          </span>
          <h3 className="font-bold text-lg text-white">{working.position}</h3>
          <p className="flex items-center justify-center gap-1.5 text-neutral-400 text-sm mt-2">
            <MapPin size={14} /> {working.company}
          </p>
          <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
            {working.description}
          </p>
        </div>
      </div>
    </motion.li>
  );
};

export default WorkCard;
