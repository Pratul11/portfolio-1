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
  var icon1 = document.getElementById("dark-icon1");
  icon1.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon1.textContent = "Light Mode";
    }
    else{
      icon1.textContent = "Dark Mode";
    }
  }
  // var typed = new typed(".text", {
  //   string:["Frontend Developer","Software Developer"],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   backDelay: 1000,
  //   loop: true
  // });
  