function showContent(contentId) {
  var contentElements = document.getElementsByClassName("content");
  for(var i = 0; i < contentElements.length; i++) {
      if(contentElements[i].id === contentId) {
          contentElements[i].style.display = "block";
      } else {
          contentElements[i].style.display = "none";
      }
  }
}

document.getElementById('theme-toggle').addEventListener('click', function() {
  let root = document.documentElement;
  let bgColor = getComputedStyle(root).getPropertyValue('--color-background-light');
  if (bgColor.trim() == '#F2F2F2') {
    root.style.setProperty('--color-background-light', '#000000');
    root.style.setProperty('--color-text-light', '#F2F2F2');
    root.style.setProperty('--color-button-light', '#999999');
    root.style.setProperty('--color-button-text-light', '#000000');
    root.style.setProperty('--color-light-transparent', '#rgba(100,100,100,0.1)');

  } else {
    root.style.setProperty('--color-background-light', '#F2F2F2');
    root.style.setProperty('--color-text-light', '#000000');
    root.style.setProperty('--color-button-light', '#a5a5a5');
    root.style.setProperty('--color-button-text-light', '#F2F2F2');
    root.style.setProperty('--color-light-transparent', 'rgba(0,0,0,0.1)');
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

document.querySelectorAll('.column').forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateX(-50px)";
  section.style.transition = "all 1s ease";
  observer.observe(section);
});

let homeContent = `
    <h2>About Me</h2>
    <p>As a detail-oriented and versatile software developer, I have honed my skills in both the development and testing phases of web and mobile applications. With a proven background in QA, my expertise spans across multiple testing frameworks including RSpec, Widget Tester and Jest.
      <br>My pursuit of knowledge and technical skills led me to Le Wagon Coding Bootcamp, a transformative experience that certified me as a Web Developer. This immersive program introduced me to a variety of programming languages, such as Ruby on Rails, JavaScript, and CSS, effectively preparing me for a dynamic career in the tech industry. Upon completion of the bootcamp, I took up a freelance role as a Junior Developer with XDA-Developers, leveraging my newly acquired skills to develop web, Android, and cross-platform applications.
      <br>Furthering my career, I embraced the opportunity to work as a Junior Cross-Platform Developer with koviko GmbH. During this tenure, I spearheaded the development of a German language learning app using Flutter/Dart, demonstrating my ability to work with cross-platform mobile frameworks and languages. Additionally, my role involved using the PHP backend with the Yii framework and performing application testing using Widget Tester, ultimately consolidating my experience in project management and software development.
      <br>In summary, my career journey has been characterized by continuous learning, versatility, and a commitment to excellence. With my extensive skills in software development, testing, and project management, I am eager to contribute to a new position as a Software Developer or Tester, where I can continue to ensure the delivery of high-quality software solutions.
    </p>
`;

document.getElementById('home').innerHTML = homeContent;


let experienceContent = `<h2>Experience</h2>
<div>
  <h3>Junior Cross-Platform Developer at koviko GmbH</h3>
  <p>Responsible for building a cross-platform app for learning German language using Flutter/Dart and PHP backend with Yii framework.</p>
</div>
<div>
  <h3>Junior Developer at XDA-Developers</h3>
  <p>Worked on Web, Android, and cross-platform app development using Ruby (on Rails), JavaScript, Typescript and Flutter.</p>
</div>
<div>
  <h3>Research Assistant/Project Responsible at Friedrich Schiller University of Jena</h3>
  <p>Increased effectivity of CPU and GPU preparation on silicon chips. Managed project budget for 30 months and increased cost effectivity by 15%. Demonstrated strong writing skills in original correspondence and reports.</p>
</div>
<div>
  <h3>Junior Mobile Developer at recruiT</h3>
  <p>Modified mobile android applications using Kotlin and smali language. Tested applications using JUnit, adapted the app for fur. Prepared, rewrote, and edited parts of apps' user interfaces using UI/UX tools.</p>
</div>
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
<div>
  <h3>Master of Science: Micro and Nanotechnology</h3>
  <p>Development of silicon chips and MEMS devices for automated testing.</p>
</div>
<div>
  <h3>Bachelor of Science: Biology</h3>
  <p>Basics of scientific research - introduction to general scientific applications</p>
</div>`

document.getElementById('education').innerHTML = educationContent;


let prlangContent = `<h2>Programming Languages</h2>
<br> - HTML
<br> - CSS
<br> - JavaScript
<br> - Dart
<br> - Ruby 
<br> - TypeScript
<br> - PHP
<br> - Kotlin
</p>` 
document.getElementById('prlang').innerHTML = prlangContent;


let softContent = `<h2>Software Proficiencies</h2>
<p>
  <br> - Visual Studio Code 
  <br> - Visual Studio 
  <br> - IntelliJ IDEA 
  <br> - Android Studio 
  <br> - Git 
  <br> - GitHub 
  <br> - GitLab 
  <br> - Bitbucket 
  <br> - Figma 
  <br> - Adobe XD 
  <br> - Prototype tools 
  <br> - DB Browser 
  <br> - SQL 
  <br> - SQLite 
  <br> - PostgreSQL
</p>` 
document.getElementById('soft').innerHTML = softContent;


let testContent = `<h2>Testing Frameworks</h2>
<p>
  <br> - JesT 
  <br> - Jasmine 
  <br> - Mocha 
  <br> - RSpec 
  <br> - Widget Tester 
  <br> - JUnit 
  <br> - Espresso
</p>` 
document.getElementById('test').innerHTML = testContent;


let agileContent = `<h2>Agile Methods</h2>
<p>
  <br> - Kanban 
  <br> - Jira 
  <br> - Scrum
</p>` 
document.getElementById('agile').innerHTML = agileContent;


let langContent = `<h2>Language Proficiencies</h2>
<p>
  <br> - English (C1) 
  <br> - Turkish (Native) 
  <br> - Azerbaijani (Native) 
  <br> - Russian (B2) 
  <br> - German (B1)
</p>`
document.getElementById('lang').innerHTML = langContent;
