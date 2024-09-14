companyname3 = "DVD Sales LTD";
address5 = "321 Main St. Valencia, CA 91344";
phonenumber2 = "(555) 257-1234"

function getHeader() {
    var data ="<h3 style='text-align:right'>";
    var now = new Date();
    data+=" "+now.toLocaleString();
    data+="</h3>"
    data+= "<table style='width:100%'><tr style='background-color:#0c0a26'><td >";
    data +="<h1 style='text-align:center'>";
    data+=companyname3;
    data +="</h1>"
    data+="</td></tr></table>";
    return(data);
}

function getFooter() {
    var data = "<table style='width:100%' ><tr style='background-color:#0c0a26'><td>";
    data +="<p style='text-align:center;font-size:10px'><b>Copyright 2024 ";
    data +=companyname3;
    data +=", "+navigator.appName;
    data +=", "+navigator.appVersion;
    data +=", "+navigator.platform;
    data +="<br>";
    data +=address5;
    data +="<br>";
    data+=phonenumber2;
    data +="</b></p>";
    data +="</td></tr></table>";
    return(data);
} 

function makeMenu4(size) {
    var temp = "My Menu: "
    for (var i = 0; i < size; i++) {
        temp+="Button "
    }
    return(temp);
}

function makeMain7() {
    var temp = "My product: <br>"
    temp+="Product Name: <br>"
    temp+="Product ID: <br>"
    temp+="Product Description: <br>"
    temp+="Shopping Cart Link Bar <br>"
    temp+="Product Image: <br>"
    return(temp);
}