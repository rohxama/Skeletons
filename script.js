document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      number: "001",
      title: "Welcome Project",
      description:
        "This is a brief description of our first project. Discover our innovative ideas and creative solutions.",
    },
    {
      number: "002",
      title: "Creative Design",
      description:
        "Explore our second project featuring unique design and user-focused development.",
    },
    {
      number: "003",
      title: "Modern Solutions",
      description:
        "Our third project offers modern solutions tailored to meet customer needs.",
    },
  ];

  let currentProjectIndex = 0;

  const projectNumberEl = document.getElementById("project-number");
  const projectTitleEl = document.getElementById("project-title");
  const projectDescriptionEl = document.getElementById("project-description");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  function updateProject() {
    const project = projects[currentProjectIndex];
    projectNumberEl.textContent = project.number;
    projectTitleEl.textContent = project.title;
    projectDescriptionEl.textContent = project.description;
  }

  prevButton.addEventListener("click", () => {
    currentProjectIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject();
  });

  nextButton.addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject();
  });

  updateProject();
});
