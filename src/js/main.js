const navMain = document.getElementById('main-nav')
const btnHamburger = document.getElementById('hamburger-button')
const hamburguerLine = document.querySelectorAll(".hamburger-button span")

function toggleLineToX(){
  const isActive = navMain.classList.contains("show-menu")
  if(isActive){
    hamburguerLine[0].style = "transform: rotate(45deg);position: relative;bottom: -8px";
    hamburguerLine[1].style = "opacity: 0";
    hamburguerLine[2].style = "transform: rotate(-45deg);position: relative;bottom: 8px";
  }else if(!isActive){
    hamburguerLine[0].style = "transform: rotate(0deg);position: relative;bottom: 0px";
    hamburguerLine[1].style = "opacity: 1";
    hamburguerLine[2].style = "transform: rotate(0deg);position: relative;bottom: 0px";
  }
}

function toggleShowMenu(){
  if(!navMain.classList.contains("show-menu")){
      navMain.classList.add("show-menu")
      navMain.classList.remove("hide-menu")
    toggleLineToX()
  }else if(navMain.classList.contains("show-menu")){
      navMain.classList.remove("show-menu")
      navMain.classList.add("hide-menu")
    toggleLineToX()
  }
}

btnHamburger.addEventListener("click",toggleShowMenu)