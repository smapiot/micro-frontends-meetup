export const siteName = "Micro Frontends";
export const siteDescription =
  "Micro Frontends Meetup to gather the community and share knowledge.";
export const siteNameMulti = ["Micro", "Frontends"];
export const repoUrl = "https://github.com/smapiot/micro-frontends-meetup";
export const meetupUrl = "https://www.meetup.com/microfrontends/";
export const legalUrl = "/legal-disclaimer";
export const imprintUrl = "/imprint";
export const year = new Date().getFullYear();
export const navigation = [
  {
    name: "Meetups",
    route: "/meetups",
  },
  {
    name: "Checklist",
    route: "/checklist",
  },
  {
    name: "Code of Conduct",
    route: "/code-of-conduct",
  },
];
export const meetups = [
  {
    title: "August 2023",
    date: "2023-08-17",
    image: 'https://secure.meetupstatic.com/photos/event/5/8/3/3/600_514642579.webp?w=384',
    time: {
      CET: "5pm",
      PST: "8am",
      IST: "8:30pm",
      ACST: "12:30am",
    },
    url: "https://www.meetup.com/microfrontends/events/295008188/",
    video: "https://www.youtube.com/watch?v=MN35_drIchE",
    description:
      "For this edition we invited two guests to show how they implemented frontend modularity and scalability into their projects and products. They will talk about their experience and why certain decisions have been relevant for their journey.",
    guests: [
      "Fatima AMZIL, Angular Frontend Tech Lead at OXYGEN TS",
      "Manuel Römer, Software Engineer at smapiot",
    ],
  },
  {
    title: "July 2023",
    date: "2023-07-13",
    image: 'https://secure.meetupstatic.com/photos/event/6/6/5/b/600_513866203.webp?w=384',
    time: {
      CET: "5pm",
      PST: "8am",
      IST: "8:30pm",
      ACST: "12:30am",
    },
    url: "https://www.meetup.com/microfrontends/events/294348865/",
    video: "https://www.youtube.com/watch?v=ulgDjQuLq5k",
    description:
      "For this edition we invited two guests to share their journey into micro frontends. They will talk about their specific requirements, challenges, and achievements they crossed on their road towards scalable web development.",
    guests: [
      "Benjamin Schwendner, Product Architect at Axinom",
      "Dimitri Renault, CEO of Mekom Solution",
    ],
  },
];
