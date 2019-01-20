function Formdata(data) {
      number = document.getElementById("summa");
    if (number.value == '12' || number.value == "двенадцать" || number.value == "Двенадцать") {
        document.getElementById("nameid").innerHTML="Да вы знаток! Ответ " +number.value+ " способов верный!";


         } else {
         document.getElementById("nameid").innerHTML="Ответ "+number.value+ " не верный! Подумайте еще.";
    }
}

function Form2(data) {
    number = document.getElementById("summa2");
    if (number.value == '4' || number.value == "четыре" || number.value == "Четыре") {
        document.getElementById("nameid2").innerHTML="Да вы знаток! " +number.value+ " лжеца верный ответ!";


    } else {
        document.getElementById("nameid2").innerHTML="Ответ "+number.value+ " не верный! Подумайте еще.";
    }
}