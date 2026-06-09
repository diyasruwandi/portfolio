import { BriefcaseBusiness } from "lucide-react";
import { workData } from "../data/work";
import WorkCard from "./WorkCard";
import BtnDownload from "./ui/btndownload";

const Work = () => {
  return (
    <section className="space-y-4 mb-10">
      <div className="border-b border-neutral-800 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
            <BriefcaseBusiness size={24} /> Career
          </h2>
          <div className="translate-y-[6px]">
            <BtnDownload />
          </div>
        </div>
        <p className="text-neutral-400 text-sm mt-2">My Career History</p>
      </div>

      <ol className="flex flex-col mt-4">
        {workData.map((work) => (
          <WorkCard key={work.id} working={work} />
        ))}
      </ol>
    </section>
  );
};

export default Work;
