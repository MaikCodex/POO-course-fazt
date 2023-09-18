class Person {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}

const john = new Person("John", "Doe")
const jane = new Person("Jane", "Doe")

//! La asociacion dice que estos objetos pueden estar relacionados

//! Esto quiere decir que si yo quiero decir que johon es el padre de jane, puedo relacionarlos a través de una propiedad

//! Asociación

jane.parent = john;

console.log(jane)