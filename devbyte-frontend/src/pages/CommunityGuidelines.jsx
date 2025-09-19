import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaGlobe,
  FaScrewdriverWrench,
  FaLock,
  FaDesktop,
  FaBan,
} from "react-icons/fa6";

const CommunityGuidelines = () => {
  const guidelines = [
    {
      icon: FaHandshake,
      title: "Respect Everyone",
      subtitle: "Treat all members with kindness and empathy.",
    },
    {
      icon: FaGlobe,
      title: "Stay Inclusive",
      subtitle: "Embrace diversity and be open to different perspectives.",
    },
    {
      icon: FaScrewdriverWrench,
      title: "Constructive Collaboration",
      subtitle: "Work together to build a supportive community.",
    },
    {
      icon: FaBan,
      title: "No Spam or Self-Promotion",
      subtitle: "Avoid posting unsolicited advertisements or links.",
    },
    {
      icon: FaLock,
      title: "Protect Privacy",
      subtitle: "Safeguard personal information and respect confidentiality.",
    },
    {
      icon: FaDesktop,
      title: "Follow Open Source Etiquette",
      subtitle: "Respect licenses and contribute positively.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#D9D9D9]">

      {/* Top container with message */}
      <section className="py-14 w-full bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] ">
        <h1
          className={`text-depth-shadow text-3xl sm:text-5xl font-extrabold mb-2`}
        >
          Community Guidelines
        </h1>
        <p className="text-[#D9D9D9] text-sm sm:text-lg">
          Our shared values for an inclusive and respectful community.
        </p>
      </section>

      {/* Guidelines Section */}
      <section className={`w-full`}>
        <div className=" w-full pt-[1.5rem] flex flex-col justify-center items-center gap-6">
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon;

            return (
              <div
                key={index}
                className="w-[85%] sm:w-[75%] bg-[#2A2F36] flex items-center gap-8 sm:gap-10 px-8 py-6 rounded-xl"
              >
                <Icon size={35} />
                <div className="text-left">
                  <h2 className="font-semibold text-[1rem] sm:text-[1.4rem] mb-4">
                    {guideline.title}
                  </h2>
                  <p className="text-sm sm:text-[1rem]">{guideline.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Report Violations */}
        <div className="w-[80%] flex flex-col justify-center items-center gap-3 sm:gap-4 my-20 mx-auto">
          <h2 className="font-semibold text-[1,2rem] sm:text-[1.4rem]">
            Report Violations
          </h2>
          <p className="text-sm sm:text-[1rem]">
            If you notice behavior that violates these guidelines, report it to
            the moderators via our Contact Page or email.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] px-8 py-2 rounded-2xl"
          >
            Report a violation
          </Link>
        </div>
      </section>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
