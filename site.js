function toggle(){
    var x = document.getElementById('myNavigation');
    if(x.className === "navigation"){
      x.className += " toggled";
    }else {
      x.className = "navigation";
    }
  }