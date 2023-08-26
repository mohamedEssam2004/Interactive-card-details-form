const cardNameInput = document.getElementById("card-name-input");
const cardNumberInput = document.getElementById("card-number-input");

const expireInputMonth = document.getElementById("expMonth");
const expireInputYear = document.getElementById("expYear");
const cvcInput = document.getElementById("cvc");

const cardNumberDisplay = document.querySelectorAll("#card-number-display");
const cardNameDisplay = document.getElementById("name-holder-display");

const expireMonthDisplay = document.getElementById("dateMonth");
const expireYearDisplay = document.getElementById("dateYear");

const cvcDisplay = document.getElementById("cvc-display");


// card name
cardNameInput.addEventListener("input", () => {
    if (cardNameInput.value.length < 1) {
        cardNameDisplay.innerHTML = "Your Name Here!";
    } else if (cardNameInput.value.length > 24) {
        cardNameInput.value = cardNameInput.value.slice(0, 24);
    } else {
        cardNameDisplay.innerHTML = cardNameInput.value;
    }
});

// card number
cardNumberInput.addEventListener("input", () => {
    let input_value = cardNumberInput.value.replace(/\D/g, "");
    cardNumberInput.value = cardNumberInput.value.slice(0, 16);
    if (cardNumberInput.value != input_value) {
        cardNumberDisplay[i].innerHTML = "0";
        return false;
    } else {
        for (let i = 0; i < input_value.length; i++) {
            if (i < cardNumberDisplay.length) {
                cardNumberDisplay[i].textContent = input_value[i];
            } else {
                cardNumberDisplay[i].textContent = "0";
            }
        }
    }
})

// expire date

//month

expireInputMonth.addEventListener("input", () => {
    expireInputMonth.value = expireInputMonth.value.replace(/\D/g, "").slice(0, 2);

    if (expireInputMonth.value.length == 0) {
        return false;
    } else {
        expireMonthDisplay.innerHTML = `${expireInputMonth.value}`;
    }
})

//year
expireInputYear.addEventListener("input", () => {
    expireInputYear.value = expireInputYear.value.slice(0, 2);
    let year_date = expireInputMonth.value.slice(0, 2).replace(/\D/g, "");
    if (expireInputYear.value.length == 0) {
        return false;
    } else {
        expireYearDisplay.innerHTML = `${year_date}`;
    }
});

// cvc number
cvcInput.addEventListener("input", () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, "").slice(0, 3);
    cvcDisplay.innerHTML = cvcInput.value;
})






document.getElementById("formBtn").onclick = function (e) {

    e.preventDefault();

    // name input error
    if (cardNameInput.value.length == 0) {
        cardNameInput.style.borderColor = "var(--red)";
        document.getElementById("nameError").innerHTML = "Can't ba blank";
        return false;
    } else {
        cardNameInput.style.borderColor = "var(--lightGrayish)";
        document.getElementById("nameError").innerHTML = "";
    }


    // number input error
    if (cardNumberInput.value.length == 0) {
        cardNumberInput.style.borderColor = "var(--red)";
        document.getElementById("numberError").style.display = "block";
        document.getElementById("numberError").innerHTML = "Can't be blank";
        return false;
    } else if (cardNumberInput.value != cardNumberInput.value.replace(/\D/g, "")) {
        document.getElementById("numberError").style.display = "block";
        document.getElementById("numberError").innerHTML = "Wrong format, numbers only";
    } else {
        cardNumberInput.style.borderColor = "var(--lightGrayish)";
        document.getElementById("numberError").innerHTML = "";
    }


    // expire month error
    if(expireInputMonth.value.length == 0) {
        expireInputMonth.style.borderColor = "var(--red)";
        document.getElementById("date").innerHTML = "Can't be blank";
        return false;
    } else {
        expireInputMonth.style.borderColor = "var(--lightGrayish)";
        document.getElementById("date").innerHTML = "";
    }

    // expire year error
    if (expireInputYear.value.length == 0) {
        expireInputYear.style.borderColor = "var(--red)";
        document.getElementById("date").innerHTML = "Can't be blank"
        return false;
    } else {
        expireInputYear.style.borderColor = "var(--lightGrayish)";
        document.getElementById("date").innerHTML = "";
    }

    // cvc error
    if (cvcInput.value.length == 0) {
        cvcInput.style.borderColor = "var(--red)";
        document.getElementById("cvcError").innerHTML = "Can't be blank"
        return false
    } else {
        cvcInput.style.borderColor = "var(--lightGrayish)";
        document.getElementById("date").innerHTML = "";
    }



    document.getElementById("form").style.display = "none";
    document.querySelector(".complete").style.display = "block";

}

document.getElementById("completeBtn").onclick = function (e) {
    window.location.reload();
}