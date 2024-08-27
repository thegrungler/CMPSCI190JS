var the_name = "Collin Necessary";
var my_info = "cs190 Javascript Lab 2";
var value2 = 488;
var currnum = 1;

function confirmlink251(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
  } 

function displayinfo286() {
    alert(the_name+"\n"+my_info+"\n"+value2);
  }

function displayspecial447() {

    if (currnum == 1) {
     alert("The current special is #1");
    }
    if (currnum == 2)  {
     alert("The current special is #2");
    }
    if (currnum == 3 )  {
     alert("The current special is #3");
    }
    currnum = currnum + 1;
    if (currnum > 3) {
    currnum = 1 ;  // wrap around
    }
 
 }