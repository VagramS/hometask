var message1 = "";
var message2 = "";
var number1 = "1122";

function guess(number1, number2) {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (number2[i] == number1[i]) {
               
                    message1 += "+";
                    number1=number1.replace(number1[i], "");
                    break;
            }
            else{
                if (number2[i] == number1[j] && j!=i) {
                    message2 += "-";
                    number1=number1.replace(number1[j], "");
                    break;
                }
            }
            
            if(number2[i]>7)
            {
            	alert("Число должно местить в себе цифры от 0 до 6 включительно");
            	break;
            }
        }
    }
}
guess(number1, prompt("Введи число:"));
alert(message1+message2);