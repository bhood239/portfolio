import Project from "./Project";

const projects = [
  {
    title: "Readr",
    description:
      "Readr is a full-stack web application built using React, Ruby-on Rails and PostgreSQL that allows users to find, review and browse their favorite books and follow other's progress.",
    screenshots: [
      "/projects/readr/home.png",
      "/projects/readr/dashboard.png",
      "/projects/readr/search.png",
      "/projects/readr/profile.png",
      "/projects/readr/ben_profile.png",
      "/projects/readr/want_to_read.png",
    ],
  },
  {
    title: "Photolabs",
    description:
      "Photolabs is a photo app built using React, Node.js, Express and PostgreSQL to allow users to explore and save photos.",
    screenshots: [
      "/projects/photolabs/home.png",
      "/projects/photolabs/people.png",
      "/projects/photolabs/modal.png",
      "/projects/photolabs/favs.png",
    ],
  },
  {
    title: "Jungle",
    description:
      "E-commerce website selling exotic plants, built using Ruby-on-Rails, PostgreSQL and the Stripe API for payments. Testing implemented using R-Spec.",
    screenshots: [
      "/projects/jungle/home.png",
      "/projects/jungle/products.png",
      "/projects/jungle/sold_out.png",
      "/projects/jungle/cart.png",
    ],
  },
  {
    title: "Wikimaps",
    description:
      "Wikimaps is a real-time web app utilizing the Google Maps API to allow users to view and share and their favourite locations. Built using JQuery, EJS, Express.js, Node.js and PostgreSQL.",
    screenshots: [
      "/projects/wikimaps/home.png",
      "/projects/wikimaps/logged_in_modal.png",
      "/projects/wikimaps/modal.png",
      "/projects/wikimaps/profile.png",
    ],
  },
  {
    title: "Scheduler",
    description:
      "Scheduling web app allowing students to schedule appointments with mentors in real-time. Built using React, Axios and SASS. Testing implemented using Jest and Cypress.",
    screenshots: [
      "/projects/scheduler/home.png",
      "/projects/scheduler/hover.png",
      "/projects/scheduler/new.png",
      "/projects/scheduler/edit.png",
      "/projects/scheduler/delete.png",
    ],
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Projects I have been working on:
      </h1>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          screenshots={project.screenshots}
        />
      ))}
    </div>
  );
}
