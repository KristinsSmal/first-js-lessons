                                                    // ЗМІННА let і const
const name = 'Kris Smal';
let age = 38;
let boo = true;

const header = document.querySelector(".header"); 
// задали змінну шапці header
// const header = document.querySelector("#header"); 
// задали id для header для змінної const header
// const header = document.getElementById("header"); 
// або так задали id header для для змінної const header
console.log(header);

const navLinks = document.querySelectorAll(".nav__link");
// All - виведе всі посилання з шапки, без - тільки 1-е
// в сonst до navLink(s) + буква "s", як множина Link-ів, 
// хоча в <a class="nav__link" в HTML - просто link
console.log(navLinks);

const testBtn = document.querySelector('#testBtn');


                                                      // ФУНКЦІЯ
// ф-ція текстова
function sayHello() {
  let message = "Hello JS " + name;
  /*
 щоб вийшло в консолі не суцільно Hello JS Kris Smal - обов'язково 
 пробіл після JS,в лапках - "Hello JSпробіл"
 */
  console.log(message);
  /* задаємо локальні змінні - працюють тільки всередині function - тобто,
  якщо console.log(message); 
  записати після дужки } - буде помилка, що змінної message не існує
 */
}
sayHello();

// ф-ція математична - 1
function simpleMath() {
  let result = 1 + 2;
  console.log(result);
}
simpleMath(); // консоль - 3


// ф-ція математична - 2
function simpleMath(a, b) {  // a,b - параметри, відправлені у ф-цію
  let result = a + b; // змінна -результат (сума)
  console.log(result); // консоль виводить суму 33 
}
simpleMath(11, 22); // 11 і 22 - це наші параметри, що ми їх відправляєм у ф-цію simpleMath


// ф-ція математична - 3
function simpleMath(a, b) {
  let result = a + b; // виконали ф-цію
  return result; // ф-ція поверне результат - суму a + b
}
let sum = simpleMath(121, 223);
// задана змінна sum зберігає результат ф-ції і = сумі наших параметрів a і b
console.log(sum); // виводимо суму 
/*
оскільки result - локальна змінна і ми не можем її використовувати за 
межами function simpleMath(), а саму ф-цію необхідно використ. повторно -
є діректива RETURN - спец.для повернення значення ф-ції
*/


                                                    // СКРОЛ СТОРІНКИ
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY; // або можна записати: let scrollPos = window.pageYOffset;
  header.classList.add("red"); //використовуємо вище задану змінну header - див. const header = document.querySelector(".header");
  if (scrollPos > 0) {
    // прокручуєм вниз - значить відстань від верху > 0 - "шапка" стає red
    // + в CSS дописати .header.red {}
    header.classList.add("red");
  } else {
    // ми наверху сторінки?
    header.classList.remove("red"); // remove(стираємо) red, і знову "шапка" стає black
  }
}

testBtn.addEventListener("click", function () {
  console.log("clicked");
});

for(let navItem of navLinks) {
  // navItem нова змінна наших лінків
  // цикл for проходить по всіх наших лінках
  navItem.addEventListener("click", function () {
    // на змінну navItem "вішаєм" подію "click"
    console.log(navItem.text);
    // змінна navItem виводить текст-назву кожного лінку при кліку по ньому
  });
}