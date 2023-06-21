import portfolioImg01 from "../images/portfolio-01.JPG";
import portfolioImg02 from "../images/portfolio-02.JPG";
import portfolioImg03 from "../images/portfolio-03.JPG";
import portfolioImg04 from "../images/portfolio-04.JPG";
import portfolioImg05 from "../images/portfolio-05.JPG";
import portfolioImg06 from "../images/portfolio-06.JPG";
import portfolioImg07 from "../images/portfolio-07.JPG";
import portfolioImg08 from "../images/portfolio-08.JPG";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "KPMG",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/kpmg_16585998066470/Dashboard1",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "TAXI",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/TAXI_16407057427560/Dashboard1",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title:" USAID",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/USAID_16583377693100/Dashboard1",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Covid-19 Dashboard",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/DASHBOARDCOVID-19_16404294938070/Dashboard2",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Flight Arangement",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/flights_16364188838570/Dashboard1",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Map of Vaccinated",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/MAPOFCOUNTRIESTHATAREFULLYVACCINATED/MAPOFCOUNTRIESTHATAREFULLYVACCINATED",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Regional Grouping",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/TOTALCUMMULATEDCASESPERREGION/TOTALCUMMULATEDCASESPERREGION",
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Covid-19 Analysis ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "",
  },
  {
    id: "09",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/kpmg_16585998066470/Dashboard1",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "Flight Analysis",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/flights_16364188838570/Dashboard1",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Taxi Analysis",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/TAXI_16407057427560/Dashboard1",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Covid 19 dashboard",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/DASHBOARDCOVID-19_16404294938070/Dashboard2",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Map of Fully Vacinated",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/MAPOFCOUNTRIESTHATAREFULLYVACCINATED/MAPOFCOUNTRIESTHATAREFULLYVACCINATED",
  },
  
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "ux",
    title: "Resturant Rating Dashboard ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/resturantratingdashboard/Dashboard3",
  },

  {
    id: "14",
    imgUrl: portfolioImg08,
    category: "ux",
    title: "Covid 19 Analysis ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://public.tableau.com/app/profile/adetunji.philip/viz/covid-19Analysis_16404286264320/Dashboard2",
  },
];

export default portfolios;
