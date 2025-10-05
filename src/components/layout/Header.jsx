import { useState, useEffect } from "react";
import { CodeXml } from "lucide-react";
import GradientText from "../GradientText";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // useEffect untuk menutup menu mobile ketika layar diperbesar
  useEffect(() => {
    const handleResize = () => {
      // Tutup menu mobile jika layar berubah ke ukuran desktop (lg breakpoint = 1024px)
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Header dengan background solid */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 lg:px-20 flex justify-center gap-20 items-center pt-12">
          {/* Logo */}
          <a
            href="#home"
            className="font-bold text-2xl text-slate-100 flex flex-row items-center gap-2"
            onClick={closeMenu}
          >
            <GradientText
              colors={["#10b981", "#8b5cf6", "#ec4899", "#10b981", "#8b5cf6"]} // emerald-500, violet-500, pink-500
              animationSpeed={3}
              showBorder={false}
              className="text-xl font-poppins sm:text-2xl md:text-2xl lg:text-2xl font-bold leading-tight"
            >
              Syycode
            </GradientText>
            <CodeXml strokeWidth={3} className="text-slate-100 h-7 w-6 pt-1" />
          </a>

          {/* Hamburger Button - Berubah jadi X saat menu terbuka */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              {/* Line 1 */}
              <span
                className={`w-6 h-0.5 bg-[#065F46] absolute transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>

              {/* Line 2 */}
              <span
                className={`w-6 h-0.5 bg-[#065F46] absolute transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              {/* Line 3 */}
              <span
                className={`w-6 h-0.5 bg-[#065F46] absolute transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#menu", label: "Project" },
              { href: "#testimoni", label: "Blog" },
              { href: "#contacts", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-slate-100 font-medium transition-colors duration-200 hover:text-[#059669] group"
              >
                {item.label}
                {/* Simple underline effect */}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#059669] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        <div className="h-[2px] w-[680px] bg-slate-50 mt-2 mx-auto"></div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
       <div className="fixed inset-0 text-center bg-white z-[99] mt-16 pt-8 overflow-y-auto lg:hidden">
          <ul className="space-y-6 px-4">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#menu", label: "Project" },
              { href: "#testimoni", label: "Blog" },
              { href: "#contacts", label: "Contact" },
            ].map((item, index) => (
              <li
                key={item.href}
                className={`transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="relative block py-3 text-xl font-semibold text-gray-800 transition-all duration-200 hover:text-[#059669] hover:bg-gray-50 rounded-lg px-4 group"
                >
                  {item.label}
                  {/* Mobile menu underline - sama seperti desktop */}
                  <span className="absolute left-4 bottom-2 w-0 h-[2px] bg-[#059669] transition-all duration-200 group-hover:w-[calc(100%-1rem)]"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
