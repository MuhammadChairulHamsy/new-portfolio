import { personalData } from "@/data/personal-data";
import ProfileCard from "../ProfileCard";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="my-12 mx-10 lg:my-16 relative">
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-2xl font-bold block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Who I am?
            </p>
            <p className="text-gray-200 text-md lg:text-lg">
              {personalData.description}
            </p>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
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
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
