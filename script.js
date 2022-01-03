document.getElementsByTagName("h1")[0].style.fontSize = "3vw";


window.onload = () => {
    let button = document.querySelector(".btn");

    // Function for calculating BMI
    button.addEventListener("click", myFunction());
};

function myFunction() {
    let height = parseInt(document
        .querySelector("#qad").value);

    let weight = parseInt(document
        .querySelector("#vazn").value);

    let result = document.querySelector(".AnswerBox");

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) /
            10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
            `Normal : <span>${bmi}</span>`;

        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}