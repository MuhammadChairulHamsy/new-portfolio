import { useState, useEffect } from "react";
import { personalData } from "@/data/personal-data";
import ProfileCard from "../ProfileCard";
import { skills } from "@/data/skills";
import { Sparkles } from "lucide-react";

export const About = () => {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="relativeflex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 pt-40 sm:pt-32 lg:pt-40"
    >
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 xl:gap-40 items-center">
          {/* Text Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Who I am */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Who I am?
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                {personalData.description}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-300 font-medium">{skill.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  5+
                </p>
                <p className="text-slate-400 text-sm">Years Exp</p>
              </div>
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  20+
                </p>
                <p className="text-slate-400 text-sm">Projects</p>
              </div>
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  5+
                </p>
                <p className="text-slate-400 text-sm">Clients</p>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 border-2 border-purple-500/20 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-3xl transform -rotate-3"></div>
              </div>

              {/* Profile Card with enhanced styling */}
              <div className="relative cursor-pointer">
                <ProfileCard
                  name="Muhammad Chairul Hamsy"
                  title="Software Engineer"
                  handle="Hamsy"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/image/profile.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    // Scroll smooth ke section contact
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
