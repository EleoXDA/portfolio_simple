function handleClick(e, contentId) {
  e.preventDefault(); // This prevents the default action, i.e., navigating to "#"
  showContent(contentId);
}

function showContent(contentId) {
  const contentElements = document.getElementsByClassName("content");
  for(var i = 0; i < contentElements.length; i++) {
      if(contentElements[i].id === contentId) {
          contentElements[i].style.display = "block";
      } else {
          contentElements[i].style.display = "none";
      }
  }
  localStorage.setItem('contentId', contentId);
}

function adjustColumnWidth() {
  const viewportWidth = window.innerWidth;
  const columnElements = document.querySelectorAll('.column');
  const modalContent = document.querySelector('.modal-content');

  columnElements.forEach(function(column) {
    if (viewportWidth >= 1000) {
      column.style.flex = '0 0 850px';
      column.style.maxWidth = '850px';
      modalContent.style.flex = '0 0 750px';
      modalContent.style.maxWidth = '750px';
    } else if (viewportWidth <= 768) {
      column.style.flex = '0 0 100%';
      column.style.maxWidth = '720px';
      modalContent.style.flex = '0 0 90%';
      modalContent.style.maxWidth = '620px';
    } else {
      const width = 720 /*width below 768px*/ + (viewportWidth - 768) * 130 /*900-720*/ / 232 /*1000-768*/;
      column.style.flex = '0 0 ' + width + 'px';
      column.style.maxWidth = width + 'px';
      modalContent.style.flex = '0 0 ' + width - 100 + 'px';
      modalContent.style.maxWidth = width - 100 + 'px';
    }
  });
}

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById('theme-toggle-img').addEventListener('click', function() {
  let root = document.documentElement;
  let themeToggleImage = document.getElementById('theme-toggle-img');
  let profile = document.getElementById('profpic');
  let xdaicon = document.getElementById('xda');
  let codewarsicon = document.getElementById('codewars');
  let googledevicon = document.getElementById('googledev');
  let statcounterDigit = document.getElementById('statcounter-digit');
  let bgColor = getComputedStyle(root).getPropertyValue('--color-background');
  if (bgColor.trim() == '#F2F2F2') {
    root.style.setProperty('--color', '#FFFFFF');
    root.style.setProperty('--color-background', '#000000');
    root.style.setProperty('--color-text', '#F2F2F2');
    root.style.setProperty('--color-button', '#a9a9a9');
    root.style.setProperty('--color-transparent', 'rgba(256,256,256,0.3)');
    root.style.setProperty('--color-button-text-transparent', 'rgba(0,0,0,0.7)');
    themeToggleImage.src = "images/lamp_on.png";
    profile.src = "images/profpicd.png";
    xdaicon.src = "images/xda-muted.png";
    codewarsicon.src = "images/codewars-muted.png";
    statcounterDigit.classList.add('negative-image');
    googledevicon.src = "images/google-developers-muted.png";
    setTimeout(function(){
      themeToggleImage.src = "images/lamp_off.png";}, 500)
    localStorage.setItem('theme', 'dark');
  } else {
    setTimeout(function(){
      root.style.setProperty('--color', '#000000');
      root.style.setProperty('--color-background', '#F2F2F2');
      root.style.setProperty('--color-text', '#000000');
      root.style.setProperty('--color-button', '#888888');
      root.style.setProperty('--color-transparent', 'rgba(0,0,0,0.3)');
      root.style.setProperty('--color-button-text-transparent', 'rgba(256,256,256,0.7)');
      themeToggleImage.src = "images/lamp_on2.png";
      profile.src = "images/profpicb.png";
      xdaicon.src = "images/xda-muted-light.png";
      codewarsicon.src = "images/codewars-muted-light.png";
      statcounterDigit.classList.remove('negative-image');
      googledevicon.src = "images/google-developers-muted-light.png";}, 500)
    themeToggleImage.src = "images/lamp_on.png";
    localStorage.setItem('theme', 'light');
  }
});

let tooltip = document.getElementById('tooltip');
let themeToggleImage = document.getElementById('theme-toggle-img');

themeToggleImage.addEventListener('mouseenter', function() {
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
  tooltip.style.transition = "all 0.25s ease-in";
  setTimeout(function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'all 0.4s ease';
  }, 2500);
});

