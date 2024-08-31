var the_name = "Collin Necessary";
var my_info = "cs190 Javascript Lab 2";
var value2 = 488;
var currnum = 1;
var custtype = "direct";

function confirmlink251(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
  } 

function displayinfo286() {
    alert(the_name+"\n"+my_info+"\n"+value2);
  }

function changetype350() {
  var temp = "";
  if (custtype == "direct") {
    temp = "advertising";
  }
  if (custtype == "advertising") {
    temp = "subscription";
  }
  if (custtype == "subscription") {
    temp = "direct";
  }
  custtype = temp;
  document.getElementById("customerType").innerHTML = "<h3>Customer type: "+custtype+"</h3>"
}

function displaytype721() {
  if (custtype == "direct") {
    alert("Buy Now! From this web page! My children need new shoes!");
  }
  if (custtype == "advertising") {
    alert(" Support our advertisers! Click on an ad, so I can make money!");
  }
  if (custtype == "subscription") {
    alert("Renew your subscription today! My children need medicine!");
  }
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

function getName273() {
  var name = prompt("What is your name?");
  var message = "Your name is: "+name;
  if (name.length < 5) message+=" You have a short name";
  else if (name.length < 10) message+=" You have a medium name";
  else message+= "You have a long name";
  document.getElementById("name273").innerHTML = message;
}

function getAge234() {
  var age = prompt("What is your age?");
  var message = "Your age is: "+age;
  if (age < 18) message+=" You are a kid";
  else if (age < 50) message+=" You are an adult";
  else message+=" You are a senior citizen";
  document.getElementById("age234").innerHTML = message;
}