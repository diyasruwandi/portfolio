import { GraduationCap, MapPin } from "lucide-react";
import { educationData } from "../data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="space-y-4">
      <div className="border-b border-neutral-800 pb-4 mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <GraduationCap size={24} /> Education
        </h2>
        <p className="text-neutral-400 text-sm mt-2">My education history</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col mt-4"
      >
        {educationData.map((edu, index) => (
          <div key={index} className="flex gap-4 sm:gap-6 relative">
            {/* Left side: Period */}
            <div className="hidden sm:block w-32 pt-6 text-right shrink-0">
              <span className="text-sm  text-neutral-400">{edu.period}</span>
            </div>

            {/* Middle: Timeline Line and Icon */}
            <div className="relative flex flex-col items-center">
              {/* The vertical line */}
              <div className="absolute top-0 bottom-0 w-px bg-red-600"></div>

              {/* The red node icon */}
              <div className="relative z-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-5">
                <GraduationCap size={14} className="text-white" />
              </div>
            </div>

            {/* Right side: Card */}
            <div className="flex-1 pb-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 sm:p-6 text-center hover:border-neutral-700 transition duration-300">
                <span className="block sm:hidden text-xs text-neutral-400 mb-2">
                  {edu.period}
                </span>
                <h3 className="font-bold text-lg text-white">{edu.degree}</h3>
                <p className="flex items-center justify-center gap-1.5 text-neutral-400 text-sm mt-2">
                  <MapPin size={14} />
                  {edu.location}, {edu.institution}
                </p>
                <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
