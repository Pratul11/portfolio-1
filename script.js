function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var icon = document.getElementById("dark-icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "./assests/sun.png";
    }
    else{
      icon.src = "./assests/moon.png";
    }
  }
  var icon = document.getElementById("dark-icon1");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.textContent = "Light Mode";
    }
    else{
      icon.textContent = "Dark Mode";
    }
  }
  