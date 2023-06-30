const processbtn = document.getElementById("processbtn");
const msgBox = document.getElementById("msgBox");
// processbtn.addEventListener("click",function(){

// });

// processbtn.addEventListener("click", (e) => {
//   if (processbtn.className == "") {
//     processbtn.className = "active";
//     processbtn.innerHTML = "close";
//     msgBox.style.display = "flex";
//   } else if (processbtn.className == "active") {
//     processbtn.className = "";
//     processbtn.innerHTML = "show";
//     msgBox.style.display = "none";
//   }
//   console.log(processbtn.className);
// });

processbtn.addEventListener("click", (event) => {
  if (event.target.className == "") {
    event.target.innerHTML = "close";
    msgBox.style.top = "100px";
  } else if (event.target.className == "active") {
    event.target.innerHTML = "show";
    msgBox.style.top = "-200px";
  }
  event.target.classList.toggle("active");
//   if(event.clientY < 250){
//     event.target.style.width = "100%"
//   }else{
//     event.target.style.width = "fit-content"
//   }
  console.log(event.clientY)
});
