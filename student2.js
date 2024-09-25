companyname3 = "DVD Sales LTD";
address5 = "321 Main St. Valencia, CA 91344";
phonenumber2 = "(555) 257-1234"

var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"};
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"};
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};

var imgurl842 = 'https://www.college1.com/images/'
var cardimgurl547 = "https://www.college1.com/images/cards/gbCard"
var cardnum224 = -1;
var stack = new Array(5);

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
    var temp = "<span><strong>Menu: </strong>"
    for (var i = 0; i < size; i++) {
        temp +="<button "
        temp +="onClick=\"Javascript:execButton733(product"
        temp +=(i+1)
        temp +=")\""
        temp +=">Product #"+(i+1)+"</button>"
    }
    temp += "<button onClick=\"Javascript:dealCards833()\">Deal Cards</button>"
    temp += "<button onClick=\"Javascript:hitCard487()\">Hit</button>";
    temp += "</span>"
    return(temp);
}

function execButton733(product) {
    document.getElementById("main925").innerHTML = makeMain7(product)
} 

function makeMain7(myproduct) {
    cardnum224 = -1;
    var temp = "<strong>My product:</strong> <br><br>"
    temp+="Product Name: <strong>"+myproduct.name+"</strong><br>"
    temp+="Product ID: <strong>"+myproduct.id+"</strong><br>"
    temp+="Product Description: <strong>"+myproduct.desc+"</strong><br>"
    temp+="Shopping Cart Link Bar <br>"
    temp+="<img src=\""
    temp+=imgurl842+myproduct.id+".gif\""
    temp+="><br>"
    return(temp);
}

function dealCards833() {
    cardnum224 = 2;
    var card_number = Math.floor((Math.random()*52))
    var temp = ""
    for (var i = 1; i<=cardnum224; i++) {
        temp += "<img id=\"card"+i+"\" src=\""+cardimgurl547+card_number+".gif\">"
        stack[(i-1)] = card_number;
        do {
            card_number = Math.floor((Math.random()*52));
        } while (stack.includes(card_number));
    } 
    for (var i = cardnum224+1; i <= 5; i++) {
        temp += "<img id=\"card"+i+"\" src=\""+cardimgurl547+"52"+".gif\">"
    }
    console.log(stack);
    document.getElementById("main925").innerHTML = temp;
}

function hitCard487() {
    if (cardnum224 == 5) return;
    cardnum224+=1;
    temp = document.getElementById("main925").innerHTML
    var card_number;
    do {
        card_number = Math.floor((Math.random()*52));
    } while (stack.includes(card_number))
    document.getElementById(("card"+cardnum224)).src = cardimgurl547+card_number+".gif"
}