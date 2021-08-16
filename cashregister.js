var billAmount = document.querySelector("#billAmount");

var amountPaid = document.querySelector("#amountPaid");

var btnCheck = document.querySelector("#btnCheck");

var changeTable = document.querySelector("#changeTable");

var output = document.querySelector("#output");

var note2000 = document.querySelector("#note2000");

var note500 = document.querySelector("#note500");

var note100 = document.querySelector("#note100");

var note20 = document.querySelector("#note20");

var note10 = document.querySelector("#note10");

var note5 = document.querySelector("#note5");

var note1 = document.querySelector("#note1");





// var checkEvent = function(){
//     console.log(billAmount.value, amountPaid.value)
// }

btnCheck.addEventListener( "click", function(){
    var amountToReturn = amountPaid.value - billAmount.value
    console.log(amountToReturn);
    output.textContent= ""
    if (amountToReturn < 0) {
        output.textContent="Paid amount must be greater than or equal to bill amount"
        return 
    } 
    if (amountToReturn >= 2000) {
        var noOf2000Notes = Math.trunc(amountToReturn/2000)
        note2000.textContent = noOf2000Notes

        amountToReturn = amountToReturn % 2000

    } else {
        note2000.textContent = 0
    }

    if (amountToReturn >= 500) {
        var noOf500Notes = Math.trunc(amountToReturn/500)
        note500.textContent = noOf500Notes

        amountToReturn = amountToReturn % 500
    } else {
        note500.textContent = 0
    }

    if (amountToReturn >= 100) {
        var noOF100Notes = Math.trunc(amountToReturn / 100)
        note100.textContent = noOF100Notes

        amountToReturn = amountToReturn % 100

    } else {
        note100.textContent = 0
    }

    if (amountToReturn >=20) {
        var noOf20Notes = Math.trunc(amountToReturn / 20)
        note20.textContent = noOf20Notes

        amountToReturn = amountToReturn % 20

    } else {
        note20.textContent = 0
    }


    if (amountToReturn >=10) {
        var noOf10Notes = Math.trunc(amountToReturn / 10)
        note10.textContent = noOf10Notes

        amountToReturn = amountToReturn % 10

    } else {
        note10.textContent = 0
    }

    if (amountToReturn >=5) {
        var noOf5Notes = Math.trunc(amountToReturn / 5)
        note5.textContent = noOf5Notes

        amountToReturn = amountToReturn % 5
        

    } else {
        note5.textContent = 0
    }

    if (amountToReturn >=1) {
        var noOf1Notes = Math.trunc(amountToReturn / 1)
        note1.textContent = noOf1Notes
        console.log(noOf1Notes)


    } else {
        note1.textContent = 0
    }
})
