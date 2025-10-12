import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ShineBorder } from "../ui/shine-border";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const codeString = `const coder = {
  name: 'Muhammad Chairul Hamsy',
  skills: ['React', 'NextJS', 
  'Redux', 'Express', 'NestJS',
  'MySql', 'MongoDB', 'Docker'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
    this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 pt-40 sm:pt-32 lg:pt-40"
    >
      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-1">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-slate-100 mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                MUHAMMAD CHAIRUL HAMSY
              </span>
            </h1>

            {/* Role */}
            <div className="mb-6 sm:mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium">
                Software Engineer
              </p>
              <div className="mt-2 h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
              Crafting beautiful, responsive, and user-friendly web experiences
              with modern technologies
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                CONTACT ME
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-100 rounded-lg font-semibold hover:bg-slate-800 hover:border-purple-500 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                GET RESUME
              </button>
            </div>
          </div>

          {/* Right Side - Code Editor */}
          <div className="w-full order-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700 overflow-hidden hover:shadow-purple-500/20 transition-shadow duration-300">
              {/* Window Header */}
              <div className="bg-slate-800/80 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 border-b border-slate-700">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 sm:ml-3 text-slate-400 text-xs">
                  Developer.js
                </span>
                <ShineBorder
                  borderWidth={2}
                  duration={14}
                  shineColor={["#a855f7", "#ec4899", "#a855f7"]}
                  className="rounded-xl"
                />
              </div>

              {/* Code Block */}
              <div className="w-full">
                <div className="text-xs sm:text-sm lg:text-[1rem]">
                  <SyntaxHighlighter
                    language="javascript"
                    style={atomDark}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      background: "transparent",
                      fontSize: "inherit",
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
