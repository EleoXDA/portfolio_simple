function showContent(contentId) {
  var contentElements = document.getElementsByClassName("content");
  for(var i = 0; i < contentElements.length; i++) {
      if(contentElements[i].id === contentId) {
          contentElements[i].style.display = "block";
      } else {
          contentElements[i].style.display = "none";
      }
  }
  localStorage.setItem('contentId', contentId);
}

document.getElementById('theme-toggle-img').addEventListener('click', function() {
  let root = document.documentElement;
  let themeToggleImage = document.getElementById('theme-toggle-img');
  let profile = document.getElementById('profpic');
  let bgColor = getComputedStyle(root).getPropertyValue('--color-background-light');
  if (bgColor.trim() == '#F2F2F2') {
    root.style.setProperty('--color-background-light', '#000000');
    root.style.setProperty('--color-text-light', '#F2F2F2');
    root.style.setProperty('--color-button-light', '#999999');
    root.style.setProperty('--color-button-text-light', '#000000');
    root.style.setProperty('--color-light-transparent', '#rgba(100,100,100,0.1)');
    themeToggleImage.src = "images/lamp_on.png";
    profile.src = "images/profpicd.png";
    setTimeout(function(){
      themeToggleImage.src = "images/lamp_off.png";}, 500)
    localStorage.setItem('theme', 'dark');
  } else {
    setTimeout(function(){
      root.style.setProperty('--color-background-light', '#F2F2F2');
      root.style.setProperty('--color-text-light', '#000000');
      root.style.setProperty('--color-button-light', '#a5a5a5');
      root.style.setProperty('--color-button-text-light', '#F2F2F2');
      root.style.setProperty('--color-light-transparent', 'rgba(0,0,0,0.1)');
      themeToggleImage.src = "images/lamp_on2.png";
      profile.src = "images/profpicb.png";
    }, 500)
    themeToggleImage.src = "images/lamp_on.png";
    localStorage.setItem('theme', 'light');
  }
});

let tooltip = document.getElementById('tooltip');
let themeToggleImage = document.getElementById('theme-toggle-img');

themeToggleImage.addEventListener('mouseenter', function() {
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
  setTimeout(function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
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
  let contentId = localStorage.getItem('contentId');
  if (theme === 'dark') {
      // Apply dark theme
      root.style.setProperty('--color-background-light', '#000000');
      root.style.setProperty('--color-text-light', '#F2F2F2');
      root.style.setProperty('--color-button-light', '#999999');
      root.style.setProperty('--color-button-text-light', '#000000');
      root.style.setProperty('--color-light-transparent', '#rgba(100,100,100,0.1)');
      themeToggleImage.src = "images/lamp_on.png";
      profile.src = "images/profpicd.png";
  } else {
      // Apply light theme (or default theme)
      root.style.setProperty('--color-background-light', '#F2F2F2');
      root.style.setProperty('--color-text-light', '#000000');
      root.style.setProperty('--color-button-light', '#a5a5a5');
      root.style.setProperty('--color-button-text-light', '#F2F2F2');
      root.style.setProperty('--color-light-transparent', 'rgba(0,0,0,0.1)');
      themeToggleImage.src = "images/lamp_on2.png";
      profile.src = "images/profpicb.png";
  }
  if (contentId) {
      showContent(contentId);
  }
});

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateX(0)";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateX(-50px)";
    }
  });
}, { threshold: 0.1 });

var icon = document.getElementById('fa-code');

icon.addEventListener('mouseover', function() {
  icon.src = "images/google-developers.png";
});

icon.addEventListener('mouseout', function() {
  icon.src = "images/google-developers-muted.png";
});

document.querySelectorAll('.column').forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateX(-10px)";
  section.style.transition = "all 0.1s ease";
  observer.observe(section);
});

window.addEventListener('resize', adjustColumnWidth);

