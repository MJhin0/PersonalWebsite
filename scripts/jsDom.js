var updateChecking = function() {
    var checkingId = document.getElementById("checkingBalance");
    console.log(checkingId);
    cBalance = checkingId.innerHTML;
    console.log(cBalance);
    cBalance = parseInt(cBalance, 10);
    cBalance += 100;
    checkingId.innerHTML = cBalance;
}

var updateSavings = function() {
    var savingsId = document.getElementById("savingsBalance");
    console.log(savingsId);
    sBalance = savingsId.innerHTML;
    console.log(sBalance);
    sBalance = parseInt(sBalance, 10);
    if (sBalance == 0) {
        document.getElementById("bankAccountTitle").innerHTML="Alert: Savings Empty";
    }
    sBalance += 100;
    savingsId.innerHTML = sBalance;
}


var emptySavings = function() {
    document.getElementById("savingsBalance").innerHTML=0;
    document.getElementById("bankAccountTitle").innerHTML="Alert: Savings Empty";
}