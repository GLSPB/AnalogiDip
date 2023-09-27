let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Критерий";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Конструктор Тестов.ру";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Onlinetestpad.com/";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "TestWizard";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Наличие мобильной версии сайта";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "+";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "+";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "+";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Наличие адаптивного дизайна сайта";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "+";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "+";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "+";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Перечень разделов сайта в основной навигации ";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "Главная, Популярные, Мои тесты, Добавить тест, Коментарии";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "Тесты, Опросы, Кроссворды, Диалоги, Уроки,Уроки"; 
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "Мои тесты, Создать тест, Выйти";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Наличие личного кабинета";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "+";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "+";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "+";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "Возможность редактирования/изменения личных данных";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "+";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "+";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "+";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
tbody.appendChild(row_6);

let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "Восстановление/изменения пароля в личном кабинете";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "+";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "+";
let row_7_data_4 = document.createElement('td');
row_7_data_4.innerHTML = "-";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
row_7.appendChild(row_7_data_4);
tbody.appendChild(row_7);

let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "Наличие обратной связи";
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerHTML = "+";
let row_8_data_3 = document.createElement('td');
row_8_data_3.innerHTML = "+";
let row_8_data_4 = document.createElement('td');
row_8_data_4.innerHTML = "+";

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
row_8.appendChild(row_8_data_4);
tbody.appendChild(row_8);

let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "Обновление данных";
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerHTML = "+";
let row_9_data_3 = document.createElement('td');
row_9_data_3.innerHTML = "+";
let row_9_data_4 = document.createElement('td');
row_9_data_4.innerHTML = "+";

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
row_9.appendChild(row_9_data_4);
tbody.appendChild(row_9);

let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "Сортировка данных";
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerHTML = "+";
let row_10_data_3 = document.createElement('td');
row_10_data_3.innerHTML = "+";
let row_10_data_4 = document.createElement('td');
row_10_data_4.innerHTML = "+";

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
row_10.appendChild(row_10_data_4);
tbody.appendChild(row_10);

let row_11 = document.createElement('tr');
let row_11_data_1 = document.createElement('td');
row_11_data_1.innerHTML = "Фильтрация данных";
let row_11_data_2 = document.createElement('td');
row_11_data_2.innerHTML = "+";
let row_11_data_3 = document.createElement('td');
row_11_data_3.innerHTML = "+";
let row_11_data_4 = document.createElement('td');
row_11_data_4.innerHTML = "+";

row_11.appendChild(row_11_data_1);
row_11.appendChild(row_11_data_2);
row_11.appendChild(row_11_data_3);
row_11.appendChild(row_11_data_4);
tbody.appendChild(row_11);

let row_12 = document.createElement('tr');
let row_12_data_1 = document.createElement('td');
row_12_data_1.innerHTML = "Запросы (какие?)";
let row_12_data_2 = document.createElement('td');
row_12_data_2.innerHTML = "+";
let row_12_data_3 = document.createElement('td');
row_12_data_3.innerHTML = "+";
let row_12_data_4 = document.createElement('td');
row_12_data_4.innerHTML = "-";

row_12.appendChild(row_12_data_1);
row_12.appendChild(row_12_data_2);
row_12.appendChild(row_12_data_3);
row_12.appendChild(row_12_data_4);
tbody.appendChild(row_12);

let row_13 = document.createElement('tr');
let row_13_data_1 = document.createElement('td');
row_13_data_1.innerHTML = "Вывод отчетов / статистики";
let row_13_data_2 = document.createElement('td');
row_13_data_2.innerHTML = "+";
let row_13_data_3 = document.createElement('td');
row_13_data_3.innerHTML = "+";
let row_13_data_4 = document.createElement('td');
row_13_data_4.innerHTML = "+";

row_13.appendChild(row_13_data_1);
row_13.appendChild(row_13_data_2);
row_13.appendChild(row_13_data_3);
row_13.appendChild(row_13_data_4);
tbody.appendChild(row_13);