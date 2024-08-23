var the_name = "Collin Necessary";
var my_info = "cs190 Javascript Lab 2";
var value2 = 488;

function confirmlink251(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
  } 

  function displayinfo286() {
    alert(the_name+"\n"+my_info+"\n"+value2);
  }