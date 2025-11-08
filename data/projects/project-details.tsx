export type ProjectDetails = {
  name: string;
  pageLink: string;
  tags: string[];
  date: string;
  description: string;
  clientProject: boolean;
  cost?: string;
  turnaround?: string;
  clientCameFrom?: string;
  designTeam?: string;
  projectImageUrls: string[];
  moreProjectPreviews: string[];
};

export const allProjectDetails: ProjectDetails[] = [
  {
    name: "Axtionable",
    pageLink: "axtionable",
    tags: ["web", "uiux"],
    date: "April 2025",
    description:
      "Personalized job matches, real HR connections, and no time wasted - just the right opportunities for you.",
    clientProject: true,
    cost: "Private",
    turnaround: "2 weeks",
    clientCameFrom: "Outreach",
    designTeam: "Kaialan and Rabi",
    projectImageUrls: [
      "https://images.ctfassets.net/xsgwjwcuxltx/3mMy2UN16OfHnC0qUIYTiE/eb8d686d14d918125841c6af1e0f21ee/axtionable_screen_-_1.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/2uAjiS44IwtjArk0kUuEMI/2d7a044731eba88d021197c865528a92/axtionable_screen_-_2.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/1JVuiZmJHCFWO61OgosKFX/1b7634aed4a2fdf246bb6017a8c621f4/axtionable_screen_-_3.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/4jE3veOqk8IvxT5G25tRwF/fcfeae169815b1b09a9df35c03300e9f/axtionable_screen_-_4.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/lcB4RJQw2XxPZIspDLWcD/ed4b495451d77e5a822a9d21b7ff3038/axtionable_screen_-_5.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/31QGvMwtNbd8Mb6cpGC9jl/8a47204983eaa0defed8ce8648b49c48/axtionable_screen_-_6.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/6vRpiULFgxX6fMbFn6bgA2/b68cb5319c405ed944b209d36cb8f3db/axtionable_screen_-_7.png",
      "https://images.ctfassets.net/xsgwjwcuxltx/7JmcWdNK1ekErNo8n8ljhf/83e17746623aed16c85df9d49a3535f8/axtionable_screen_-_8.png",
    ],
    moreProjectPreviews: ['ax-for-employers', 'portfolio-alex', 'weather-card-widgets']
  },
];
