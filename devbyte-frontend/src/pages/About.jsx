import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaLightbulb,
  FaCode,
  FaGraduationCap,
  FaHandshakeSimple,
  FaRocket,
} from "react-icons/fa6";

const About = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Vibrant Community",
      subtitle: "Join a diverse group of developers sharing knowledge and experiences.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation Hub",
      subtitle: "Stay updated with latest tech trends and innovative solutions.",
    },
    {
      icon: FaCode,
      title: "Collaborative Projects",
      subtitle: "Work on real-world projects with fellow developers.",
    },
    {
      icon: FaGraduationCap,
      title: "Learning Resources",
      subtitle: "Access curated learning materials and workshops.",
    },
    {
      icon: FaHandshakeSimple,
      title: "Mentorship",
      subtitle: "Connect with experienced developers for guidance.",
    },
    {
      icon: FaRocket,
      title: "Career Growth",
      subtitle: "Discover job opportunities and advance your tech career.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#D9D9D9]">
      {/* Top container with message - matching CommunityGuidelines style */}
      <section className="py-14 w-full bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-center">
        <h1 className={`text-depth-shadow text-3xl sm:text-5xl font-extrabold mb-2`}>
          About DevByte
        </h1>
        <p className="text-[#D9D9D9] text-sm sm:text-lg">
          Building the future of tech, one byte at a time.
          Join Us today and be part of the revolution!
        </p>
      </section>

      {/* Mission Statement */}
      <section className="w-[85%] sm:w-[75%] mx-auto my-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-sm sm:text-lg">
          DevByte is committed to fostering a collaborative environment where developers 
          can learn, grow, and build amazing things together. We believe in the power 
          of community-driven development and open-source collaboration.
        </p>
      </section>

      {/* Features Section */}
      <section className={`w-full`}>
        <div className="w-full pt-[1.5rem] flex flex-col justify-center items-center gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="w-[85%] sm:w-[75%] bg-[#2A2F36] flex items-center gap-8 sm:gap-10 px-8 py-6 rounded-xl"
              >
                <Icon size={35} />
                <div className="text-left">
                  <h2 className="font-semibold text-[1rem] sm:text-[1.4rem] mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-sm sm:text-[1rem]">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - matching style with login link */}
        <div className="w-[80%] flex flex-col justify-center items-center gap-3 sm:gap-4 my-20 mx-auto">
          <h2 className="font-semibold text-[1.2rem] sm:text-[1.4rem]">
            Join Our Community
          </h2>
          <p className="text-sm sm:text-[1rem] text-center">
            Ready to be part of something amazing? Sign in to connect
            with fellow developers around the world.
          </p>
          <div className="flex gap-4">
            <Link
              to="/auth/login"
              className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] px-8 py-2 rounded-2xl"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="border border-[#D9D9D9] px-8 py-2 rounded-2xl"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;