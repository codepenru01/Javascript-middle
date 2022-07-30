var intro = "Xushkelibsiz!!";

var fistName = "Ismingiz nima ?";
var lastName = "Familangiz nima ?";
var addres ="Manzilingiz qayer ?";
var nomber = "Telefon raqamingizni kiriting ?";
var email = "Emailingizni kiriting ?";
var profession ="Nikingiz nima ?";
var hobby = "Hobiyingiz nima ?";
var info ="Etiboringiz uchun raxmat !";


var alertIntro = alert (intro);
var answerFistName = prompt (fistName).trim();
var answerLastName = prompt (lastName).trim();
var answerAddres = prompt (addres).trim();
var answerNomber = prompt (nomber).trim();
var answerEmail = prompt (email).trim();
var answerProfession = prompt (profession).trim();
var answerHobby = prompt (hobby).trim()
var alertInfo = alert (info);

console.log(`Foydalanuvchi haqida ma'lumot.
Foydalanuvchining Ismi ${answerFistName}. 
Foydalanuvchining Familiyasi ${answerLastName}.
Foydalanuvchining manzilingiz ${answerAddres}.
Foydalanuvchining Telefon raqami ${answerNomber}.
Foydalanuvchining Emaili ${answerEmail}.
Foydalanuvchining Niki ${answerProfession}.
Foydalanuvchining Hobby ${answerHobby}.
Foydalanuvchi haqida ma'lumot tugadi.
`);


var infirst = document.querySelector(".btn");
var inBody = document.querySelector("body");

infirst.addEventListener("click", function() {
    inBody.classList.toggle("dark");
})