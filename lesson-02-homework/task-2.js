var employeeSalaries = {
    "Max": 0,
    "Pablo": 2541,
    "Andrew": 2414,
    "Stepan": 6820
};

var sum = 0;
for (var key in employeeSalaries) {
    sum = + employeeSalaries[key];
}
console.log("Загальна сума зарплат: " + sum)