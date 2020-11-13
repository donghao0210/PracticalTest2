
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos) > (currentScrollpos){
      document.getElementById("navi").style.top="0";
    }
    else{
      document.getElementsByClassName("navi").style.top="-100px";
    }

    prevScrollpos = currentScrollpos;
}
