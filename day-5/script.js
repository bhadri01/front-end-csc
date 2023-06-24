var x = 0;
var jsmath = document.getElementById("math");

jsmath.innerHTML = x;

function add() {
  x++;
  jsmath.innerHTML = x;
  if (x >= 1) {
    jsmath.className = "badge text-bg-success";
  } else if (x == 0) {
    jsmath.className = "badge text-bg-primary";
  }
}

function sub() {
  x--;
  jsmath.innerHTML = x;
  if (x < 0) {
    jsmath.className = "badge text-bg-danger";
  } else if (x == 0) {
    jsmath.className = "badge text-bg-primary";
  }
}
