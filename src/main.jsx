import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import Particles from "@/components/Particles";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full min-h-screen " style={{ width: "100%", height: "600px", position: "relative" }}>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="bg-slate-950"
      />
    <HomePage />
    </div>
  </StrictMode>
);
