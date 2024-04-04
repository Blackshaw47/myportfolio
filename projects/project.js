const Projects = [
  {
    name: "Hostel Room Allocation App",
    about:
      "Hostel Room Allocation App is an Application developed for logical allocation of hostel rooms based on students characteristics and behaviour. It uses random forest classifier.",
    img: "images/3.jpg",
    
    tech_stack:
      "Android | XML | Java | Postman | Github | Firebase | PyCharm | Jupyter | Kaggle | Python",
    tech_stackicons: [
      `<img src="https://icons8.com/icon/17836/android-os.png" height="48px" width="48px"/>`,
      `<img src="https://icons8.com/icon/56039/xml" height="48px" width="48px"/>`,
      `<img src="https://icons8.com/icon/13679/java" height="48px"  width="48px"/>`,
      `<img src="https://icons8.com/icon/pIJdjOoL6KfU/python.png" width="48px"/>`,
      `<img src="https://icons8.com/icon/QEQQKirln6Tf/postman-api.png" width="48px"/>`,
      `<img src="https://icons8.com/icon/12599/github" width="48px"/>`,
      `<img src="https://icons8.com/icon/62452/firebase" width="48px"/>`,
      `<img src="https://icons8.com/icon/vinpBD5oA3b4/pycharm" width="48px"/>`,
      `<img src="https://icons8.com/icon/J0SgMWzAxqFj/jupyter" width="48px"/>`,
      `<img src="https://icons8.com/icon/bMncK0wGFANA/kaggle" width="48px"/>`,
    ],
   
  },
  {
    name: "Generating Images Using Neural Style Transfer",
    about:
      "A Project which creates a new creative image using a base image and a style image. It has been trained on the Deep Learning model, VGGNET which is based on the Imagenet dataset",
    img: "https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/613ebc713d78bd6d64e763b8_IJBbdBDp67rtR1bfd0GVlcu5kQIIOX5ExT3I8w7f7UGV90_-SwP-lOfF61k6Npq_4SqPiXnQnVgRXwFmNe8c0OctDfb0p_ScrJGWNkgu7S1UKZmk_BsYb-_C11OGXciC8IjqMfO2%3Ds0.png",
   
    tech_stack: "Jupyter | Kaggle | VGGNet | Neural Network | Deep Learning  | Python",
    tech_stackicons: [
      `<img src="https://icons8.com/icon/J0SgMWzAxqFj/jupyter" width="48px"/>`,
      `<img src="https://icons8.com/icon/bMncK0wGFANA/kaggle" width="48px"/>`,
      `<img src="https://icons8.com/icon/103110/mind-map" width="48px"/>`,
      `<img src="https://icons8.com/icon/61864/artificial-intelligence" width="48px"/>`,
      `<img src="https://icons8.com/icon/u5cBN2YgFqn5/deep-learning" width="48px"/>`,
      `<img src="https://icons8.com/icon/pIJdjOoL6KfU/python" width="48px"/>`,
    ],
    
  },
  {
    name: "Urban Traffic State Prediction Based on LSTM",
    about:
      " It predicts the Urban traffic using Long Short-Term Memory. It uses historical data based on the weather, holidays and other traffic affecting measures.",
    img: "images/3.jpg",
    
    tech_stack: "Recurrent Neural Network | Forecasting | Python | Deep Learning",
    tech_stackicons: [
      `<img src="https://icons8.com/icon/61864/artificial-intelligence" width="48px"/>`,
      `<img src="https://icons8.com/icon/u5cBN2YgFqn5/deep-learning" width="48px"/>`,
      `<img src="https://icons8.com/icon/pIJdjOoL6KfU/python" width="48px"/>`,
      `<img src="https://icons8.com/icon/zrpHUHfKXm3A/forecasting" width="48px"/>`,
    ],
    
  },
  {
    name: "HealthCare App",
    about:
      "An HealthCare Application made for helping elderly people with their health issues. Made using XML and Java. It consists of various aspects like emergency help, home checkup, hospitals nearby, online consultation, etc.",
    img: "images/2.png",
    gitrepo: "https://github.com/omkar111196/Healthcare-App",
    tech_stack:
      "Android | XML | Java | Postman | Github | Firebase ",
    tech_stackicons: [
      `<img src="https://icons8.com/icon/17836/android-os" width="48px"/>`,
      `<img src="https://icons8.com/icon/56039/xml" width="48px"/>`,
      `<img src="https://icons8.com/icon/13679/java" width="48px"/>`,
      `<img src="https://icons8.com/icon/QEQQKirln6Tf/postman-api" width="48px"/>`,
      `<img src="https://icons8.com/icon/12599/github" width="48px"/>`,
      `<img src="https://icons8.com/icon/62452/firebase" width="48px"/>`,
      
    ],
    
  },
  {
    name: "Home Automation System",
    about:
      "A Home Automation System has been designed using Node MCU and Blynk app.for second year minor project.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIsT527_tXo1tIPWyrkaRGaGZaerJ_ELVprFhQPQX3Q&s",
    tech_stack: "IOT | C | Electronics | Embedded",
    tech_stackicons: [
      `<img src="https://icons8.com/icon/1bVDgc9r21ji/iot" width="48px"/>`,
      `<img src="https://icons8.com/icon/111021/c" width="48px"/>`,
      `<img src="https://icons8.com/icon/1581/electronics" width="48px"/>`,
      `<img src="https://icons8.com/icon/UE1jvmAZ42VT/embedded" width="48px"/>`,
    ],
    
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ""}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ""}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ""}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ""}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ""}
      </span>
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
