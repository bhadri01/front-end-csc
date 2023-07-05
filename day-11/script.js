function MenuChange(index) {
//   const menu = document.getElementById("nav");
//   const menuChild = menu.children;

//   for (var i = 0; i < menuChild.length; i++) {
//     menuChild[i].className = "";
//   }

//   menuChild[index].className = "active";
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const menu = document.getElementById("nav").children;
  const content = document.getElementsByClassName("content");
  console.log("window current position:", scrollPosition);

  for (var i = 0; i < content.length; i++) {
    var offTop = content[i].getBoundingClientRect().top;
    console.log(i, ":", offTop);
    if (offTop <= 250) {
      for (var j = 0; j < menu.length; j++) {
        menu[j].className = "";
      }
      menu[i].className = "active";
    }
  }
});