themeToggleImage.addEventListener('mouseleave', function() {
  setTimeout(function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
  let theme = localStorage.getItem('theme');
  let root = document.documentElement;
  let themeToggleImage = document.getElementById('theme-toggle-img');
  let profile = document.getElementById('profpic');
  let xdaicon = document.getElementById('xda');
  let codewarsicon = document.getElementById('codewars');
  let googledevicon = document.getElementById('googledev');
  let statcounterDigit = document.getElementById('statcounter-digit');
  let contentId = localStorage.getItem('contentId');
  if (theme === 'dark') {
      // Apply dark theme
      root.style.setProperty('--color', '#F2F2F2');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#F2F2F2');
      root.style.setProperty('--color-button', '#a9a9a9');
      root.style.setProperty('--color-transparent', 'rgba(256,256,256,0.3)');
      root.style.setProperty('--color-button-text-transparent', 'rgba(0,0,0,0.7)');
      themeToggleImage.src = "images/lamp_off.png";
      profile.src = "images/profpicd.png";
      xdaicon.src = "images/xda-muted.png";
      codewarsicon.src = "images/codewars-muted.png";
      googledevicon.src = "images/google-developers-muted.png"
      statcounterDigit.classList.add('negative-image');
  } else {
      // Apply light theme (or default theme)
      root.style.setProperty('--color', '#000000');
      root.style.setProperty('--color-background', '#F2F2F2');
      root.style.setProperty('--color-text', '#000000');
      root.style.setProperty('--color-button', '#888888');
      root.style.setProperty('--color-transparent', 'rgba(0,0,0,0.3)');
      root.style.setProperty('--color-button-text-transparent', 'rgba(256,256,256,0.7)');
      themeToggleImage.src = "images/lamp_on2.png";
      profile.src = "images/profpicb.png";
      xdaicon.src = "images/xda-muted-light.png";
      codewarsicon.src = "images/codewars-muted-light.png";
      googledevicon.src = "images/google-developers-muted-light.png"
      statcounterDigit.classList.remove('negative-image');
  }
  if (contentId) {
      showContent(contentId);
  }
});

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    } else {
      entry.target.style.opacity = "0";
    }
  });
}, { threshold: 0 });

document.querySelectorAll('.column').forEach(section => {
  section.style.opacity = "0";
  section.style.transition = "opacity 0.73s ease";
  observer.observe(section);
});

const googledevicon = document.getElementById('googledev');
const xdaicon = document.getElementById('xda');
const codewarsicon = document.getElementById('codewars');

googledevicon.addEventListener('mouseover', function() {
  googledevicon.src = "images/google-developers.png";
});

googledevicon.addEventListener('mouseout', function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    googledevicon.src = "images/google-developers-muted.png";
  } else {
    googledevicon.src = "images/google-developers-muted-light.png";
  }
});

xdaicon.addEventListener('mouseover', function() {
  xdaicon.src = "images/xda.png";
});

xdaicon.addEventListener('mouseout', function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    xdaicon.src = "images/xda-muted.png";
  } else {
    xdaicon.src = "images/xda-muted-light.png";
  }
});

codewarsicon.addEventListener('mouseover', function() {
  codewarsicon.src = "images/codewars.png";
});

codewarsicon.addEventListener('mouseout', function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    codewarsicon.src = "images/codewars-muted.png";
  } else {
    codewarsicon.src = "images/codewars-muted-light.png";
  }
});

window.addEventListener('resize', adjustColumnWidth);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

let modal = document.getElementById("myModal");
let btns = document.querySelectorAll(".project.button");
let span = document.getElementsByClassName("close")[0];
let projectLinkBtn = document.getElementById("project-link-btn");
let repoLinkBtn = document.getElementById("repo-link-btn"); // New line
let readmeContent = document.getElementById("readme-content");

