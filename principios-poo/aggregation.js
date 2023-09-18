//! La agregacion es una forma de asociacion, en el que relaciona dos objetos o mas, pero algunos objetos tienen un rol mucho mayor que otros

//! El que tiene el rol mayor determina el contenedor de los demás objetos y las relaciones que tienen estos.

//! El objeto que tiene el rol mayor y es el contenedor es llamado "agregate", y los objetos que estan dentro de este se llaman "component". Pero aun asi pueden ser independientes

const company = {
    name: "Mkcoders",
    employees: []
}

class Person {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}

const john = new Person("John", "Doe")
const jane = new Person("Jane", "Doe")

//! Aqui tengo dos objetos independientes(Person and company).

//! Para hacer una agreggation y que los objetos "Person" pertenezcan a company, podemos utilizar el metodo "Push", para agregar objetos dentro de un array

company.employees.push(john)
company.employees.push(jane)

console.log(company)