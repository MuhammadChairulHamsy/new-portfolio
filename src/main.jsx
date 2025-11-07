import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import Particles from "@/components/Particles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative w-full min-h-screen">
      {/* Background Particles - Fixed sebagai background global */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Content - Semua konten di atas particles */}
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  </StrictMode>
);
