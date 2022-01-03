document.getElementsByTagName("h1")[0].style.fontSize = "3vw";



function myFunction() {
    console.log(1);
    console.log(document.getElementById('qad')[0].value);
    document.querySelector('.BMILabel').innerHTML() = document.getElementById('qad')[0].value / (document.getElementById('vazn')[0].value) * (document.getElementById('vazn')[0].value);
}