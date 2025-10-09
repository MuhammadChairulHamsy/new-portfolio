import { useState, useEffect } from "react";

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
      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div>
          <h1 className="text-4xl bg-slate-100">Test</h1>
        </div>
      </div>
    </section>
  );
};
