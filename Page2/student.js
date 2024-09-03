function makeHeader() {
    var data = "<table style='width:100%'><tr style='background-color:#0c0a26'><td >";
    data +="<h1 style='text-align:center'>BetterThanAmazon - Product Description Page</h1>";
    data +="</td></tr></table>";
    return(data);
}

function makeFooter() {
    var data = "<table style='width:100%' ><tr style='background-color:#0c0a26'><td>";
    data +="<p style='text-align:center;font-size:10px'><b>Copyright 2024 BetterThanAmazon</b></p>";
    data +="</td></tr></table>";
    return(data);
}  

function makeName(param) {
    var data = "<strong>Product name: ";
    data+=param;
    data+="</strong>";
    return(data)
}

function makeID(param) {
    var data = "<strong>Product ID: ";
    data+=param;
    data+="</strong>";
    return(data)
}

function makeDescription(param) {
    var data = "<strong>Product description: "
    data+=param;
    data+="</strong>";
    return(data);
}

function makeImage(param) {
    var data = "<img src='../images/"
    data += param;
    data += ".png'>";
    return(data);
}

function makeLinkbar(param) {
    var data = "<table style='background-color:lightblue' cellpadding=5><tr><td>";
    data += "<a href='https://cs190.grungler.com?prodID=";
    data += param;
    data += "'>Add to Cart</a></td>";
    data += "<td><a href='https://cs190.grungler.com'>View Cart</a></td>";
    data += "<td><a href='https://cs190.grungler.com'>Check out</a></td>";
    data += "</tr></table >";
    return(data);
} 