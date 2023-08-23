function toggleMode(){
  const html = document.documentElement
  
  //pegar a tag img
  const img = document.querySelector("#profile img")
  
  //substituir a imagem
  if (!html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto de Kennedy Sorrindo");
    
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto de Kennedy tocando piano")
  }

  html.classList.toggle("light")
};