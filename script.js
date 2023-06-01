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