var imagesArray = new Array(22);

imagesArray[0] = "images/cards/theFool.jpg";
imagesArray[1] = "images/cards/theMagician.jpg";
imagesArray[2] = "images/cards/theHighPriestess.jpg";
imagesArray[3] = "images/cards/theEmpress.jpg";
imagesArray[4] = "images/cards/theEmperor.jpg";
imagesArray[5] = "images/cards/theHierophant.jpg";
imagesArray[6] = "images/cards/theLovers.jpg";
imagesArray[7] = "images/cards/theChariot.jpg";
imagesArray[8] = "images/cards/strength.jpg";
imagesArray[9] = "images/cards/theHermit.jpg";
imagesArray[10] = "images/cards/wheelOfFortune.jpg";
imagesArray[11] = "images/cards/justice.jpg";
imagesArray[12] = "images/cards/theHangedMan.jpg";
imagesArray[13] = "images/cards/death.jpg";
imagesArray[14] = "images/cards/temperance.jpg";
imagesArray[15] = "images/cards/theDevil.jpg";
imagesArray[16] = "images/cards/theTower.jpg";
imagesArray[17] = "images/cards/theStar.jpg";
imagesArray[18] = "images/cards/theMoon.jpg";
imagesArray[19] = "images/cards/theSun.jpg";
imagesArray[20] = "images/cards/judgement.jpg";
imagesArray[21] = "images/cards/theWorld.jpg";

document.getElementById('middleCard').style.display = 'none';

var i = 0;

for(i = 0; i < imagesArray.length; i++) {
    var preload = new Image();
    preload.src = imagesArray[i];
}

var firstCard = 0;
var sum = 0;

function calculateBirthCard() {
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var year = document.getElementById("year").value;

    var yearOne = year.substring(0, 2);
    var yearTwo = year.substring(2, 4);

    sum = parseInt(day) + parseInt(month) + parseInt(yearOne) + parseInt(yearTwo);

    reduce();
    swap(sum);
}

function swap(tarotNumber) {
    document.getElementById('middleCard').style.display = 'none';

    switch(parseInt(tarotNumber)) {
        case 1:
            document.getElementById('leftCard').src = imagesArray[10];
            document.getElementById('rightCard').src = imagesArray[1];
            break;
        case 2:
            document.getElementById('leftCard').src = imagesArray[20];
            document.getElementById('rightCard').src = imagesArray[2];
            break;
        case 3:
            document.getElementById('leftCard').src = imagesArray[21];
            document.getElementById('rightCard').src = imagesArray[3];
            break;
        case 4:
            document.getElementById('leftCard').src = imagesArray[13];
            document.getElementById('rightCard').src = imagesArray[4];
            break;
        case 5:
            document.getElementById('leftCard').src = imagesArray[14];
            document.getElementById('rightCard').src = imagesArray[5];
            break;
        case 6:
            document.getElementById('leftCard').src = imagesArray[15];
            document.getElementById('rightCard').src = imagesArray[6];
            break;
        case 7:
            document.getElementById('leftCard').src = imagesArray[16];
            document.getElementById('rightCard').src = imagesArray[7];
            break;
        case 8:
            document.getElementById('leftCard').src = imagesArray[17];
            document.getElementById('rightCard').src = imagesArray[8];
            break;
        case 9:
            document.getElementById('leftCard').src = imagesArray[18];
            document.getElementById('rightCard').src = imagesArray[9];
            break;
        case 10:
            document.getElementById('leftCard').src = imagesArray[10];
            document.getElementById('rightCard').src = imagesArray[1];
            break;
        case 11:
            document.getElementById('leftCard').src = imagesArray[11];
            document.getElementById('rightCard').src = imagesArray[2];
            break;
        case 12:
            document.getElementById('leftCard').src = imagesArray[12];
            document.getElementById('rightCard').src = imagesArray[3];
            break;
        case 13:
            document.getElementById('leftCard').src = imagesArray[13];
            document.getElementById('rightCard').src = imagesArray[4];
            break;
        case 14:
            document.getElementById('leftCard').src = imagesArray[14];
            document.getElementById('rightCard').src = imagesArray[5];
            break;
        case 15:
            document.getElementById('leftCard').src = imagesArray[15];
            document.getElementById('rightCard').src = imagesArray[6];
            break;
        case 16:
            document.getElementById('leftCard').src = imagesArray[16];
            document.getElementById('rightCard').src = imagesArray[7];
            break;
        case 17:
            document.getElementById('leftCard').src = imagesArray[17];
            document.getElementById('rightCard').src = imagesArray[8];
            break;
        case 18:
            document.getElementById('leftCard').src = imagesArray[18];
            document.getElementById('rightCard').src = imagesArray[9];
            break;
        case 19:
            document.getElementById('middleCard').style.display = 'inline';
            document.getElementById('leftCard').src = imagesArray[19];
            document.getElementById('middleCard').src = imagesArray[1];
            document.getElementById('rightCard').src = imagesArray[10];
            break;
        case 20:
            document.getElementById('leftCard').src = imagesArray[20];
            document.getElementById('rightCard').src = imagesArray[2];
            break;
        case 21:
            document.getElementById('leftCard').src = imagesArray[21];
            document.getElementById('rightCard').src = imagesArray[3];
            break;
        case 22:
            document.getElementById('leftCard').src = imagesArray[22];
            document.getElementById('rightCard').src = imagesArray[22];
            break;           
    }
}

function reduce() {
    var firstDigit;
    var lastDigit;

    var sumStr = "" + sum;

    while(sum > 21) {
        //if is 3 digits
        if(sum >= 100) {
            first = sumStr.substr(0, 2);
            last = sumStr.substr(2);
        }
        else {
            first = sumStr.substr(0, 1);
            last = sumStr.substr(1);
            
        }
        sum = parseInt(first) + parseInt(last);
        sum = "" + sum;
    }
}