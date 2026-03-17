import type {
  NavBarLink,
  Identity,
  HomePageContent,
} from "../types/config";

export const identity: Identity = {
  name: "Alexander Andreev",
  logo: "/favicon.svg", // We'll just use a generic or simple logo
  email: "andreev.al@gmail.com",
};

export const openGraphImage: string = "";
export const googleSiteVerification: string = "";
export const measurementId: string = "";

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/schaufenster/",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Alexander Andreev | Portfolio",
    description:
      "Portfolio of Alexander Andreev, Full-Stack Developer & Data Scientist.",
    image: openGraphImage,
    domain: "lexandree.github.io",
    url: "https://lexandree.github.io/schaufenster",
  },
  role: "Full-Stack Developer & Data Scientist",
  company: "",
  description:
    "Full-Stack Developer & Data Scientist. I build production-ready ML systems, conduct rigorous data science research, and develop robust software solutions.",
  socialLinks: [],
  homeSocialLinks: [],
  links: [],
};
