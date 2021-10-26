// alert("Hello! I am an alert box!!");

/*function Person(fName, lName, eMail) {
    this.fName = fName;
    this.lName = lName;
    this.eMail = eMail;
    this. showInfo = function() {
        alert(this.fName + ' ' + this.lName + ' ' + this.eMail)
    }
}

const person = new Person('Marius', 'Raudys', 'mr@stud.kitm.lt');
console.log(person.showInfo())*/
const table = document.querySelector('.myTable')

/*function Person(fName, lName, eMail) {
    this.fName = fName;
    this.lName = lName;
    this.eMail = eMail;
}

Person.prototype.addSalary = function(salary) {
    this.salary = salary;
}
Person.prototype.showInfo = function (){
    alert(this.fName + ' ' + this.lName + ' ' + this.eMail + ' '+ this.salary)
}
const person = new Person('Marius', 'Raudys', 'mr@stud.kitm.lt');
person.addSalary(1000)
//console.log(person.showInfo())
const person1 = new Person ('Vardas', 'Pavarde', 'el@gmail.com')
person1.addSalary(999)

let du = []
du.push(person, person1)

localStorage.setItem('person', JSON.stringify(du))
let item = JSON.parse(localStorage.getItem('person'))
    console.log(item)

for (let x = 0; x <item.length; x++) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = item[x].fName;
    cell2.innerHTML = item[x].lName;
    cell3.innerHTML = item[x].eMail;
    cell4.innerHTML = item[x].salary;
}*/

class Person {
    constructor( fName, lName, eMail, salary) {
        this.name = {
            fName,
            lName
        };
        this.eMail = eMail;
        this.salary = salary;
    }
    saveInfo() {
        //console.log(this.name.fName + ' ' + this.name.lName + ' ' + this.eMail + ' '+ this.salary)
        let du = []
        du.push(person, person1)
        localStorage.setItem('person', JSON.stringify(du))
    }


    showInfo() {
        let item = JSON.parse(localStorage.getItem('person'))
        for (let x = 0; x <item.length; x++) {
            let row = table.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = item[x].name.fName;
            cell2.innerHTML = item[x].name.lName;
            cell3.innerHTML = item[x].eMail;
            cell4.innerHTML = item[x].salary;
        }
    }
}
const person = new Person('Marius', 'Raudys', 'mr@stud.kitm.lt', 1000);
const person1 = new Person('Vardas', 'Pavarde', 'el@stud.kitm.lt', 999);

//console.log(person.showInfo())
person.showInfo();

