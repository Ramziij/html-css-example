function checkAge(age){
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let age = prompt ('Сколько вам лет?', );

if (checkAge(age) == true) {
    alert('Доступ открыт');
} else {
    alert('Доступ закрыт');
    window.stop();
}