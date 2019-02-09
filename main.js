/***JavaScript***/

function myFunction() {
  var x = document.getElementById("top-navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}


/* Button Clicked */
document.getElementById('buttonControl').onclick = function() {
    alert('Good Choice My Friend');
};