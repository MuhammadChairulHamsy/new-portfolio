import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 pt-40 sm:pt-32 lg:pt-40"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">
              My Projects
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Projects
          </h2>
        </div>
        {/* Projects */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-slate-500  w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover"
            />
          </div>
          <div className="bg-slate-500 w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover "
            />
          </div>
          <div className="bg-slate-500 w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover "
            />
          </div>
          <div className="bg-slate-500 w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover "
            />
          </div>
          <div className="bg-slate-500 w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover "
            />
          </div>
          <div className="bg-slate-500 w-[30rem] rounded-md ">
            <img
              src="/projects/Project-1.png"
              alt="Project Hikma aqiqah"
              className="pb-40 object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
