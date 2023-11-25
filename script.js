function calculateCPC() {
    var cost = document.getElementById("cost").value;
    var clicks = document.getElementById("clicks").value;

    if (clicks != 0) {
        var cpc = cost / clicks;
        document.getElementById("result").innerText = "Your CPC is: " + cpc.toFixed(2);
    } else {
        alert("Clicks cannot be zero.");
    }
}
