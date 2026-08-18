import type { IconType } from "react-icons" // this value should be a React icon component from react-icons. This imports only a TypeScript type, not real JavaScript code.
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { SiInstagram, SiX } from "react-icons/si"

export type SocialLink = {
  name: string
  href: string
  Icon: IconType
}

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/pranav_kr__7/",
    Icon: SiInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pranavkr7/",
    Icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/krpranav7",
    Icon: FaGithub,
  },
  {
    name: "Email",
    href: "mailto:pranavkr9416@gmail.com",
    Icon: MdEmail,
  },
  {
    name: "X",
    href: "https://x.com/Pranavkr9416",
    Icon: SiX,
  },
]