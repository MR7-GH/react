document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
function checkShowBox(checkbox,box){
    if(checkbox.checked){
        if(box.classList.contains("display-none"))
            box.classList.remove("display-none");                
    } else {
        if(!box.classList.contains("display-none"))
            box.classList.add("display-none"); 
    }
}
window.onload = () => {
    var video = document.getElementById("myVideo");
    function myFunction() {
    if (video.paused) {
        video.play();
    }
    }
    let height = document.querySelector("#qad");
    let weight = document.querySelector("#vazn");
    let sigar = document.querySelector("#sigar");
    let qelyoon = document.querySelector("#qelyoon");
    qelyoon.addEventListener("click",() =>checkShowBox(qelyoon,document.querySelector("#qelyoon-num")));
    sigar.addEventListener("click",() => checkShowBox(sigar,document.querySelector("#sigar-num")));
    weight.addEventListener("change",myFunction);
    height.addEventListener("change",myFunction); 
    let nextButton = document.querySelector("#nextPageButton");
    nextButton.addEventListener("click",() => {
        if(checkFeilds()){
            let form1 = document.querySelector("#page1");
            let form2 = document.querySelector("#page2");
            document.getElementsByClassName("fill")[0].style.width = "100%";
            form1.classList.add("display-none");
            form2.classList.remove("display-none");
            let sigar = document.querySelector("#sigar");
            let qelyoon = document.querySelector("#qelyoon");
            qelyoon.checked = false;
            sigar.checked = false;
        }
    });
};
function checkFeilds() {
    let ans = true;
    let name = document.querySelector("#inputName").value;
    let familyName = document.querySelector("#inputFamilyName").value;
    let email = document.querySelector("#inputEmail").value;
    let phone = document.querySelector("#inputPhone").value;
    let age = document.querySelector("#sen").value;
    let height = document.querySelector("#qad").value;
    let weight = document.querySelector("#vazn").value;
    let insurance = document.querySelector("#dropdown").value;
    if(name === ""){
        ans = false;
        if(document.querySelector("#name-error").classList.contains("display-none"))
            document.querySelector("#name-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#name-error").classList.contains("display-none"))
            document.querySelector("#name-error").classList.add("display-none");
    }
    if(familyName === ""){
        ans = false;
        if(document.querySelector("#familyName-error").classList.contains("display-none"))
            document.querySelector("#familyName-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#familyName-error").classList.contains("display-none"))
            document.querySelector("#familyName-error").classList.add("display-none");
    }
    if(email === ""){
        ans = false;
        if(document.querySelector("#email-error").classList.contains("display-none"))
            document.querySelector("#email-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#email-error").classList.contains("display-none"))
        document.querySelector("#email-error").classList.add("display-none");
    }
    if(phone === "" || isNaN(phone)){
        ans = false;
        if(document.querySelector("#phone-error").classList.contains("display-none"))
            document.querySelector("#phone-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#phone-error").classList.contains("display-none"))
            document.querySelector("#phone-error").classList.add("display-none");
    }
    if(age === "" || isNaN(age)){
        ans = false;
        if(document.querySelector("#age-error").classList.contains("display-none"))
            document.querySelector("#age-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#age-error").classList.contains("display-none"))
        document.querySelector("#age-error").classList.add("display-none");
    }
    if(height === "" || isNaN(height) || weight == "" || isNaN(weight)){
        ans = false;
        if(document.querySelector("#bmi-error").classList.contains("display-none"))
            document.querySelector("#bmi-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#bmi-error").classList.contains("display-none"))
        document.querySelector("#bmi-error").classList.add("display-none");
    }
    if(insurance == "0" || isNaN(weight)){
        ans = false;
        if(document.querySelector("#insurance-error").classList.contains("display-none"))
            document.querySelector("#insurance-error").classList.remove("display-none");
    } else {
        if(!document.querySelector("#insurance-error").classList.contains("display-none"))
            document.querySelector("#insurance-error").classList.add("display-none");
    }
    return ans;
}
function myFunction() {
    let height = parseInt(document
        .querySelector("#qad").value);

    let weight = parseInt(document
        .querySelector("#vazn").value);

    let result = document.querySelector(".AnswerBox");

    if (height === "" || isNaN(height))
        result.innerHTML = "";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "";

    // If both input is valid, calculate the bmi
    else {
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) /
            10000)).toFixed(2);
            result.innerHTML =`<span>${bmi}</span>`;
    }

}