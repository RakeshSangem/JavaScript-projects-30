import projects from "./projects.json" assert { type: "json" };
const projectContainer = document.querySelector(".hero");

const createProject = (project) => {
  return project.map(
    (item) => `<div class="project-card">
        <div class="img-container">
          <img src=${item.img} alt=""/>
        </div>
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
      </div>`
  );
  // console.log(html);
  // return html;
};

const projectCard = document.createElement("div");
projectCard.setAttribute("class", "projects-container");
projectCard.innerHTML = createProject(projects);
projectContainer.appendChild(projectCard);
