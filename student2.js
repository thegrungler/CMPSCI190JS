companyname3 = "DVD Sales LTD";
address5 = "321 Main St. Valencia, CA 91344";
phonenumber2 = "(555) 257-1234"

var product1 = { name:"The Slammin Salmon", id:"4426", desc:"Comedy about a former boxing champion starting a gourmet restaurant"};
var product2 = { name:"Oppenheimer", id:"88123", desc:"Historical drama about the invention of the atomic bomb"};
var product3 = { name:"Barbie", id:"2400", desc:"Comedy centering around classic kids toys Barbie and Ken"};

var imgurl842 = 'images/'
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
    temp+=makeLinkBar946(myproduct)
    temp+="<img height='500' with='300' src=\""
    temp+=imgurl842+myproduct.id+".jpg\""
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

function makeLinkBar946(product) {
    temp = ""
    temp += "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>"
    temp += ""
    temp += "<!-- Identify your business so that you can collect the payments. -->"
    temp += "<input type='hidden' name='business' value='cmnecessary@my.canyons.edu'>"
    temp += ""
    temp += "<!-- Specify a PayPal Shopping Cart Add to Cart button. -->"
    temp += "<input type='hidden' name='cmd' value='_cart'>"
    temp += "<input type='hidden' name='add' value='1'>"
    temp += ""
    temp += "<!-- Specify details about the item that buyers will purchase. -->"
    temp += "<input type='hidden' name='item_name' value='"+product.name+"'>"
    temp += "<input type='hidden' name='amount' value='9.99'>"
    temp += "<input type='hidden' name='currency_code' value='USD'>"
    temp += ""
    temp += "<!-- Display the payment button. -->"
    temp += "<input type='image' name='submit'"
    temp += "  src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif'"
    temp += "  alt='Add to Cart'>"
    temp += "<img alt='' width='1' height='1'"
    temp += "  src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'>"
    temp += "</form>"
    return temp
}