function adjustColumnWidth() {
  var viewportWidth = window.innerWidth;
  var columnElements = document.querySelectorAll('.column');

  columnElements.forEach(function(column) {
    if (viewportWidth >= 1400) {
      column.style.flex = '0 0 65%';
      column.style.maxWidth = '65%';
    } else if (viewportWidth <= 768) {
      column.style.flex = '0 0 100%';
      column.style.maxWidth = '100%';
    } else {
      var percentage = 65 + (1400 - viewportWidth) * (35 / 632);
      column.style.flex = '0 0 ' + percentage + '%';
      column.style.maxWidth = percentage + '%';
    }
  });
}

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


let softContent = `<h2>Software Proficiency</h2>
<div class="category">
<div class="section">
  <h3>Development</h3>
  <ul>
    <li><u>Web Development:</u><ul>Javascript-Typescript (Vue.JS, Node.JS), CSS(Sass, SCSS), HTML</ul></li>
    <li><u>Server-side Scripting:</u><ul>Ruby (Ruby on Rails), PhP (Yii)</ul></li>
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
  </div>
  <hr>
  <div class="section">
  <h3>Design and Database Management</h3>
  <ul>
    <li><u>Prototype tools:</u><ul>Figma, Adobe XD, Sketch</ul></li>
    <li><u>Databases and Database Tools:</u><ul>MySQL, MariaDB, Redis, DB Browser, SQL, SQLite, PostgreSQL, pgAdmin, phpMyAdmin</ul></li>
  </ul>
  </div>
  <hr>
  <div class="section">
  <h3>Command Line, Build Tools, and API Testing</h3>
  <ul>
    <li><u>Command Line Interface (CLI):</u><ul>Bash, Powershell, Command Prompt, Terminal</ul></li>
    <li><u>Build Tools and Package Managers:</u><ul>npm, Yarn, Webpack, Gradle, Maven, Rake</ul></li>
    <li><u>API Testing Tools:</u><ul>Postman</ul></li>
  </ul>
  </div>
  <hr>
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

let projects = `<h2>Projects</h2>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Ace_Hunter_JS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Ace Hunter</h3></a></button>
  <div class="project-description">
    <p> JavaScript card game to find the Ace of Spades card among four cards.
      <a href="https://github.com/EleoXDA/Ace_Hunter_JS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
      <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Javascript, GitHub Actions, GitHub Pages</h6>
      </div>
</div>
<hr>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Quiz_TS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Simple Quiz</h3></a></button>
  <div class="project-description">
    <p>A  Quiz app that randomizes 5 questions and gives you score after quiz is finished.
    <a href="https://github.com/EleoXDA/Quiz_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
  <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
  </div>
</div>
<hr>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Countdown_Timer_TS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Countdown Timer</h3></a></button>
  <div class="project-description">
    <p>An intuitive and user-friendly countdown timer that persists across browser.
    <a href="https://github.com/EleoXDA/Countdown_Timer_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
    <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Calculator_TS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Calculator</h3></a></button>
  <div class="project-description">
    <p>A calculator app without scientific functions that has theme options.
    <a href="https://github.com/EleoXDA/Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
    <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Expense_Tracker_TS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Expense Tracker</h3></a></button>
  <div class="project-description">
    <p>A user-friendly web application that allows users to track their income and expenses.
    <a href="https://github.com/EleoXDA/Socialize_RB" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
    <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>
<hr>
<div class="project-container">
  <button class="project button"><a href="https://eleoxda.github.io/Tip_Calculator_TS/" style="text-decoration: none;" target="_blank"><h3 class="project-name">Tip Calculator</h3></a></button>
  <div class="project-description">
    <p>An interactive tip calculator web application that allows users to input their bill amount, select the desired tip percentage, and choose their currency.
    <a href="https://github.com/EleoXDA/Tip_Calculator_TS" style="text-decoration: underline;" class="hyperlink-in-projects">Link to Repo</a></p>
    <h6 style="font-weight: 500; margin: 1pt;">Tech Stack: HTML, CSS, Typescript, Javascript, GitHub Actions, GitHub Pages</h6>
    </div>
</div>`
document.getElementById('projects').innerHTML = projects;
