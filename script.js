/* eslint-disable linebreak-style */
const openMenu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.item');
const menuCont = document.querySelector('.menu-items');
const closeMenu = document.querySelector('.close');
const contactForm = document.getElementById('contact-me-form');

function openMobMenu() {
  menuCont.classList.add('menu-open');
}
openMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
closeMenu.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});

// Project pop up section
const projects = [
  {
    mobileImage: 'src="images/ConferenceHomePage.png" alt="mobile-project1"',
    desktopImage: 'src="images/ConferenceHomePage.png" alt="Desktop-project1"',
    name: 'World Health Organization Conference',
    jobDescription: {
      company: 'Microverse',
      role: 'FullStack Dev',
      year: '2022',
    },
    description:
      'The Seventy-fifth World Health Assembly is the decision-making body of WHO. It is attended by delegations from all WHO member states on a specific health agenda.',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://alusp.github.io/World-Health-Assembly/',
    sourceCode: 'https://github.com/Alusp/World-Health-Assembly',
  },
  {
    mobileImage: 'src="images/AwesomeBookHomePage.png" alt="mobile-project2"',
    desktopImage: 'src="images/AwesomeBookHomePage.png" alt="Desktop-project2"',
    name: 'Awesome Books',
    jobDescription: {
      company: 'Microverse',
      role: 'FullStack Dev',
      year: '2022',
    },
    description:
      'Awesome Book is a simple web project that displays a user\'s book library and allows the user to add and remove books from the library.',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://alusp.github.io/AwsomebookWithES6/',
    sourceCode: 'https://github.com/Alusp/AwsomebookWithES6',
  },
  {
    mobileImage: 'src="images/markedTodo.png" alt="mobile-project3"',
    desktopImage: 'src="images/markedTodo.png" alt="Desktop-project3"',
    name: 'Todo App',
    jobDescription: {
      company: 'Microverse',
      role: 'FullStack Dev',
      year: '2022',
    },
    description:
      'TODO-LIST is a project that is base on the ability to create a list of things you want to do throughout the day. with add Remove Feature with Interactive list.',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://alusp.github.io/ToDolist/?',
    sourceCode: 'https://github.com/Alusp/ToDolist',
  },
  {
    mobileImage: 'src="images/bgdesktop5.png" alt="mobile-project4"',
    desktopImage: 'src="images/bgdesktop5.png" alt="Desktop-project4"',
    name: 'Meals Restaurant',
    jobDescription: {
      company: 'Microverse',
      role: 'Software Developer',
      year: '2022',
    },
    description:
      'A Single Page Application which shows the meals from MealsDB API and used the Involvement API to record the comments and Likes for each meal.',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://alusp.github.io/meals-capstone-project/',
    sourceCode: 'https://github.com/Alusp/meals-capstone-project',
  },
];
const portfolios = document.querySelector('#Portfolio');
projects.forEach((project, id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('containerr');
  innerProject.innerHTML = `
    <img class="projetc-image" ${project.mobileImage} alt="mobile image">
    <img class="dprojectimage" ${project.desktopImage} alt="desktop image">
    <div class="details project${id}">
      <h2 class="Project-Title">${project.name}</h2>
      <article class="experience">
          <span class="title">${project.jobDescription.company}</span>
          <span class="year"> &nbsp;&nbsp; &#8226; &nbsp;&nbsp; ${project.jobDescription.role} &nbsp;&nbsp; &#8226; &nbsp;&nbsp;${project.jobDescription.year}</span>
      </article>
      <p class="description">${project.description}</p>
      <ul class="stacks">
        <li class="language">${project.languages[0]}</li>
        <li class="language">${project.languages[1]}</li>
        <li class="language">${project.languages[2]}</li>
      </ul>
      <button class='btn see-project' type="button">see projects</button>
    </div>
    `;
  portfolios.appendChild(innerProject);
});

function projectPopup(position) {
  const popup = document.createElement('div');
  popup.innerHTML = `
      <div class="popup-content">
          <h2 class="Project-Title">
             ${projects[position].name}
          </h2>
          <i class="close-icon bi bi-x-lg "></i>
          <img class="project-img" src="images/Portfolio${position + 1}.png"alt="projectimage">

          <ul class="info-top">
            <li class="title">${
  projects[position].jobDescription.company
}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${
  projects[position].jobDescription.role
}&nbsp;&nbsp; &#8226; &nbsp;</li>
            <li class="year gray">${projects[position].jobDescription.year}</li>
          </ul>
          <img class="desktop-img" src="images/Portfolio${
  position + 1
}.png" alt="project tonic homepage test">
          <div class="popup-bottom">
            <p class="project-text">
              ${projects[position].description}
            </p>
            <div class="badges-buttons">
              <ul class="project-languages">
                <li class="language">${projects[position].languages[0]}</li>
                <li class="language">${projects[position].languages[1]}</li>
                <li class="language">${projects[position].languages[2]}</li>
              </ul>
              <div class="popup-buttons">
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="${projects[position].liveLink}">
                          See live &nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-box-arrow-up-right"></i>
                        </a>
                </button>
                <button type="button" class="btn project-button">
                        <a class="btn-live"href="${projects[position].sourceCode}">
                          See Source&nbsp;&nbsp;&nbsp;
                          <i class="btnicon bi bi-github"></i>
                        </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    `;
  popup.classList.add('popup');
  portfolios.appendChild(popup);
}
const projectnBtn = document.querySelectorAll('.see-project');
projectnBtn.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    projectPopup(ind);
    const popup = document.querySelector('.popup');
    document.querySelector('.close-icon').addEventListener('click', () => {
      portfolios.removeChild(popup);
    });
  });
});

// ######################## Contact Form Validation Section #######################
const form = document.querySelector('.forms');
const validateEmail = (email) => {
  if (email !== email.toLowerCase()) return false;
  return true;
};

contactForm.addEventListener('submit', (e) => {
  const EMAIL_INVALID = 'Email should be in lower case only.';
  const displayMsg = document.getElementById('display-msg');
  e.preventDefault();
  if (!validateEmail(contactForm.elements.email.value.trim())) {
    displayMsg.innerText = EMAIL_INVALID;
    displayMsg.style.color = '#ff0000';
  } else {
    displayMsg.innerText = '';
    contactForm.submit();
  }
});

// ############################# Browser Data Storage ###################################
const formData = {
  name: document.querySelector('.form-name').value,
  email: document.querySelector('.form-email').value,
  message: document.querySelector('.form-message').value,
};

let getFormData = window.localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  document.querySelector('.form-name').value = getFormData.name;
  document.querySelector('.form-email').value = getFormData.email;
  document.querySelector('.form-message').value = getFormData.message;
}

Array.from(form).forEach((element) => {
  element.addEventListener('input', () => {
    formData.name = document.querySelector('.form-name').value;
    formData.email = document.querySelector('.form-email').value;
    formData.message = document.querySelector('.form-message').value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
