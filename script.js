let total_people;
let total_bill;
let bill_pp;
let tip_pp;
let tip_5;

document.getElementById("tip-5").onclick = function() {
    total_people = document.getElementById("total_customer").value;
    total_bill = document.getElementById("total_bill").value;
    bill_pp = total_bill / total_people;
    tip_pp = (total_bill * 0.05) / total_people;
    //Code below is to display bill and tip
    document.getElementById("display_bill").innerHTML = "$" + bill_pp.toFixed(2);
    document.getElementById("display_tip").innerHTML = "$" + tip_pp.toFixed(2);
}

document.getElementById("tip-10").onclick = function() {
    total_people = document.getElementById("total_customer").value;
    total_bill = document.getElementById("total_bill").value;
    bill_pp = total_bill / total_people;
    tip_pp = (total_bill * 0.10) / total_people;
    //Code below is to display bill and tip
    document.getElementById("display_bill").innerHTML = "$" + bill_pp.toFixed(2);
    document.getElementById("display_tip").innerHTML = "$" + tip_pp.toFixed(2);
}

document.getElementById("tip-15").onclick = function() {
    total_people = document.getElementById("total_customer").value;
    total_bill = document.getElementById("total_bill").value;
    bill_pp = total_bill / total_people;
    tip_pp = (total_bill * 0.15) / total_people;
    //Code below is to display bill and tip
    document.getElementById("display_bill").innerHTML = "$" + bill_pp.toFixed(2);
    document.getElementById("display_tip").innerHTML = "$" + tip_pp.toFixed(2);
}

document.getElementById("tip-20").onclick = function() {
    total_people = document.getElementById("total_customer").value;
    total_bill = document.getElementById("total_bill").value;
    bill_pp = total_bill / total_people;
    tip_pp = (total_bill * 0.20) / total_people;
    //Code below is to display bill and tip
    document.getElementById("display_bill").innerHTML = "$" + bill_pp.toFixed(2);
    document.getElementById("display_tip").innerHTML = "$" + tip_pp.toFixed(2);
}

document.getElementById("resetButton").onclick = function() {
    bill_pp = 0;
    tip_pp = 0;
    //Code below is to display bill and tip
    document.getElementById("display_bill").innerHTML = "$" + bill_pp.toFixed(2);
    document.getElementById("display_tip").innerHTML = "$" + tip_pp.toFixed(2);
}
//add doller sign in display