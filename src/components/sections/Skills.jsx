import { useState, useEffect } from "react";
import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { ShineBorder } from "../ui/shine-border";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const techLogos = [
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiReact className="text-[#61DAFB] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            React
          </span>
        </div>
      ),
      title: "React",
      href: "https://react.dev",
      ariaLabel: "React",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiNextdotjs className="text-white text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            Next.js
          </span>
        </div>
      ),
      title: "Next.js",
      href: "https://nextjs.org",
      ariaLabel: "Next.js",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiTypescript className="text-[#3178C6] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            TypeScript
          </span>
        </div>
      ),
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      ariaLabel: "TypeScript",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiTailwindcss className="text-[#06B6D4] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            Tailwind CSS
          </span>
        </div>
      ),
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
      ariaLabel: "Tailwind CSS",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiJavascript className="text-[#F7DF1E] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            JavaScript
          </span>
        </div>
      ),
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      ariaLabel: "JavaScript",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiNodedotjs className="text-[#339933] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            Node.js
          </span>
        </div>
      ),
      title: "Node.js",
      href: "https://nodejs.org",
      ariaLabel: "Node.js",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiMongodb className="text-[#47A248] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            MongoDB
          </span>
        </div>
      ),
      title: "MongoDB",
      href: "https://www.mongodb.com",
      ariaLabel: "MongoDB",
    },
    {
      node: (
        <div className="flex flex-col items-center gap-3">
          <SiGit className="text-[#F05032] text-5xl" />
          <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
            Git
          </span>
        </div>
      ),
      title: "Git",
      href: "https://git-scm.com",
      ariaLabel: "Git",
    },
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            <span className="text-blue-300 text-sm font-medium">
              My Tech Stack
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Logo Loop Container */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Gradient wrapper untuk background yang smooth */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background dengan gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

            {/* Border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm"></div>

            {/* Content container */}
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12">
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={80}
                gap={80}
                pauseOnHover={true}
                scaleOnHover={false}
                fadeOut={true}
                fadeOutColor="rgb(15 23 42)"
                ariaLabel="Technology stack"
                className="text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-slate-400 text-sm">
            Click on icons to learn more about each technology
          </p>
        </div>

        {/* Skill Categories */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Frontend Card dengan ShineBorder */}
          <div className="relative w-full rounded-xl overflow-hidden bg-slate-900/90 backdrop-blur-sm">
            <ShineBorder
              borderWidth={2}
              duration={14}
              shineColor={["#3b82f6", "#06b6d4", "#3b82f6"]}
              className="rounded-xl"
            />
            <div className="relative p-6 z-10">
              {/* Icon Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  Frontend
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          {/* Backend Card dengan ShineBorder */}
          <div className="relative w-full rounded-xl overflow-hidden bg-slate-900/90 backdrop-blur-sm">
            <ShineBorder
              borderWidth={2}
              duration={14}
              shineColor={["#a855f7", "#ec4899", "#a855f7"]}
              className="rounded-xl"
            />
            <div className="relative p-6 z-10">
              {/* Icon Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  Backend
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Node.js, Express, MongoDB, REST APIs
                </p>
              </div>
            </div>
          </div>

          {/* Tools Card dengan ShineBorder */}
          <div className="relative w-full rounded-xl overflow-hidden bg-slate-900/90 backdrop-blur-sm">
            <ShineBorder
              borderWidth={2}
              duration={14}
              shineColor={["#22c55e", "#10b981", "#22c55e"]}
              className="rounded-xl"
            />
            <div className="relative p-6 z-10">
              {/* Icon Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                  Tools
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Git, GitHub, VS Code, Figma, Postman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