document.body.addEventListener('click', function(e) {
  const btn = e.target.closest(".project.button");
  if(btn) {
    modal.style.display = "block";
    projectLinkBtn.href = btn.dataset.projectLink;
    repoLinkBtn.href = btn.dataset.repoLink;
    let parts = btn.dataset.projectLink.split('/');
    let projectName = parts[parts.length - 2];
    let repoUrl = `https://github.com/EleoXDA/${projectName}`;
    repoLinkBtn.href = repoUrl;

    fetchReadme(btn.dataset.projectLink);

    projectLinkBtn.onclick = function() {
      window.open(this.href);
    }
    fetchReadme(btn.dataset.projectLink);
    projectLinkBtn.onclick = function() {
      window.open(this.href);
    }
    repoLinkBtn.onclick = function() {
      window.open(this.href);
    }
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let converter = new showdown.Converter();

function fetchReadme(projectLink) {
  let parts = projectLink.split('/');
  let projectName = parts[parts.length - 2];
  let branch = projectName === "portfolio" ? "gh-pages" : "master";
  let url = `https://raw.githubusercontent.com/EleoXDA/${projectName}/${branch}/README.md`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      let html = converter.makeHtml(data); // This line converts markdown to HTML
      readmeContent.innerHTML = html;
    })
    .catch((error) => {
      console.error('Error:', error);
      readmeContent.innerHTML = "Error loading README";
    });
}

window.onscroll = function() {scrollFunction()};

adjustColumnWidth();

let homeContent = `<h2>About Me</h2>
<p>As a detail-oriented and versatile software developer, I have honed my skills in both the development and testing phases of web and mobile applications. With a proven background in QA, my testing expertise spans across multiple testing frameworks including RSpec, Widget Tester Jest and etc; my development expertise spans across mobile development (Kotlin, Flutter) and Web development (Javascript, Typescript, Ruby and etc).   
</p><hr><p>My pursuit of knowledge and technical skills led me to Le Wagon Coding Bootcamp, a transformative experience that certified me as a Web Developer. This immersive program introduced me to a variety of programming languages, such as Ruby on Rails, JavaScript, and CSS, effectively preparing me for a dynamic career in the tech industry. Upon completion of the bootcamp, I took up a freelance role as a Junior Developer with XDA-Developers, leveraging my newly acquired skills to develop web, Android, and cross-platform applications.
</p><hr><p>Furthering my career, I embraced the opportunity to work as a Junior Cross-Platform Developer with koviko GmbH. During this tenure, I spearheaded the development of a German language learning app using Flutter/Dart, demonstrating my ability to work with cross-platform mobile frameworks and languages. Additionally, my role involved using the PHP backend with the Yii framework and performing application testing using Widget Tester, ultimately consolidating my experience in project management and software development.
</p><hr><p>In summary, my career journey has been characterized by continuous learning, versatility, and a commitment to excellence. With my extensive skills in software development, testing, and project management, I am eager to contribute to a new position, where I can continue to ensure the delivery of high-quality software solutions.
</p>`;
document.getElementById('home').innerHTML = homeContent;

let experienceContent = `<h2>Experience</h2>
<div>
  <h3>Junior Cross-Platform Developer at koviko GmbH</h3>
  <p>Responsible for building a cross-platform app for learning German language using Flutter/Dart and PHP backend with Yii framework.</p>
</div>
<hr>
<div>
  <h3>Junior Developer at XDA-Developers</h3>
  <p>Worked on Web, Android, and cross-platform app development using Ruby (on Rails), JavaScript, Typescript and Flutter.</p>
</div>
<hr>
<div>
  <h3>Research Assistant/Project Responsible at Friedrich Schiller University of Jena</h3>
  <p>Increased effectivity of CPU and GPU preparation on silicon chips. Managed project budget for 30 months and increased cost effectivity by 15%. Demonstrated strong writing skills in original correspondence and reports.</p>
</div>
<hr>
<div>
  <h3>Junior Mobile Developer at recruiT</h3>
  <p>Modified mobile android applications using Kotlin and smali language. Tested applications using JUnit, adapted the app for fur. Prepared, rewrote, and edited parts of apps' user interfaces using UI/UX tools.</p>
</div>
<hr>
<div>
  <h3>MSc. Researcher/Project Responsible at Middle East Technical University</h3>
  <p>Involved in silicon chip manufacturing and MEMS for automated testing. Validated incoming data to check information accuracy and integrity while locating and correcting concerns. Published research and review papers in peer-reviewed scientific journals.</p>
</div>`
document.getElementById('experience').innerHTML = experienceContent;

let educationContent = `<h2>Education</h2>
<div>
  <h3>Le Wagon Coding Bootcamp - Web Development</h3>
  <p>9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, 
    <br>JavaScript ES6, SQL, Git, GitHub, Heroku and Ruby on Rails.</p>
</div>
<hr>
<div>
  <h3>Master of Science: Micro and Nanotechnology</h3>
  <p>Development of silicon chips and MEMS devices for automated testing.</p>
</div>
<hr>
<div>
  <h3>Bachelor of Science: Biology</h3>
  <p>Basics of scientific research - introduction to general scientific applications.</p>
</div>`
document.getElementById('education').innerHTML = educationContent;


let softContent = `<h2 id='softh2'>Software Proficiency</h2>
<hr id='softhr'>
<div class="category">
<div class="section">
  <h3>Development</h3>
  <ul>
    <li><u>Web Development:</u><ul>Javascript-Typescript (Vue.JS, Node.JS), CSS(Sass, SCSS), HTML</ul></li>
    <li><u>Server-side Scripting:</u><ul>Ruby (Ruby on Rails), PHP (Yii)</ul></li>
    <li><u>Mobile Development:</u><ul>Kotlin (Ktor), Dart (Flutter)</ul></li>
    <li><u>Agile Development:</u><ul>Kanban, Jira, Scrum</ul></li>
  </ul>
  <hr>
  </div>
  <div class="section">
  <h3>Testing and Version Control</h3>
  <ul>
    <li><u>Test Frameworks:</u><ul>Javascript(Jest, Jasmine, Mocha), Ruby (RSpec), Flutter (Widget Tester), Kotlin (JUnit, Espresso), PHP (PHPUnit), Web (Selenium)</ul></li>
    <li><u>Integrated Development Environments (IDEs):</u><ul>Visual Studio Code, IntelliJ IDEA, Android Studio</ul></li>
    <li><u>Version Control Systems (VCS):</u><ul>Git (Platforms: GitHub, GitLab, Bitbucket)</ul></li>
  </ul>
  <hr>
  </div>
  <div class="section">
  <h3>Design and Database Management</h3>
  <ul>
    <li><u>Prototype tools:</u><ul>Figma, Adobe XD, Sketch</ul></li>
    <li><u>Databases and Database Tools:</u><ul>MySQL, MariaDB, Redis, DB Browser, SQL, SQLite, PostgreSQL, pgAdmin, phpMyAdmin</ul></li>
  </ul>
  <hr>
  </div>
  <div class="section">
  <h3>Command Line, Build Tools, and API Testing</h3>
  <ul>
    <li><u>Command Line Interface (CLI):</u><ul>Bash, Powershell, Command Prompt, Terminal</ul></li>
    <li><u>Build Tools and Package Managers:</u><ul>npm, Yarn, Webpack, Gradle, Maven, Rake</ul></li>
    <li><u>API Testing Tools:</u><ul>Postman</ul></li>
  </ul>
  <hr>
  </div>
  <div class="section">
  <h3>Containerization, Cloud, and Continuous Integration</h3>
  <ul>
    <li><u>Containerization and Virtualization Tools:</u><ul>Docker, VMWare</ul></li>
    <li><u>Cloud Platforms:</u><ul>Google Cloud, AWS (novice)</ul></li>
    <li><u>Continuous Integration/Continuous Deployment (CI/CD) Tools:</u><ul>Jenkins, GitHub Actions</ul></li>
  </ul>
  </div>
</div>
</div>
</div>` 
document.getElementById('soft').innerHTML = softContent;

let langContent = `<h2>Language Proficiency</h2>
<p> - English (C2) 
  <br> - Turkish (Native) 
  <br> - Azerbaijani (Native) 
  <br> - Russian (B2) 
  <br> - German (B1)
</p>`
document.getElementById('lang').innerHTML = langContent;

let projects = `<h2 style="margin-bottom: 0px;">Projects</h2>
<h6 style="font-weight: 500; margin-top: 0px; margin-bottom: 20px;"><br>For more information on code, documentation and execution of each project, please <span style="text-decoration:underline;">click the button on the left side</span>.</h6>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Ace_Hunter_JS/"><h3 class="project-name">Ace Hunter</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A card game to find the Ace of Spades card among four cards.
      <a target="_blank" href="https://github.com/EleoXDA/Ace_Hunter_JS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
      <br>Tech Stack: HTML, CSS, Javascript, GitHub Actions, GitHub Pages</h6>
      </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Quiz_TS/"><h3 class="project-name">Quiz</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A  Quiz app that asks 5 random questions.
    <a target="_blank" href="https://github.com/EleoXDA/Quiz_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
  </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Countdown_Timer_TS/"><h3 class="project-name">Timer</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A countdown timer app.
    <a target="_blank" href="https://github.com/EleoXDA/Countdown_Timer_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Calculator_TS/"><h3 class="project-name">Calculator</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A calculator app.
    <a target="_blank" href="https://github.com/EleoXDA/Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Expense_Tracker_TS/"><h3 class="project-name">Expense Tracker</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A budget tracker to count your expenses.
    <a target="_blank" href="https://github.com/EleoXDA/Socialize_RB" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button" data-project-link="https://eleoxda.github.io/Tip_Calculator_TS/"><h3 class="project-name">Tip Calculator</h3></button>
  <div class="project-description">
  <h6 style="font-weight: 500; margin: 1pt;">A tip calculator for extreme cases.
    <a target="_blank" href="https://github.com/EleoXDA/Tip_Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
<button class="project button" data-project-link="https://eleoxda.github.io/portfolio/"><h3 class="project-name">My Portfolio</h3></button>
<div class="project-description">
<h6 style="font-weight: 500; margin: 1pt;">The source code to this beautiful and responsive wesbite.
    <a target="_blank" href="https://github.com/EleoXDA/portfolio" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a>
    <br>Tech Stack: HTML, CSS, Javascript, GitHub Actions, GitHub Pages, Web Hosting</h6>
    </div>
</div>`
document.getElementById('projects').innerHTML = projects;

let skills = `<h2 id='softh2'>Skills and Tools</h2>
<hr id='softhr'>
<div>
<table>
  <thead>
    <tr>
      <th>Languages and Frameworks</th>
    </tr>
  </thead>
  <tbody>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/><br>JavaScript</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/><br>TypeScript</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/><br>Node. JS</td>
   <td><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"/><br>Vue. JS</td>
   <td><img src="images/react.svg"/><br>React. JS</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"/><br>Svelte</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/><br>CSS</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/><br>Bootstrap</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/><br>HTML</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"/><br>Dart</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"/><br>Flutter</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"/><br>Kotlin</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"/><br>Ruby</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"/><br>Rails</td>
   <td><img src="images/php.svg"/><br>PHP</td>
   <td><img src="images/yii.svg"/><br>Yii</td>
   <td><img src="images/mongodb.svg"/><br>MongoDB</td>
   <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"/><br>PostgreSQL</td>
  </tbody>
</table>
<hr id='softhr'>
<table>
  <thead>
    <tr>
      <th>Tools and Software</th>
    </tr>
  </thead>
  <tbody>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"/><br>WebPack</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"/><br>Heroku</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/><br>Figma</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/><br>Git</td>
  <td><img src="images/github.svg"/><br>GitHub</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"/><br>GitLab</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"/><br>Android Studio</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"/><br>IntelliJ</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"/><br>VSCode</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"/><br>Visual Studio</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"/><br>Vim</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"/><br>Google Cloud</td>
  <td><img src="images/codepen.svg"/><br>CodePen</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/><br>Docker</td>
  <td><img src="images/postman.svg"/><br>Postman</td>
  <td><img src="images/xampp.svg"/><br>XAMPP</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"/><br>ESLint</td>
  <td><img src="images/gradle.svg"/><br>Gradle</td>
  <td><img src="images/jenkins.svg"/><br>Jenkins</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"/><br>JetBrains</td>
  <td><img src="images/scrum.svg"/><br>Scrum</td>
  <td><img src="https://user-images.githubusercontent.com/27622683/192119213-9a958b20-d3ba-460e-935f-dccb6a3de7e6.png"/><br>Kanban</td>
  <td><img src="images/tdd.png"/><br>T.D.D.</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"/><br>Jira</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"/><br>Yarn</td>
  <td><img src="images/bash.svg"/><br>Bash</td>
  <td><img src="images/markdown.svg"/><br>Markdown</td>
</tbody>
</table>
<hr id='softhr'>
<table>
  <thead>
    <tr>
      <th>Operating Systems</th>
    </tr>
  </thead>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"/><br>Windows</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/><br>Linux</td>
  <td><img src="images/mac.svg"/><br>MacOS</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"/><br>Android</td>
  <td><img src="images/ios.svg"/><br>iOS</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"/><br>Ubuntu</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg"/><br>Debian</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg"/><br>Fedora</td>
  <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"/><br>ChromeOS</td>
</tbody>
</table>
<hr id='softhr'>
</div>`
document.getElementById('skills').innerHTML = skills;