/*let popup = document.getElementById("myPopup"),
    popupToggle = document.getElementById("form__button"),
    popupClose = document.querySelector(".close");

popupToggle.onclick = function(){
    popup.style.display = "block";
}
popupClose.onclick = function(){
    popup.style.display = "none";
}
window.onclick = function(event){
    if(event.target == popup){
        popup.style.display = "none";
    } 
}*/

let webType = prompt("Выберите тип сайта: \n 1- одностраничный \n 2- сайт-визитка \n 3- корпоративный сайт"),
    webDesign = prompt("Выберите дизайн сайта: \n 1- дизайн 1 \n 2- дизайн 2 \n 3- дизайн 3"),
    webAdaptity = prompt("Выберите адаптивность сайта: \n 1- под компьютерные устройства \n 2- под мобильные устройства \n 3- кроссплатформенный"),
    webOrder = Object.create([webType, webDesign, webAdaptity]), // Для описания заказа
    webCost = 0;

let matrixCost = [
    [500, 800, 1000], // цена за тип
    [600, 750, 600], // цена за дизайн
    [1500, 2000, 3000], // цена за адаптивность
];

if (webType == 1){
    webCost += matrixCost[0][0];
} else if (webType == 2){
    webCost += alert("2")
} else if (webType == 3){
    webCost += matrixCost[0][2];}

if (webDesign == 1){
    webCost += matrixCost[1][0];
} else if (webDesign == 2){
    webCost += matrixCost[1][1];
} else if (webDesign == 3){
    webCost += matrixCost[1][2];}

if (webAdaptity == 1){
    webCost += matrixCost[2][0];
} else if (webAdaptity == 2){
    webCost += matrixCost[2][1];
} else if (webAdaptity == 3){
    webCost += matrixCost[2][2];}

if (webCost == 0){
    alert("Обновите страницу и введите правильное значение!");} 
    else{
    alert("Ваш заказ будет стоить: " + webCost + " рублей");}