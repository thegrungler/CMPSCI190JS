companyname3 = "DVD Sales LTD";
address5 = "321 Main St. Valencia, CA 91344";
phonenumber2 = "(555) 257-1234"

function getHeader() {
    var data = "<table style='width:100%'><tr style='background-color:#0c0a26'><td >";
    data +="<h1 style='text-align:center'>";
    data+=companyname3;
    data +="</h1></td></tr></table>";
    return(data);
}

function getFooter() {
    var data = "<table style='width:100%' ><tr style='background-color:#0c0a26'><td>";
    data +="<p style='text-align:center;font-size:10px'><b>Copyright 2024 ";
    data +=companyname3;
    data +="<br>";
    data +=address5;
    data +="<br>";
    data+=phonenumber2;
    data +="</b></p>";
    data +="</td></tr></table>";
    return(data);
} 