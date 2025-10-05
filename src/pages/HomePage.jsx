import { Header } from "../components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};
