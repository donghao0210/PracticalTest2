var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navi").style.left = "0";
  } else {
    document.getElementById("navi").style.left = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
