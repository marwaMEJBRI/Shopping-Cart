var element = document.querySelectorAll(".fa-heart")
for (i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function(event) {
        if (this.style.color != "red") {
            this.style.color = "red";
        } else {
            this.style.removeProperty('color');
        }
    });
}

var btnPlus = document.querySelectorAll('.fa-plus-circle');
var total = document.getElementById("Total");
let Prix = document.querySelectorAll(".prix");
for (let i = 0; i < btnPlus.length; i++) {
    const price = Prix[i].innerText
    btnPlus[i].addEventListener('click', function() {
        this.nextElementSibling.innerText = parseInt(this.nextElementSibling.innerText) + 1;
        if (this.nextElementSibling.innerText > 1) {
            Prix[i].innerText = parseInt(Prix[i].innerText) + parseInt(price);
        }
        total.innerText = parseInt(total.innerText) + parseInt(price);
    });
}

var btnMoins = document.querySelectorAll('.fa-minus-circle');
for (let i = 0; i < btnMoins.length; i++) {
    const price = Prix[i].innerText
    btnMoins[i].addEventListener('click', function() {
        if (this.previousElementSibling.innerText > 0) {
            this.previousElementSibling.innerText = parseInt(this.previousElementSibling.innerText) - 1;
        }
        if (this.previousElementSibling.innerText == 0) {
            total.innerText = 0;
        }
        if (this.previousElementSibling.innerText > 0) {
            Prix[i].innerText = parseInt(Prix[i].innerText) - parseInt(price);
            total.innerText = parseInt(total.innerText) - parseInt(price);
        }
    });
}

var Delete = document.querySelectorAll(".fa-times");
for (let i = 0; i < Delete.length; i++) {
    Delete[i].addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
}