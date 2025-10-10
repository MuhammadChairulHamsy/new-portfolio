import { useState, useEffect } from "react";
import { Code2, ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card with gradient border */}
              <div className="relative p-[2px] rounded-2xl overflow-hidden h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 transition-all duration-500">
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden h-full">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div
                      className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4"
                      }`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-900" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-4 h-4 text-slate-900" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <div className="pt-4 border-t border-slate-800">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live project"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
