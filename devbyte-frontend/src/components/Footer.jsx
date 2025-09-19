import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import CommunityLogo from "../assets/logos/IMG_20250811_164020_018-Photoroom.png";

const Footer = () => {
  const pages = [
    { href: "/", name: "Home" },
    { href: "/event", name: "Event" },
    { href: "/learning", name: "Learning Hub" },
    { href: "/projects", name: "Projects" },
    { href: "/jobs", name: "Jobs" },
    { href: "/blog", name: "Blog" },
  ];

  const legalAndSupport = [
    { href: "/contact", name: "Contact Us" },
    { href: "/policy", name: "Private Policy" },
    { href: "/terms", name: "Terms of Service" },
  ];

  const sites = [
    { href: "https://github.com/DevByte-Community", name: FaGithub },
    { href: "https://www.linkedin.com/company/devbyte-community/posts/?feedView=all", name: FaLinkedin },
    { href: "/terms", name: FaXTwitter },
  ];

  return (
    <div className={` bg-[#161B22] text-[#D9D9D9] pt-20 pb-16 sm:pb-10 border-t border-[#D9D9D9]`}>
      <div className=" flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-evenly pb-16 sm:pb-10">
        {/* Logo */}
        <div>
          <img
            src={CommunityLogo}
            alt="Community logo"
            className={`w-40 h-auto mb-2`}
          />
          <p className={`text-[0.8rem]`}>DevByte: Learn, Collaborate, Grow.</p>
        </div>

        <div className="flex gap-[8rem] sm:gap-[3rem] md:gap-[8rem] mt-10 mb-16 sm:my-0">
            {/* Navigation Link */}
        <div className="flex flex-col justify-start items-start gap-1">
          <h2 className="text-[#fff] font-medium">Navigation Link</h2>
          {pages.map((page, index) => (
            <Link key={index} to={page.href} >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Legal & support */}
        <div className="flex flex-col justify-start items-start gap-1">
          <h2 className="text-[#fff] font-medium">Legal & support</h2>
          {legalAndSupport.map((page, index) => (
            <Link key={index} to={page.href}>
              {page.name}
            </Link>
          ))}
        </div>
        </div>

        

        {/* Websites */}
        <div className=" ">
          <h2 className="text-[#fff] mb-2 font-medium">Legal & support</h2>
          <div className="flex justify-evenly">
            {sites.map((site, index) => {
              const IconComponent = site.name;

              return (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size="22" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className={`text-sm`}>
        ©2025 DevByte. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
