export type Project = {
  name: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    name: "my cloud menu",
    description: "A cloud-based menu solution for restaurants",
    url: "https://www.linkedin.com/company/mycloudmenu",
  },
  {
    name: "robotic nation",
    description: "A company specializing in robotic process automation (RPA)",
    url: "https://www.linkedin.com/company/roboticnation",
  },
  {
    name: "weather app",
    description: "A simple weather forecasting application",
    url: "https://weatherglto.vercel.app/",
  },
  {
    name: "robinlearns",
    description: "A platform for learning and sharing knowledge",
    url: "https://learnglto.vercel.app/",
  },
  {
    name: "portfolio",
    description: "My personal portfolio showcasing my work",
    url: "https://robinlabs.xyz",
  },
];
