/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

//1
const dropdownItem = document.querySelectorAll(".dropdown-item");
dropdownItem.forEach(item => item.classList.add("super-dropdown"));

//2
document.querySelector(".btn").classList.toggle("btn-secondary");

//3
document.querySelector(".menu").classList.remove("dropdown-menu");

//4
const dropdown = document.querySelector("div.dropdown");
dropdown.insertAdjacentHTML("afterend", '<a href="#">link</a>');

//5
document.getElementById("dropdownMenuButton").id = "superDropdown";

//6
const ariaLabelledby = document.querySelector("[aria-labelledby = 'dropdownMenuButton']");
ariaLabelledby.dataset.dd = "3";

//7
const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.removeAttribute("type");