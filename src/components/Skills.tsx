const Skills = () => {
  return (
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="relative inline-flex w-fit overflow-hidden">
            <span className="opacity-100 transform-none ">
              <div className="flex items-center gap-1 text-xl font-medium text-neutral-100">
                <h2 className="capitalize">Skills</h2>
              </div>
            </span>
          </span>
          <div className="flex flex-col justify-between gap-2 text-neutral-600 md:flex-row lg:items-center">
            <p className="dark:text-neutral-400">My Tech Stack</p>
          </div>
        </div>
      </section>
  );
};

export default Skills;
