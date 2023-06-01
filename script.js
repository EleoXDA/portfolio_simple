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
    root.style.setProperty('--color-button-light', '#a5a5a5');
    root.style.setProperty('--color-button-text-light', '#F2F2F2');

  } else {
    root.style.setProperty('--color-background-light', '#F2F2F2');
    root.style.setProperty('--color-text-light', '#000000');
    root.style.setProperty('--color-button-light', '#999999');
    root.style.setProperty('--color-button-text-light', '#000000');
  }
});