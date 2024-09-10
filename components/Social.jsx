import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shrey120" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shrey120/" },
  { icon: <FaTwitter />, path: "https://x.com/_Shreyash_Gupta" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          rel='noopener noreferrer'
          target='_blank'
          key={index}
          href={social.path}
          className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
